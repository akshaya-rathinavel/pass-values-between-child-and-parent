import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'child',
  styleUrls: ['../app.component.css'],
  templateUrl: './child.component.html',
})
export class ChildComponent {
  @Input() valuesFromParent: String;

  // sendchildVariableValueToParent() {
  //   this.childVariableValue = this.childVariableValue
  // }

}
