import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'child-parent-example-child',styleUrls: ['../child-parent-example-parent/child-parent-example-parent.component.css'],
  templateUrl: './child-parent-example-child.component.html'
})

export class ChildParentExampleChild{

  @Output() valuesToParent = new EventEmitter<String>();
  
  sendToParent() {
    this.valuesToParent.emit("From child");
  }
}