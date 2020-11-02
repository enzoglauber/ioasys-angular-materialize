import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

import { User } from '../../shared/interfaces';
import { ApiService } from './api.service';
import { JwtService } from './jwt.service';

@Injectable()
export class UserService {
  private user = new BehaviorSubject<User>({} as User);
  public user$ = this.user.asObservable().pipe(distinctUntilChanged());

  private isAuth = new ReplaySubject<boolean>(1);
  public isAuth$ = this.isAuth.asObservable();

  constructor (
    private apiService: ApiService,
    private http: HttpClient,
    private jwtService: JwtService
  ) {}

  // Verify JWT in localstorage with server & load user's info.
  // This runs once on application startup.
  // populate() {
  //   // If JWT detected, attempt to get & store user's info
  //   if (this.jwtService.getToken()) {
  //     this.apiService.get('/user')
  //     .subscribe(
  //       data => this.setAuth(data.user),
  //       err => this.purgeAuth()
  //     );
  //   } else {
  //     // Remove any potential remnants of previous auth states
  //     this.purgeAuth();
  //   }
  // }

  setAuth(response: HttpResponse<any>): void {
    // Save JWT sent from server in localstorage
    const headers = {
      'access-token': response.headers.get('access-token'),
      'client': response.headers.get('client'),
      'uid': response.headers.get('uid'),
    }  
    console.log('setAuth', response, headers)
    this.jwtService.saveToken(headers);
    // Set current user data into observable
    this.setUser(response.body);
    // Set isAuth to true
    this.setIsAuth(true);
  }

  purgeAuth(): void {
    // Remove JWT from localstorage
    this.jwtService.destroyToken();
    // Set current user to an empty object
    this.setUser({} as User);
    // Set auth status to false
    this.setIsAuth(false);
  }

  sign_in(credentials): Observable<any> {
    return this.apiService.post('/users/auth/sign_in', credentials).pipe(
      map((response: HttpResponse<any>) => {
        this.setAuth(response);
        return response;
      })
    );
  }

  setIsAuth = (isAuth: boolean): void => this.nextIsAuth(isAuth)
  private nextIsAuth = (isAuth: boolean): void => this.isAuth.next(isAuth)

  getUser = (): User => this.user.value
  setUser = (user: User): void => this.nextUser(user)
  private nextUser = (user: User): void => this.user.next(user)
}
