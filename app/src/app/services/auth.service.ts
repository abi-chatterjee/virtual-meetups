import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {

  }

  login(email, password) {
    const p = new Promise((resolve, reject) => {
      this.http.post('http://localhost:1337/login', {
        email,
        password: Md5.hashStr(password)   // Hash the password to MD5
      }).toPromise().then(data => {
        resolve(data);
      }).catch(err => {
        reject(err);
      });
    });

    return p;
  }
}
