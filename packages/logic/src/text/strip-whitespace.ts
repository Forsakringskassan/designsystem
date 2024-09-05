/**
 * Strips all whitespace from the text (not only leading and trailing)
 *
 * @public
 * @param text - Text to strip whitespace from.
 * @returns Text with whitespace stripped.
 */
export function stripWhitespace(text: string): string {
    return text.replace(/\s+/g, "");
}
