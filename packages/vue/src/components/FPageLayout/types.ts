/**
 * @public
 */
export interface FPageLayoutSlotMapping {
    simple: ["header", "content", "footer"];
    "left-panel": ["header", "left", "content", "footer"];
    "right-panel": ["header", "right", "content", "footer"];
    "three-column": ["header", "left", "right", "content", "footer"];
}

/**
 * @public
 */
export type FPageLayoutType = Exclude<keyof FPageLayoutSlotMapping, never>;

/**
 * @public
 */
export type FPageLayoutBindings<K extends string> = K extends FPageLayoutType
    ? {
          [Property in FPageLayoutSlotMapping[K][number]]: `${Property}`;
      }
    : never;
