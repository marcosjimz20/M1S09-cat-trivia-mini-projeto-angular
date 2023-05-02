import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ConnectionService, User } from '../shared/services/connection.service';

type FormProps = {
  nameUser: FormControl<string | null>;
  passwordUser: FormControl<string | null>;
  confirmPassword: FormControl<string | null>;
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup<FormProps> = new FormGroup({
    nameUser: new FormControl(""),
    passwordUser: new FormControl(""),
    confirmPassword: new FormControl(""),
  }); 

  constructor(
    private connectionService: ConnectionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.criarForm();
  }

  checkRegister() {
    console.log("login | check register");
    if (!this.enter()) {
      window.alert("Senha não é a mesma.");
      return;
    }

    if (!this.passwordValid()) {
      window.alert("Senha inválida.");
      return;
    }

    const user: User = {
      nameUser: this.loginForm.value.nameUser!,
      passwordUser: this.loginForm.value.passwordUser!,
    };
    this.criarForm();

    if (this.connectionService.registerUser(user))
      this.router.navigate(["/home"]);
  }


  criarForm() {
    this.loginForm = new FormGroup({
      nameUser: new FormControl(''),
      passwordUser: new FormControl(''),
      confirmPassword: new FormControl(''),
    });

  }

  enter() {
    return this.loginForm.value.passwordUser === this.loginForm.value.confirmPassword;
    }

    passwordValid() {
      const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).+$/;
      return this.loginForm.value.passwordUser?.match(regex);
    }
}
