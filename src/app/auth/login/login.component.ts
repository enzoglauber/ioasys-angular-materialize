import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  authForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder
  ) {
    // use FormBuilder to create a form group
    this.authForm = this.fb.group({
      'email': ['a', Validators.required],
      'password': ['b', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  submitForm() {
    // this.isSubmitting = true;
    // this.errors = {errors: {}};

    const credentials = this.authForm.value;
    this.userService
      .attemptAuth(`login`, credentials)
      .subscribe(
        data => this.router.navigateByUrl('/'),
        err => console.error(err)
      );
  }

}
