import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'parent',
  styleUrls: ['../app.component.css'],
  templateUrl: './parent.component.html',
})
export class ParentComponent {
  sendValueToChild = "From Parent";
}
