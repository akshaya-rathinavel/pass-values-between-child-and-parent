import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'child-var-example-child',
  styleUrls:['../child-var-example-parent/child-var-example-parent.component.css'],
  templateUrl: './child-var-example-child.component.html'
})

export class ChildVarExampleChild{
  childVariableValue = "I am child variable value";
}