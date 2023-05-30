import { AbstractControl, ValidatorFn } from "@angular/forms";
import { ValidatorService } from "./validator.service";

export function validator(): ValidatorFn {
    return (
        control: AbstractControl
    ): { [key:string]:boolean} | null => {
        let validator = new ValidatorService;
        let valid = validator.validate_number(control.value)
        return valid ? null : {number:true}
    }
}