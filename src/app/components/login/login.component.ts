import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';

import { User } from '../../services/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginObj: any = {
    username: '',
    password: '',
  }


  users: User[] = [];

  constructor(private router: Router, private userSrv: UserService) {

  }

  ngOnInit(): void {
    this.userSrv.getUsers().subscribe((res: any) => {
      this.users = res.data;
    })
  }

  onLogin() {

    const foundUser = this.users.find(user => user.username === this.loginObj.username);

    if (foundUser) {
      if (foundUser.password === this.loginObj.password) {
        this.router.navigateByUrl('/Home');
      } else {
        alert('Wrong password');
      }
    } else {
      alert('User not found');
    }
  }

  navigateToSignUp() {
    this.router.navigateByUrl('/Signup');
  }

}