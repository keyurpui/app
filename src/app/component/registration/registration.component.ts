import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"]
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  isFormSubmitted: Boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.registrationForm = this.formBuilder.group(
      {
        firstName: ["", [Validators.required]],
        lastName: ["", [Validators.required]],
        email: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.minLength(3)]],
        confirmPassword: ["", [Validators.required, Validators.minLength(3)]]
      },
      {
        validator: this.checkIfMatchingPasswords("password", "confirmPassword")
      }
    );
  }

  checkIfMatchingPasswords(
    passwordKey: string,
    passwordConfirmationKey: string
  ) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordKey],
        passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (
        !passwordInput.value ||
        passwordInput.value !== passwordConfirmationInput.value
      ) {
        return passwordConfirmationInput.setErrors({ notEquivalent: true });
      } else {
        return passwordConfirmationInput.setErrors(null);
      }
    };
  }

  get formControlDetails() {
    return this.registrationForm.controls;
  }

  onRefistrationSubmit() {
    this.isFormSubmitted = true;

    if (this.registrationForm.valid) {
      this.router.navigate(["deshboard"]);
    }
  }
}
