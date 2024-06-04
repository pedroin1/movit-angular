import { Component } from '@angular/core';
import { MainLayoutComponent } from '../../components/main-layout/main-layout.component';
import { Route, Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [MainLayoutComponent, ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss',
})
export class CadastroComponent {
  formCadastro!: FormGroup;

  constructor(private route: Router) {
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

  handleClickSubmitForm() {
    console.log(this.formCadastro.value);
  }

  handleClickNavigate() {
    this.route.navigate(['/login']);
  }
}
