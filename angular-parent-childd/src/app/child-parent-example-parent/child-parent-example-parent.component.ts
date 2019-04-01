import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'child-parent-example-parent',
  styleUrls: ['./child-parent-example-parent.component.css'],
  templateUrl: './child-parent-example-parent.component.html'
})

export class ChildParentExampleParent{
  valueFromChild: String;

  getValuesFromChild(value: String) {
    this.valueFromChild = value;
  }
}