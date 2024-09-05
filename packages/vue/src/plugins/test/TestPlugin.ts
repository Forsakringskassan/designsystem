import {
    type App,
    type Directive,
    type DirectiveBinding,
    type Plugin,
} from "vue";

const DATA_TEST_ATTRIBUTE_NAME = "data-test";

function throwErrorIfEmpty(value: unknown): never | void {
    if (!value) {
        throw new Error(`Did you forgot to add a value to v-test?`);
    }
}

const TestDirective: Directive<HTMLElement, string> = {
    mounted(el: HTMLElement, { value }: DirectiveBinding): void {
        throwErrorIfEmpty(value);
        el.setAttribute(DATA_TEST_ATTRIBUTE_NAME, value);
    },
    updated(el: HTMLElement, { value }: DirectiveBinding): void {
        throwErrorIfEmpty(value);
        el.setAttribute(DATA_TEST_ATTRIBUTE_NAME, value);
    },
};

/**
 * @public
 */
export const TestPlugin: Plugin = {
    install(app: App) {
        app.directive("test", TestDirective);
    },
};
