#!/usr/bin/env bash
set -euo pipefail

# Queue items are persisted as JSON files on deploy-queue branch.
# This makes deploy requests durable even when workflow concurrency drops waiting runs.

QUEUE_BRANCH="${QUEUE_BRANCH:-deploy-queue}"
QUEUE_KIND="${QUEUE_KIND:?QUEUE_KIND must be set}"
QUEUE_SOURCE_REF="${QUEUE_SOURCE_REF:-${GITHUB_REF:-}}"
QUEUE_SOURCE_SHA="${QUEUE_SOURCE_SHA:-${GITHUB_SHA:-}}"
QUEUE_REQUESTED_BY="${QUEUE_REQUESTED_BY:-${GITHUB_ACTOR:-}}"
QUEUE_SOURCE_WORKFLOW="${QUEUE_SOURCE_WORKFLOW:-${GITHUB_WORKFLOW:-}}"
QUEUE_PR_NUMBER="${QUEUE_PR_NUMBER:-}"
QUEUE_PR_ACTION="${QUEUE_PR_ACTION:-}"

if [[ -n "${QUEUE_PR_NUMBER}" ]]; then
    PR_NUMBER_JSON="${QUEUE_PR_NUMBER}"
else
    PR_NUMBER_JSON="null"
fi

if [[ -n "${QUEUE_PR_ACTION}" ]]; then
    PR_ACTION_JSON="\"${QUEUE_PR_ACTION}\""
else
    PR_ACTION_JSON="null"
fi

if [[ -z "${GITHUB_TOKEN:-}" ]]; then
    echo "GITHUB_TOKEN must be available" >&2
    exit 1
fi

if [[ -z "${QUEUE_SOURCE_REF}" || -z "${QUEUE_SOURCE_SHA}" ]]; then
    echo "QUEUE_SOURCE_REF and QUEUE_SOURCE_SHA must be set" >&2
    exit 1
fi

QUEUE_TIMESTAMP="$(date -u +%Y%m%dT%H%M%SZ)"
QUEUE_ID="${QUEUE_TIMESTAMP}-${GITHUB_RUN_ID:-manual}-${GITHUB_RUN_ATTEMPT:-1}-${QUEUE_KIND}"
QUEUE_FILE="queue/pending/${QUEUE_ID}.json"
QUEUE_REPO_URL="https://x-access-token:${GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY}.git"

WORKDIR="$(mktemp -d)"
cleanup() {
    rm -rf "${WORKDIR}"
}
trap cleanup EXIT

git -C "${WORKDIR}" init
git -C "${WORKDIR}" remote add origin "${QUEUE_REPO_URL}"
git -C "${WORKDIR}" config user.email "${GITHUB_ACTOR}@users.noreply.github.com"
git -C "${WORKDIR}" config user.name "${GITHUB_ACTOR}"

if git -C "${WORKDIR}" ls-remote --exit-code --heads origin "${QUEUE_BRANCH}" >/dev/null 2>&1; then
    git -C "${WORKDIR}" fetch --depth=1 origin "${QUEUE_BRANCH}"
    git -C "${WORKDIR}" checkout -B "${QUEUE_BRANCH}" FETCH_HEAD
else
    git -C "${WORKDIR}" checkout --orphan "${QUEUE_BRANCH}"
    git -C "${WORKDIR}" rm -rf . >/dev/null 2>&1 || true
fi

mkdir -p "${WORKDIR}/queue/pending" "${WORKDIR}/queue/processing"
cat > "${WORKDIR}/${QUEUE_FILE}" <<EOF
{
  "id": "${QUEUE_ID}",
  "kind": "${QUEUE_KIND}",
  "source_ref": "${QUEUE_SOURCE_REF}",
  "source_sha": "${QUEUE_SOURCE_SHA}",
  "pr_number": ${PR_NUMBER_JSON},
  "pr_action": ${PR_ACTION_JSON},
  "requested_by": "${QUEUE_REQUESTED_BY}",
  "source_workflow": "${QUEUE_SOURCE_WORKFLOW}",
  "requested_at": "$(date -u +%Y-%m-%dT%H:%M:%SZ)"
}
EOF

git -C "${WORKDIR}" add "${QUEUE_FILE}"
git -C "${WORKDIR}" commit -m "chore(ci): enqueue ${QUEUE_KIND} deploy [skip ci]"

for attempt in 1 2 3 4 5; do
    if git -C "${WORKDIR}" push origin "HEAD:${QUEUE_BRANCH}"; then
        echo "Queued item ${QUEUE_ID}"
        exit 0
    fi

    if [[ "${attempt}" -eq 5 ]]; then
        echo "Failed to push queue item after ${attempt} attempts" >&2
        exit 1
    fi

    git -C "${WORKDIR}" fetch origin "${QUEUE_BRANCH}"
    git -C "${WORKDIR}" rebase FETCH_HEAD
done
