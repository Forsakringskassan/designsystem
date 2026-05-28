import { mount } from "@vue/test-utils";
import type {
    FDialogueTreeEndQuestion,
    FDialogueTreeSubQuestion,
    FDialogueTreeUserProgress,
} from "../components";
import { FDialogueTree } from "../components";
import { FDialogueTreeSelectors } from "./FDialogueTree.selectors";

const endQuestion: FDialogueTreeEndQuestion = {
    label: "Done",
    userData: { result: true },
};

const treeData: FDialogueTreeSubQuestion = {
    label: "Do you agree?",
    options: [
        { label: "Yes", question: endQuestion },
        { label: "No", question: endQuestion },
    ],
};

const defaultMountOptions = {
    global: { stubs: ["f-icon"] },
};

it("should use default selector when no selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FDialogueTree, {
        ...defaultMountOptions,
        props: {
            dialogueTree: treeData,
            modelValue: {} as FDialogueTreeUserProgress,
        },
    });
    const { selector } = FDialogueTreeSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe(".dialogue-tree");
    expect(root.classes()).toContain("dialogue-tree");
});

it("should use explicit selector when custom selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FDialogueTree, {
        ...defaultMountOptions,
        props: {
            dialogueTree: treeData,
            modelValue: {} as FDialogueTreeUserProgress,
        },
        attrs: { "data-test": "tree" },
    });
    const { selector } = FDialogueTreeSelectors('[data-test="tree"]');
    expect(selector).toBe('[data-test="tree"]');
    expect(wrapper.find(selector).exists()).toBeTruthy();
});

it("items() should return all dialogue item elements", () => {
    expect.assertions(1);
    const wrapper = mount(FDialogueTree, {
        ...defaultMountOptions,
        props: {
            dialogueTree: treeData,
            modelValue: {} as FDialogueTreeUserProgress,
        },
    });
    const { items } = FDialogueTreeSelectors();
    expect(wrapper.findAll(items()).length).toBeGreaterThan(0);
});

it("itemButton() should return the button selector", () => {
    expect.assertions(1);
    const wrapper = mount(FDialogueTree, {
        ...defaultMountOptions,
        props: {
            dialogueTree: treeData,
            modelValue: {} as FDialogueTreeUserProgress,
        },
    });
    const { items, itemButton } = FDialogueTreeSelectors();
    const firstItem = wrapper.findAll(items()).at(0);
    expect(firstItem?.find(itemButton()).exists()).toBeTruthy();
});
