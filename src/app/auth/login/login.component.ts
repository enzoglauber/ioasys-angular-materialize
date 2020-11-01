import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core/services';
import { LoadingService } from 'src/app/core/services/loading.service';

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
    private fb: FormBuilder,
    private loadingService: LoadingService
  ) {
    // use FormBuilder to create a form group
    this.authForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });

    this.loadingService.active$.subscribe((active) => console.log(active))

    // this.loadingService.show()
  }

  ngOnInit(): void {
  }

  submitForm() {
    this.loadingService.toggle()

    // this.isSubmitting = true;
    // this.errors = {errors: {}};
    // const credentials = this.authForm.value;
    // this.userService
    //   .attemptAuth(`login`, credentials)
    //   .subscribe(
    //     data => this.router.navigateByUrl('/'),
    //     err => console.error(err)
    //   );
  }

}
