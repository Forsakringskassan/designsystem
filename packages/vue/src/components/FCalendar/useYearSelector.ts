import { computed, nextTick, ref, type ShallowRef, type Ref } from "vue";
import { FDate } from "@fkui/date";
import { focus } from "@fkui/logic";
import {
    getHTMLElementFromVueRef,
    getHTMLElementsFromVueRef,
} from "../../utils";

interface UseYearSelector {
    activeYear: Ref<number>;
    displayYearSelectorAsOpen: Readonly<Ref<boolean>>;
    selectableYears: Readonly<Ref<number[]>>;
    yearSelectorStyle: Readonly<Ref<Record<string, string>>>;
    onClickSelectYear(year: number): void;
    onUpdateDisplayYearSelectorAsOpen(showYearSelector: boolean): Promise<void>;
    onYearSelectorKeyDown(event: KeyboardEvent): void;
}

interface UseYearSelectorOptions {
    calendar: Readonly<ShallowRef<unknown>>;
    modelValue: ShallowRef<FDate>;
    yearElements: Readonly<ShallowRef<unknown>>;
    yearSelector: Readonly<ShallowRef<unknown>>;
    calendarNavbar: Readonly<ShallowRef<unknown>>;
    minDate: ShallowRef<FDate>;
    maxDate: ShallowRef<FDate>;
    onChangeDate(date: FDate): void;
}

export function useYearSelector(
    options: UseYearSelectorOptions,
): UseYearSelector {
    const height = ref(NaN);
    const displayYearSelectorAsOpen = ref(false);
    const activeYear = ref(NaN);
    const { minDate, maxDate, onChangeDate } = options;

    const yearSelectorStyle = computed(() => {
        return { "--f-calendar-height": `${height.value}px` };
    });

    const currentYear = computed(() => {
        return options.modelValue.value.year;
    });

    const selectableYears = computed((): number[] => {
        const selectableYears = [];
        for (
            let year = minDate.value.year;
            year <= maxDate.value.year;
            year++
        ) {
            selectableYears.push(year);
        }
        return selectableYears;
    });

    async function onUpdateDisplayYearSelectorAsOpen(
        showYearSelector: boolean,
    ): Promise<void> {
        if (showYearSelector) {
            height.value = getHTMLElementFromVueRef(
                options.calendar.value,
            ).getBoundingClientRect().height;
        }

        displayYearSelectorAsOpen.value = showYearSelector;

        if (displayYearSelectorAsOpen.value) {
            await nextTick();
            activeYear.value = currentYear.value;
            updateYearSelectorFocus();
        }
    }

    function updateYearSelectorFocus(): void {
        const index = selectableYears.value.indexOf(activeYear.value);
        const activeElement = getHTMLElementsFromVueRef(
            options.yearElements.value,
        )[index];
        focus(activeElement);

        const wrapperElement = getHTMLElementFromVueRef(
            options.yearSelector.value,
        );
        const wrapperHeight = wrapperElement.getBoundingClientRect().height;
        const activeElementHeight =
            activeElement.getBoundingClientRect().height;
        const centerPosition =
            activeElement.offsetTop - (wrapperHeight - activeElementHeight) / 2;

        // Scroll activeElement to center of wrapper.
        wrapperElement.scrollTo({ top: centerPosition, behavior: "instant" });
    }

    function onYearSelectorKeyDown(event: KeyboardEvent): void {
        if (event.ctrlKey || !displayYearSelectorAsOpen.value) {
            return;
        }

        const firstYear = minDate.value.year;
        const lastYear = maxDate.value.year;

        switch (event.key) {
            case "ArrowUp":
                event.preventDefault();
                activeYear.value =
                    activeYear.value === firstYear
                        ? lastYear
                        : --activeYear.value;
                updateYearSelectorFocus();
                break;
            case "ArrowDown":
                event.preventDefault();
                activeYear.value =
                    activeYear.value === lastYear
                        ? firstYear
                        : ++activeYear.value;
                updateYearSelectorFocus();
                break;
            case "Enter":
            case " ":
                event.preventDefault();
                selectYear();
                break;
            case "Tab":
            case "Escape":
                event.preventDefault();
                closeYearSelector();
                break;
            default:
                break;
        }
    }

    function onClickSelectYear(year: number): void {
        activeYear.value = year;
        selectYear();
    }

    function selectYear(): void {
        let selectedDate = options.modelValue.value.addYears(
            activeYear.value - currentYear.value,
        );
        if (selectedDate.isBefore(minDate.value)) {
            selectedDate = minDate.value;
        } else if (selectedDate.isAfter(maxDate.value)) {
            selectedDate = maxDate.value;
        }
        onChangeDate(selectedDate);
        closeYearSelector();
    }

    function closeYearSelector(): void {
        displayYearSelectorAsOpen.value = false;
        const calendarNavbar = getHTMLElementFromVueRef(
            options.calendarNavbar.value,
        );
        const calendarNavbarButton = calendarNavbar.querySelector("button");
        focus(calendarNavbarButton);
    }

    return {
        onUpdateDisplayYearSelectorAsOpen,
        yearSelectorStyle,
        displayYearSelectorAsOpen,
        activeYear,
        onYearSelectorKeyDown,
        onClickSelectYear,
        selectableYears,
    };
}
