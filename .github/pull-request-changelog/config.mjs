import { changelogRules } from "@forsakringskassan/semantic-release-common";
import conventionalcommits from "conventional-changelog-conventionalcommits";

export default () => {
    return conventionalcommits({ types: changelogRules });
};
