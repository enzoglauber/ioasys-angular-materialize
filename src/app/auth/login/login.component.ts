import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../../core/services';
import { LoadingService } from '../../core/services/loading.service';
import { Error } from '../../shared/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error: Error;
  authForm: FormGroup;
  submitted = false;
  showPassword: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder,
    private loadingService: LoadingService
  ) {
    // use FormBuilder to create a form group
    this.authForm = this.fb.group({
      'email': ['testeapple@ioasys.com.br', [Validators.required, Validators.email]],
      'password': ['12341234', Validators.required]
    });
  }

  ngOnInit(): void { }

  toggleShowPassword(): void {
    this.showPassword = !this.showPassword
  }

  get control() {
    return this.authForm.controls;
  }

  submitForm() {
    this.submitted = true;
    this.setError(null);
    this.loadingService.show()
    // 
    const credentials = this.authForm.value;
    this.userService.sign_in(credentials).subscribe(
      (data) => {
        this.loadingService.hide()
        this.router.navigateByUrl('/companies')
      },
      (error: Error) => {
        this.loadingService.hide()
        this.setError(error)
      })
  }

  private setError(error: Error) {
    const codition = error === null || error?.errors?.length
    this.error = (codition)
                  ? error
                  : null;
  }
}
