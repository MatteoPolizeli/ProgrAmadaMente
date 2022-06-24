import { Aluno } from './../models/Aluno';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css'],
})
export class AlunosComponent implements OnInit {
  public alunoSelecionado: Aluno;
  public titulo = 'Alunos';
  public textSimple: string;
  public alunoForm: FormGroup; //criando um formulário
  modalRef?: BsModalRef;

  alunos = [
    { id: 1, nome: 'Felipinho', sobrenome: 'Podecre', telefone: 9171415 },
    { id: 2, nome: 'Vitinho', sobrenome: 'Comcerteza', telefone: 332255 },
    { id: 3, nome: 'Vitao', sobrenome: 'Entretanto', telefone: 121141 },
    { id: 4, nome: 'Leléto', sobrenome: 'Jossas', telefone: 992853 },
    { id: 5, nome: 'Josui', sobrenome: 'Visto', telefone: 1336655 },
    { id: 6, nome: 'Matui', sobrenome: 'Aham', telefone: 122455 },
    { id: 7, nome: 'Erito', sobrenome: 'Kun', telefone: 332255 },
  ];

  constructor(private fb: FormBuilder, private modalService: BsModalService) {
    this.criarForm();
  }

  ngOnInit(): void {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  criarForm() {
    //o fb é um cara que vamos injetar no construtor
    this.alunoForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required],
    });
  }

  alunoSubmit() {
    console.log(this.alunoForm.value);
  }

  alunoSelect(aluno: Aluno) {
    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno);
  }

  voltar() {
    this.alunoSelecionado = null;
  }
}
