chai.Assertion.addMethod("trimmedText", function (expectedString) {
    const $element = this._obj;

    new chai.Assertion($element).to.be.exist;

    const actual = $element
        .text()
        .replace(/\r/g, " ")
        .replace(/\s+/g, " ")
        .trim();
    this.assert(
        actual === expectedString,
        "Expected #{this} to have trimmed text #{exp}, but the text was #{act} after trimmed",
        "expected #{this} not to have text #{exp} after trimmed",
        expectedString,
        actual,
    );
});
