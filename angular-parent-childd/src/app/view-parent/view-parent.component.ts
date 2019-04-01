import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewChildComponent } from '../view-child/view-child.component';

@Component({
  selector: 'view-parent',
  styleUrls: ["./view-parent.component.css"],
  templateUrl: './view-parent.component.html'
})

export class ViewParentComponent{
  @ViewChild(ViewChildComponent) viewChild: ViewChildComponent;
  fromChild: String;

  ngOnInit(){
    this.fromChild = this.viewChild.viewChildVariable;
  }
}