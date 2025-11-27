// References the lower limit of maximum number of pages
const lowerLimit = 5;

// References the upper limit of maximum number of pages
// References `$number-of-pages` in _paginator.scss
const upperLimit = 9;

export function maxPagesShown(numberOfPagesToShow: number): number {
    return Math.max(lowerLimit, Math.min(numberOfPagesToShow, upperLimit));
}
