import { Component, OnInit, Output } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.scss'],
})
export class PaiComponent implements OnInit {
  pessoas: any = [];

  pessoaForm = this.fb.group({
    nome: new FormControl('', [Validators.required]),
    idade: new FormControl('', [
      Validators.required,
      Validators.min(18),
      Validators.max(99),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    enable: false,
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  addPessoas() {
    if (this.pessoaForm.valid) {
      console.log(this.pessoaForm.value);
      this.pessoas.push(this.pessoaForm.value);
      this.pessoaForm.reset();
      this.pessoaForm.markAsPristine();
    }
  }

  editarItem(event: any) {
    this.pessoaForm.reset();
    this.pessoaForm.setValue(event);
  }
}
