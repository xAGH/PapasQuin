import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-option-button',
  templateUrl: './option-button.component.html',
  styleUrls: ['./option-button.component.css']
})
export class OptionButtonComponent implements OnInit {

  @Input() text!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
