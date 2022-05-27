import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  dailyRecord: string = "Registro diario";
  monthlyRecord: string = "Registro mensual";
  querys: string = "Consultas";

  constructor() { }

  ngOnInit(): void {
  }

}
