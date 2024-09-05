import { VueWrapper, mount } from "@vue/test-utils";
import FOutputField from "./FOutputField.vue";

function createWrapper({
    props = {},
    slots = {},
    attrs = {},
} = {}): VueWrapper {
    return mount(FOutputField, {
        attrs: { ...attrs },
        props: { for: "", ...props },
        slots: { default: "1234", ...slots },
    });
}

describe("snapshots", () => {
    it("should match snapshot with output and for attribute", () => {
        const wrapper = createWrapper({
            props: {
                for: "inputid",
            },
        });

        expect(wrapper.element).toMatchSnapshot();
    });

    it("should match snapshot with output and two for attributes", () => {
        const wrapper = createWrapper({
            props: {
                for: "inputid inputid2",
            },
        });

        expect(wrapper.element).toMatchSnapshot();
    });

    it("should match snapshot with label, tooltip, output and for attribute", () => {
        const wrapper = createWrapper({
            slots: { label: "Summa", tooltip: "TOOLTIP" },
            props: {
                for: "inputid",
            },
        });

        expect(wrapper.element).toMatchSnapshot();
    });
});

describe("props", () => {
    describe("id", () => {
        it("should set matching id on <label> and <output>", () => {
            expect.assertions(2);
            const id = "foobar";
            const wrapper = mount(FOutputField, {
                props: {
                    for: "my-awesome-id",
                    id,
                },
            });
            const label = wrapper.get("label");
            const output = wrapper.get("output");
            expect(label.attributes("for")).toEqual(id);
            expect(output.attributes("id")).toEqual(id);
        });

        it("should autogenerate id if not explicitly given", () => {
            expect.assertions(1);
            const wrapper = mount(FOutputField, {
                props: {
                    for: "my-awesome-id",
                },
            });
            const label = wrapper.get("label");
            const output = wrapper.get("output");
            const id = output.attributes("id");
            expect(label.attributes("for")).toEqual(id);
        });
    });

    describe("for", () => {
        it("should handle space-separated string", () => {
            expect.assertions(1);
            const id = "foobar";
            const wrapper = mount(FOutputField, {
                props: {
                    for: id,
                },
            });
            const output = wrapper.get("output").element as HTMLOutputElement;
            expect(Array.from(output.htmlFor)).toEqual([id]);
        });

        it("should handle array", () => {
            expect.assertions(1);
            const id1 = "foo";
            const id2 = "bar";
            const wrapper = mount(FOutputField, {
                props: {
                    for: [id1, id2],
                },
            });
            const output = wrapper.get("output").element as HTMLOutputElement;
            expect(Array.from(output.htmlFor)).toEqual([id1, id2]);
        });

        it("should handle mixing array and space-separated string", () => {
            expect.assertions(1);
            const id1 = "foo bar";
            const id2 = "baz";
            const wrapper = mount(FOutputField, {
                props: {
                    for: [id1, id2],
                },
            });
            const output = wrapper.get("output").element as HTMLOutputElement;
            expect(Array.from(output.htmlFor)).toEqual(["foo", "bar", "baz"]);
        });
    });
});

describe("attributes", () => {
    it("should pass attributes", () => {
        const wrapper = createWrapper({
            attrs: {
                for: "my-awesome-id",
                foo: "bar",
            },
        });
        const output = wrapper.get("output");
        expect(output.attributes("foo")).toBe("bar");
    });
});
