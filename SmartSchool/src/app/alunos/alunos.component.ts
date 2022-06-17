import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  title = 'Alunos';
  alunos = [
    {nome : 'Felipinho'},
    {nome : 'Vitinho'},
    {nome : 'Vitao'},
    {nome : 'Leléto'},
    {nome : 'Josui'},
    {nome : 'Matui'},
    {nome : 'Erito'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
