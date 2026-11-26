import { type Validator, ValidationService } from "@fkui/logic";
import { greaterThanTimeValidator } from "./greater-than-time-validator";
import { hoursMinutesValidator } from "./hours-minutes-validator";
import { lessThanTimeValidator } from "./less-than-time-validator";
import { maxTimeValidator } from "./max-time-validator";
import { minTimeValidator } from "./min-time-validator";

const validators: Validator[] = [
    hoursMinutesValidator,
    greaterThanTimeValidator,
    lessThanTimeValidator,
    maxTimeValidator,
    minTimeValidator,
];

for (const validator of validators) {
    ValidationService.registerValidator(validator);
}
