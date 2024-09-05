function capitalize(s) {
    if (typeof s !== "string") {
        return "";
    }
    return s.charAt(0).toUpperCase() + s.slice(1);
}

function camelCase(string) {
    return string.replace(/-([a-z])/gi, function (all, letter) {
        return letter.toUpperCase();
    });
}

module.exports = { capitalize, camelCase };
