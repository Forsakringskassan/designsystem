/**
 * Returns the prefix used by palette custom properties, e.g.
 * `--fkds-palette-color-`.
 *
 * @internal
 */
export function getPalettePrefix(prefix: string): string {
    return `--${prefix}-palette-color-`;
}
