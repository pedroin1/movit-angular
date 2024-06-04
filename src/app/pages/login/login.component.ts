import { Component, Input, OnInit } from '@angular/core';
import { MainLayoutComponent } from '../../components/main-layout/main-layout.component';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MainLayoutComponent, ReactiveFormsModule],
  providers: [LoginService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  @Input() email: string = ``;
  @Input() password: string = ``;

  formLogin!: FormGroup;

  constructor(private route: Router, private service: LoginService) {
    this.formLogin = new FormGroup({
      email: new FormControl(``, [Validators.required, Validators.email]),
      password: new FormControl(``, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  handlClickSubmitForm() {
    console.log(this.formLogin.value);
  }

  handlClickNavigate() {
    this.route.navigate(['/cadastro']);
  }
}
