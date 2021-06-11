import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.scss'],
})
export class FilhoComponent implements OnInit {
  @Input()
  pessoas: any;

  @Output() editarEvent = new EventEmitter();


  constructor() {}

  ngOnInit(): void {}

  editar(pessoa:any){
    const index: number = this.pessoas.indexOf(pessoa);
    if (index !== -1) {
        this.pessoas.splice(index, 1);
    }
    this.editarEvent.emit(pessoa);

  }
}
