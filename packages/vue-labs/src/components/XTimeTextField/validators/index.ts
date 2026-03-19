import { type Validator, ValidationService } from "@fkui/logic";
import { greaterThanTimeValidator } from "./GreaterThanTimeValidator";
import { hoursMinutesValidator } from "./HoursMinutesValidator";
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
