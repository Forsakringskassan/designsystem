import {
    type ShallowRef,
    type Ref,
    computed,
    nextTick,
    ref,
    shallowRef,
    watchEffect,
} from "vue";
import { FDate, FYear, clamp, range } from "@fkui/date";
import { focus } from "@fkui/logic";
import {
    findHTMLElementFromVueRef,
    getHTMLElementFromVueRef,
    getHTMLElementsFromVueRef,
} from "../../utils";

/**
 * @internal
 */
export interface UseYearSelector {
    readonly activeYear: Ref<FYear>;
    readonly yearSelectorOpen: Readonly<Ref<boolean>>;
    readonly selectableYears: Readonly<ShallowRef<FYear[]>>;
    readonly yearSelectorStyle: Readonly<Ref<Record<string, string>>>;
    onClickSelectYear(year: FYear): void;
    onYearSelectorKeyDown(event: KeyboardEvent): void;
}

/**
 * @internal
 */
export interface UseYearSelectorOptions {
    readonly calendar: Readonly<ShallowRef<HTMLElement | null>>;
    readonly modelValue: ShallowRef<FDate>;
    readonly yearElements: Readonly<ShallowRef<HTMLElement | null>>;
    readonly yearSelector: Readonly<ShallowRef<HTMLElement | null>>;
    readonly calendarNavbar: Readonly<ShallowRef<HTMLElement | null>>;
    readonly minDate: ShallowRef<FDate>;
    readonly maxDate: ShallowRef<FDate>;
    onChangeDate(date: FDate): void;
}

/**
 * @internal
 */
export function useYearSelector(
    options: UseYearSelectorOptions,
): UseYearSelector {
    const height = ref(NaN);
    const yearSelectorOpen = ref(false);
    const activeYear = shallowRef(FYear.fromYear("invalid"));
    const {
        minDate,
        maxDate,
        modelValue,
        calendar,
        calendarNavbar,
        yearSelector,
        onChangeDate,
    } = options;

    const yearSelectorStyle = computed(() => {
        return { "--f-calendar-height": `${height.value}px` };
    });

    const minYear = computed(() => FYear.fromDate(minDate.value));
    const maxYear = computed(() => FYear.fromDate(maxDate.value));
    const currentYear = computed(() => FYear.fromDate(modelValue.value));
    const selectableYears = computed(() =>
        Array.from(range(minYear.value, maxYear.value)),
    );

    watchEffect(async () => {
        if (!yearSelectorOpen.value) {
            return;
        }

        const element = findHTMLElementFromVueRef(calendar.value);
        if (element) {
            height.value = element.getBoundingClientRect().height;
        }

        await nextTick();

        activeYear.value = currentYear.value;
        updateYearSelectorFocus();
    });

    function updateYearSelectorFocus(): void {
        const index = selectableYears.value.findIndex((it) =>
            it.equals(activeYear.value),
        );
        const yearElements = getHTMLElementsFromVueRef(
            options.yearElements.value,
        );
        const activeElement = yearElements[index];
        focus(activeElement);

        const wrapperElement = getHTMLElementFromVueRef(yearSelector.value);
        const wrapperHeight = wrapperElement.getBoundingClientRect().height;
        const activeElementHeight =
            activeElement.getBoundingClientRect().height;
        const centerPosition =
            activeElement.offsetTop - (wrapperHeight - activeElementHeight) / 2;

        // Scroll activeElement to center of wrapper.
        wrapperElement.scrollTo({ top: centerPosition, behavior: "instant" });
    }

    function onYearSelectorKeyDown(event: KeyboardEvent): void {
        if (event.ctrlKey || !yearSelectorOpen.value) {
            return;
        }

        const firstYear = minYear.value;
        const lastYear = maxYear.value;

        switch (event.key) {
            case "ArrowUp":
                event.preventDefault();
                activeYear.value = activeYear.value.equals(firstYear)
                    ? lastYear
                    : activeYear.value.previous();
                updateYearSelectorFocus();
                break;
            case "ArrowDown":
                event.preventDefault();
                activeYear.value = activeYear.value.equals(lastYear)
                    ? firstYear
                    : activeYear.value.next();
                updateYearSelectorFocus();
                break;
            case "Enter":
            case " ":
                event.preventDefault();
                selectYear();
                break;
            case "Tab":
                event.preventDefault();
                closeYearSelector();
                break;
            default:
                break;
        }
    }

    function onClickSelectYear(year: FYear): void {
        activeYear.value = year;
        selectYear();
    }

    function selectYear(): void {
        const offset = activeYear.value.value - currentYear.value.value;
        const updatedDate = modelValue.value.addYears(offset);
        onChangeDate(clamp(updatedDate, minDate.value, maxDate.value));
        closeYearSelector();
    }

    function closeYearSelector(): void {
        yearSelectorOpen.value = false;
        const button = getHTMLElementFromVueRef(
            calendarNavbar.value,
        ).querySelector("button");
        focus(button);
    }

    return {
        yearSelectorStyle,
        yearSelectorOpen,
        activeYear,
        onYearSelectorKeyDown,
        onClickSelectYear,
        selectableYears,
    };
}
