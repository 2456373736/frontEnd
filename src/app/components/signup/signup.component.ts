import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(private router: Router, private userSrv: UserService) {

  }

  sigupObj: any = {
    username: '',
    password: '',
  }

  onSignUp() {
    this.userSrv.createUser(this.sigupObj).subscribe((res: any) => {
      if (res.result) {
        alert('User Created');
      }
      else {
        alert('Some problem');
      }
    })
  }

  navigateToLogIn() {
    this.router.navigateByUrl('/Login');
  }

}
