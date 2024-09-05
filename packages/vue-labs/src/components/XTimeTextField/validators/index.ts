import { ValidationService, type Validator } from "@fkui/logic";
import { hoursMinutesValidator } from "./HoursMinutesValidator";
import { greaterThanTimeValidator } from "./GreaterThanTimeValidator";
import { lessThanTimeValidator } from "./LessThanTimeValidator";
import { maxTimeValidator } from "./MaxTimeValidator";
import { minTimeValidator } from "./MinTimeValidator";

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
