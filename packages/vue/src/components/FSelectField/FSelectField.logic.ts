export function resolveWidthClass(
    words: string,
    inline: boolean,
): string | undefined {
    return inline
        ? undefined
        : words
              .split(" ")
              .map((word) => `i-width-${word}`)
              .join(" ");
}
