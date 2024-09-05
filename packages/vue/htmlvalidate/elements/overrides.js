const { defineMetadata } = require("html-validate");

module.exports = defineMetadata({
    /* override <title> element so it can be used under <f-icon> as well (and is
     * inserted inside the <svg>) */
    title: {
        permittedParent: ["head", "f-icon"],
    },
});
