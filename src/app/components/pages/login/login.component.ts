import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm!: FormGroup;
  isSubmitted = false;
  returnURL = '';

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(6), Validators.required]],
    });
    this.returnURL = this.activatedRoute.snapshot.queryParams['returnUrl'];
  }

  get fc() {
    return this.loginForm.controls;
  }

  submit(form: FormGroup) {
    this.isSubmitted =  true;
    if(this.loginForm.invalid) return;
    this.userService.login(form.value).subscribe({
      next: () => {
        this.router.navigateByUrl(this.returnURL)
      }
    })
  }
}
