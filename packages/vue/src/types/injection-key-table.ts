import { type InjectionKey } from "vue";

/**
 * Vue provides the utility type [`InjectionKey`][injection-key] for creating
 * typesafe provide/inject. This utility type allows to provide an entire
 * interface to be constructed as a single constant.
 *
 * [injection-key]: https://vuejs.org/api/composition-api-dependency-injection
 *
 * @example
 *
 * Create API and injection keys:
 *
 * ```ts
 * interface AwesomeAPI {
 *   readonly foo: string;
 *   bar(): number;
 * }
 *
 * // type-safe: all properties of given interface must be present
 * const injectionKeys: InjectionKeyTable<AwesomeAPI> = {
 *   foo: Symbol("foo"),
 *   bar: Symbol("bar"),
 * };
 * ```
 *
 * Create a composable is now type-safe, only:
 *
 * ```ts
 * function useAwesome(): AwesomeAPI {
 *   return {
 *     // type-safe: all properties of the interface must be present and the
 *     // default implementation value must match the type
 *     foo: inject(injectionKeys.foo, "default foo"),
 *     bar: inject(injectionKeys.bar, () => 0),
 *   };
 * }
 * ```
 *
 * The provider is now type-safe:
 *
 * ```ts
 * // type-safe: provided value must match type
 * provide(injectionKey.foo, "foo value");
 * provide(injectionKey.bar, () => 1);
 * ```
 *
 * @internal
 * @typeParam T - Interface to get properties from.
 */
export type InjectionKeyTable<T extends object> = {
    [K in keyof T]: InjectionKey<T[K]>;
};
