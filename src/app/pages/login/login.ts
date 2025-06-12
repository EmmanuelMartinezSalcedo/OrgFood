import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  LucideAngularModule,
  User,
  KeyRound,
  LucideIconData,
} from 'lucide-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [LucideAngularModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  userIcon: LucideIconData;
  passwordIcon: LucideIconData;
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.userIcon = User;
    this.passwordIcon = KeyRound;

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      sessionStorage.setItem('loggedIn', 'true');
      this.router.navigate(['/']);
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
