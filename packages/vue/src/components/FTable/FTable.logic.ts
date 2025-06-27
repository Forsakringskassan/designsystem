export function navigate(
    e: KeyboardEvent,
    fromRowIndex: number,
    fromCellIndex: number,
    lastRowIndex: number,
    lastCellIndex: number,
): { row: number; cell: number } | undefined {
    if (
        fromRowIndex === undefined ||
        fromCellIndex === undefined ||
        lastRowIndex === undefined ||
        lastCellIndex === undefined
    ) {
        return;
    }

    if (e.code === "ArrowLeft") {
        e.preventDefault();
        if (fromCellIndex === 0) {
            return;
        }

        return {
            row: fromRowIndex,
            cell: fromCellIndex - 1,
        };
    }

    if (e.code === "ArrowRight") {
        e.preventDefault();
        if (fromCellIndex === lastCellIndex) {
            return;
        }

        return {
            row: fromRowIndex,
            cell: fromCellIndex + 1,
        };
    }

    if (e.code === "ArrowUp") {
        e.preventDefault();
        if (fromRowIndex === 1) {
            return;
        }

        return {
            row: fromRowIndex - 1,
            cell: fromCellIndex,
        };
    }

    if (e.code === "ArrowDown") {
        e.preventDefault();
        if (fromRowIndex === lastRowIndex) {
            return;
        }

        return {
            row: fromRowIndex + 1,
            cell: fromCellIndex,
        };
    }

    if (e.code === "Home") {
        e.preventDefault();
        if (e.ctrlKey) {
            return {
                row: 1,
                cell: 0,
            };
        } else {
            return {
                row: fromRowIndex,
                cell: 0,
            };
        }
    }

    if (e.code === "End") {
        e.preventDefault();
        if (e.ctrlKey) {
            return {
                row: lastRowIndex,
                cell: lastCellIndex,
            };
        } else {
            return {
                row: fromRowIndex,
                cell: lastCellIndex,
            };
        }
    }
}
