import { ElementIdService } from "./ElementIdService";

describe("generateElementId", () => {
    it("should generate element id with increment of 1 each call", () => {
        const firstElementId = ElementIdService.generateElementId();
        const secondElementId = ElementIdService.generateElementId();

        expect(firstElementId).toBe("fkui-vue-element-0001");
        expect(secondElementId).toBe("fkui-vue-element-0002");
    });

    it("should generate element id with increment of 1 each call XXXX", () => {
        document.body.innerHTML = /* HTML */ `
            <div id="fkui-vue-element-0001"></div>
            <div id="fkui-vue-element-0002"></div>
            <div id="fkui-vue-element-0004"></div>
        `;

        const firstElementId = ElementIdService.generateElementId();
        const secondElementId = ElementIdService.generateElementId();

        expect(firstElementId).toBe("fkui-vue-element-0003");
        expect(secondElementId).toBe("fkui-vue-element-0005");
        ElementIdService.reset();
    });

    it("should generate element id with increment of 1 each call XXXX with support for specific prefix", () => {
        document.body.innerHTML = /* HTML */ `
            <div id="fkui-vue-element-0001"></div>
            <div id="fkui-vue-element-0002"></div>
            <div id="fkui-vue-element-0004"></div>
            <div id="foobar-vue-element-0001"></div>
            <div id="foobar-vue-element-0003"></div>
        `;

        const firstElementId = ElementIdService.generateElementId();
        const secondElementId = ElementIdService.generateElementId("foobar");
        const thirdElementId = ElementIdService.generateElementId("foobar");

        expect(firstElementId).toBe("fkui-vue-element-0003");
        expect(secondElementId).toBe("foobar-vue-element-0002");
        expect(thirdElementId).toBe("foobar-vue-element-0004");

        ElementIdService.reset();
    });
});
