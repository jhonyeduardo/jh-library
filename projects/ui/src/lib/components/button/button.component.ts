import { Component, OnInit, Input } from '@angular/core';

enum JhTypeButton {
  Default,
  Danger,
  Primary
}


@Component({
  selector: 'jh-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class JhButtonComponent implements OnInit {

  @Input() jhLabel: string;

  @Input() jhType: JhTypeButton = JhTypeButton.Default;

  constructor() { }

  ngOnInit() {
  }

}
