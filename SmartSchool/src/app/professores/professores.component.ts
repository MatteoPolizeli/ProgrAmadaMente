import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  title = 'Professores';
  professores = [
    {nome: 'Thiago'},
    {nome: 'Grande'},
    {nome: 'Bassete'},
    {nome: 'Salla'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
