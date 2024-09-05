import { FDate } from "@fkui/date";
import {
    type InvalidDatesValidatorConfig,
    type InvalidWeekdaysValidatorConfig,
    type MaxDateValidatorConfig,
    type MinDateValidatorConfig,
    type ValidatorConfigs,
    isInvalidDatesConfig,
    isInvalidWeekdaysConfig,
} from "@fkui/logic";

export function isDayEnabled(day: FDate, config: ValidatorConfigs): boolean {
    return (
        passesMinDate(day, config.minDate) &&
        passesMaxDate(day, config.maxDate) &&
        passesInvalidDates(day, config.invalidDates) &&
        passesInvalidWeekdays(day, config.invalidWeekdays)
    );
}

function passesMinDate(
    day: FDate,
    config: Partial<MinDateValidatorConfig> | undefined,
): boolean {
    if (!config) {
        throw new Error("MinDate validator must be set");
    }

    if (!config.limit) {
        throw new Error("Invalid minDate config");
    }

    return config.limit <= day.toString();
}

function passesMaxDate(
    day: FDate,
    config: Partial<MaxDateValidatorConfig> | undefined,
): boolean {
    if (!config) {
        throw new Error("MaxDate validator must be set");
    }

    if (!config.limit) {
        throw new Error("Invalid maxDate config");
    }

    return day.toString() <= config.limit;
}

function passesInvalidDates(
    day: FDate,
    config: Partial<InvalidDatesValidatorConfig> | undefined,
): boolean {
    if (!config) {
        return true;
    }

    if (!isInvalidDatesConfig(config)) {
        throw new Error("Invalid invalidDates config");
    }

    return !config.dates.includes(day.toString());
}

function passesInvalidWeekdays(
    day: FDate,
    config: Partial<InvalidWeekdaysValidatorConfig> | undefined,
): boolean {
    if (!config) {
        return true;
    }

    if (!isInvalidWeekdaysConfig(config)) {
        throw new Error("Invalid invalidWeekdays config");
    }

    return !config.days.includes(day.weekDay);
}
