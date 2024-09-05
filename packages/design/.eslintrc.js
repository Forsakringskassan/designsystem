module.exports = {
    overrides: [
        {
            files: ["./*.[jt]s", "./stylelint/**/*.[jt]s"],
            extends: ["@forsakringskassan/cli"],
        },
    ],
};
