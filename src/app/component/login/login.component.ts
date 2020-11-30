import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isFormSubmitted: Boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(3)]]
    });
  }

  get formControlDetails() {
    return this.loginForm.controls;
  }

  onLoginSubmit() {
    this.isFormSubmitted = true;

    if (this.loginForm.valid) {
      this.router.navigate(["deshboard"]);
    }
  }

  navigateToRegistration() {
    this.router.navigate(["registration"]);
  }
}
