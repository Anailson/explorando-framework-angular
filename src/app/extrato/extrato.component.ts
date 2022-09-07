import { Component, Input, OnInit } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transferencia: any[];

  constructor(private service: TransferenciaService ) { }

  ngOnInit(): void {
    //this.transferencia =  this.service.transferencias;
    this.service.todas().subscribe((transferencia: Transferencia[]) =>{
        console.table(transferencia);
        this.transferencia = transferencia;
    });
  }

}
