import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent implements OnInit {

 // @Output() aoTransferir = new EventEmitter<any>();


  valor: number = 22;
  destino: number = 222;

  constructor() {}

  ngOnInit(): void {}

  transferir() {
    console.log('Solicitada nova transferência');
    console.log('Valor: ', this.valor);
    console.log('Valor: ', this.destino);

  }
}
