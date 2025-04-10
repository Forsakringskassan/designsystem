import conventionalcommits from "conventional-changelog-conventionalcommits";
import { changelogRules } from "@forsakringskassan/semantic-release-common";

export default () => {
    return conventionalcommits({ types: changelogRules });
};
