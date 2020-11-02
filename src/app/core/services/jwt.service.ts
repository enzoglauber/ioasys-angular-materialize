import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class JwtService {
  getToken(): String {
    const headers = window.localStorage['jwtToken']
    return (headers)? JSON.parse(headers) : "";
  }

  saveToken(header: any) {
    window.localStorage['jwtToken'] = JSON.stringify(header);
  }

  destroyToken() {
    window.localStorage.removeItem('jwtToken');
  }
}
