import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ChildParentExampleParent } from './child-parent-example-parent/child-parent-example-parent.component';
import { ChildParentExampleChild } from './child-parent-example-child/child-parent-example-child.component';
import { ChildVarExampleParent } from './child-var-example-parent/child-var-example-parent.component';
import { ChildVarExampleChild } from './child-var-example-child/child-var-example-child.component';
import { ViewParentComponent } from './view-parent/view-parent.component';
import { ViewChildComponent } from './view-child/view-child.component';

const routes: Routes = [
  { path: '', component: ParentComponent },
  { path: 'child', component: ChildComponent },
  { path: 'child-parent-example-parent', component: ChildParentExampleParent},
  { path: 'child-var-example-parent', component: ChildVarExampleParent},
  { path: 'view-parent', component: ViewParentComponent }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    ParentComponent,
    ChildComponent,
    ChildParentExampleParent,
    ChildParentExampleChild,
    ViewParentComponent,
    ViewChildComponent,
    ChildVarExampleParent,
    ChildVarExampleChild
  ],
  exports: [
    CommonModule,
    RouterModule
  ]
})
export class AppRoutingModule { }
