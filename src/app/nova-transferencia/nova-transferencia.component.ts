import { Router, Routes } from '@angular/router';
import { TransferenciaService } from './../services/transferencia.service';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';


@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent implements OnInit {

 @Output() aoTransferir = new EventEmitter<any>();

  valor: number ;
  destino: number ;

  constructor(private service: TransferenciaService, private router: Router) {}

  ngOnInit(): void {}

  transferir() {
    console.log('Solicitada nova transferĂȘncia');

    const valorEmitir: Transferencia = {valor: this.valor, destino:this.destino};

    this.service.adicionarNovaTransferencia(valorEmitir).subscribe(resultado =>{
      console.log(resultado);
      this.limparCampos();
      this.router.navigateByUrl('extrato');
    },
    error => console.log(error));
    //this.aoTransferir.emit(valorEmitir);
   // this.limparCampos();
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}
