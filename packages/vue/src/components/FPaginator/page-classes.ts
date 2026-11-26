export function pageClasses(page: number, currentPage: number): string[] {
    const rootClass = "paginator__page";
    const classes = [rootClass];

    // --active
    if (page === currentPage) {
        classes.push(`${rootClass}--active`);
    }

    return classes;
}
