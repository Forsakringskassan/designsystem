/* eslint-disable @typescript-eslint/no-empty-object-type, @typescript-eslint/no-explicit-any -- needed to work */
declare module "*.vue" {
    import { type DefineComponent } from "vue";

    const component: DefineComponent<{}, {}, any>;
    export default component;
}
