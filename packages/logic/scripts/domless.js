console.log("Testing if @fkui/logic can be imported in DOM-less environment");

try {
    require("../lib/cjs");
    console.log("Great Success! And There Was Much Rejoicing! \u{1F389}");
} catch (err) {
    process.exitCode = 1;
    console.error("Failed to import @fkui/logic without DOM");
    console.error(err);
}
