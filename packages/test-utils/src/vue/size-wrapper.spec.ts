import { mount } from "@vue/test-utils";
import { SizeWrapper } from "./size-wrapper";

it("should match snapshot", () => {
    expect.assertions(1);
    const wrapper = mount(SizeWrapper, {
        slots: {
            default: /* HTML */ ` <p>lorem ipsum: {{ params.variant }}</p> `,
        },
    });
    /* eslint-disable-next-line jest/no-large-snapshots -- easier to read */
    expect(wrapper.html()).toMatchInlineSnapshot(`
        <div>
          <div style="border: 1px dashed hotpink; width: 320px;" data-variant="min"><span>320px</span>
            <p>lorem ipsum: min</p>
          </div>
          <div style="border: 1px dashed hotpink; width: 639px;" data-variant="mobile"><span>639px</span>
            <p>lorem ipsum: mobile</p>
          </div>
          <div style="border: 1px dashed hotpink; width: 640px;" data-variant="desktop-low"><span>640px</span>
            <p>lorem ipsum: desktop-low</p>
          </div>
          <div style="border: 1px dashed hotpink; width: 1024px;" data-variant="desktop-normal"><span>1024px</span>
            <p>lorem ipsum: desktop-normal</p>
          </div>
        </div>
    `);
});
