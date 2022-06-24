import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Professor } from './../models/Professor';
import { Component, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public modalRef: BsModalRef;
  public titulo = 'Professores';
  public profSelecionado: Professor;
  professores = [
    {id: 1, nome: 'Thiago', disciplina: 'Excel'},
    {id: 2, nome: 'Grande', disciplina: 'Typescript'},
    {id: 3, nome: 'Bassete', disciplina: 'SQL'},
    {id: 4, nome: 'Salla', disciplina: 'Desenvolvimento'},
    {id: 5, nome: 'Monica', disciplina: 'PLSQL'}
  ];


    profSelect(professor: Professor){
      this.profSelecionado = professor;
    }

    voltar(){
      this.profSelecionado = null;
    }


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private modalService: BsModalService) { }


  ngOnInit() {
  }

}
