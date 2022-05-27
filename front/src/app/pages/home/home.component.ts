import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dailyRecord: string = "Registro diario";
  monthlyRecord: string = "Registro mensual";
  querys: string = "Consultas";

  constructor() { }

  ngOnInit(): void {
  }

}
