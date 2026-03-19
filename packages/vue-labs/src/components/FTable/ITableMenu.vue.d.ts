/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-empty-object-type -- generated file */

import { type PublicProps, type VNode } from "vue";

declare function ITableMenu<T>(
    props: PublicProps,
    ctx?: Pick<NonNullable<Awaited<typeof setup>>, "attrs" | "emit" | "slots">,
    expose?: NonNullable<Awaited<typeof setup>>["expose"],
    setup?: Promise<{
        props: PublicProps;
        expose: (exposed: {}) => void;
        attrs: any;
        slots: {};
        emit: {};
    }>,
): VNode & {
    __ctx?: Awaited<typeof setup>;
};

declare const value: typeof ITableMenu;
export default value;
