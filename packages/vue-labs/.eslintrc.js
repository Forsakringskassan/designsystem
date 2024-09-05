module.exports = {
    overrides: [
        {
            files: ["src/**/examples/*.vue"],
            rules: {
                "@typescript-eslint/explicit-module-boundary-types": "off",
            },
        },
    ],
};
