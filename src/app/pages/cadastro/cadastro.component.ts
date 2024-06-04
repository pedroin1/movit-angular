import { Component, OnInit } from '@angular/core';
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
  selector: 'app-cadastro',
  standalone: true,
  imports: [MainLayoutComponent, ReactiveFormsModule],
  providers: [LoginService, ToastrService],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss',
})
export class CadastroComponent implements OnInit {
  formCadastro!: FormGroup;

  constructor(
    private route: Router,
    private loginService: LoginService,
    private toastrService: ToastrService
  ) {}

  public handleClickSubmitForm() {
    this.loginService
      .cadastro(
        this.formCadastro.get('name')?.value,
        this.formCadastro.get('email')?.value,
        this.formCadastro.get('password')?.value
      )
      .subscribe({
        next: () => this.toastrService.success('Sucesso ao cadastrar usuario'),
        error: () => this.toastrService.error('Erro ao cadastrar usuario'),
      });
  }

  public handleClickNavigate() {
    this.route.navigate(['/login']);
  }

  ngOnInit(): void {
    this.formCadastro = new FormGroup({
      name: new FormControl(``, [Validators.required]),
      email: new FormControl(``, [Validators.required, Validators.email]),
      password: new FormControl(``, [
        Validators.required,
        Validators.minLength(6),
      ]),
      rePassword: new FormControl(``, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
}
