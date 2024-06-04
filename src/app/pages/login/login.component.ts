import { Component, Input, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MainLayoutComponent } from '../../components/main-layout/main-layout.component';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MainLayoutComponent, ReactiveFormsModule],
  providers: [LoginService, ToastrService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  @Input() email: string = ``;
  @Input() password: string = ``;

  formLogin!: FormGroup;

  constructor(
    private route: Router,
    private loginService: LoginService,
    private toastService: ToastrService
  ) {}

  public handlClickSubmitForm() {
    this.loginService
      .login(this.formLogin.value.email, this.formLogin.value.password)
      .subscribe({
        next: () => this.toastService.success('Sucesso ao logar'),
        error: () => this.toastService.error('Erro ao logar'),
      });
  }

  public handlClickNavigate() {
    this.route.navigate(['/cadastro']);
  }

  ngOnInit() {
    this.formLogin = new FormGroup({
      email: new FormControl(``, [Validators.required, Validators.email]),
      password: new FormControl(``, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
}
