export function computePages(options: {
    currentPage: number;
    numberOfPages: number;
    maxPagesShown: number;
}): number[] {
    const { currentPage, numberOfPages, maxPagesShown } = options;

    let startPage = Math.max(currentPage - Math.floor(maxPagesShown / 2), 1);
    let endPage = startPage + maxPagesShown - 1;
    if (endPage > numberOfPages) {
        endPage = numberOfPages;
        startPage = Math.max(endPage - maxPagesShown + 1, 1);
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    if (startPage > 1) {
        pages.shift(); //remove first array item
        pages.unshift(1); //add first
    }

    if (endPage < numberOfPages) {
        pages.pop(); //remove last array item
        pages.push(numberOfPages); //add last
    }

    return pages;
}
