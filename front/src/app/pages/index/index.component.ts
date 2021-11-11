import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  operacion = "";
  constructor(private sModal: ModalService) { }

  ngOnInit(): void {
  }
  open(content: any, operacion: string) {
    this.operacion = operacion;
    this.sModal.open(content);
  }

}
