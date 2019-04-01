import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'view-child',
  styleUrls: ["../view-parent/view-parent.component.css"],
  templateUrl: 'view-child.component.html'
})

export class ViewChildComponent {
  viewChildVariable = "I am child variable";
}