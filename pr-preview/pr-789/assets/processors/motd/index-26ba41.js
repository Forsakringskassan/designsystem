// node_modules/@forsakringskassan/docs-generator/dist/processors/motd.mjs
var container = document.querySelector("#motd-container");
function showMessage(root, container2, message) {
  const { template: id = "motd-message" } = message;
  const selector = `template#${id}`;
  const template = root.querySelector(selector);
  if (!template) {
    throw new Error(`MOTD template element with id "${id}" not found!`);
  }
  const wrapper = template.content.cloneNode(true);
  const bindings = {
    message: message.message,
    ...message.bindings
  };
  for (const element of wrapper.querySelectorAll(
    "[data-bind]"
  )) {
    const key = element.dataset.bind;
    const value = bindings[key] ?? "";
    element.innerHTML = value;
    element.removeAttribute("data-bind");
  }
  if (message.preprocess) {
    message.preprocess(wrapper);
  }
  container2.append(wrapper);
}
var motd = {
  enabled: true,
  showMessage: showMessage.bind(null, document, container)
};
var motdSymbol = Symbol.for("motd");
window[motdSymbol] = motd;
