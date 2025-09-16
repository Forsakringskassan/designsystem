import { ref } from "vue";

// References the lower limit of maximum number of pages
const lowerLimit = ref(5);

// References the upper limit of maximum number of pages
// References `$number-of-pages` in _paginator.scss
const upperLimit = ref(9);

export function maxPagesShown(numberOfPagesToShow: number): number {
    return Math.max(
        lowerLimit.value,
        Math.min(numberOfPagesToShow, upperLimit.value),
    );
}

export function pageClasses(page: number, currentPage: number): string[] {
    const rootClass = "paginator__page";
    const classes = [rootClass];

    // --active
    if (page === currentPage) {
        classes.push(`${rootClass}--active`);
    }

    return classes;
}
