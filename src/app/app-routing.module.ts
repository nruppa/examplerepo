import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { EditComponent } from './edit/edit.component';
import { EditableComponent } from './editable/editable.component';
import { LoginComponent } from './login/login.component';
import { LoginsComponent } from './logins/logins.component';
import { MenuComponent } from './menu/menu.component';
import { PatchComponent } from './patch/patch.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { TableComponent } from './table/table.component';
import { TabledataComponent } from './tabledata/tabledata.component';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';
import { TemppatchComponent } from './temppatch/temppatch.component';
import { TemptableComponent } from './temptable/temptable.component';
import { TreeComponent } from './tree/tree.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'demo', component: DemoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logins', component: LoginsComponent },
  // {path:'reactive',component:ReactiveformsComponent},
  { path: 'menu', component: MenuComponent },
  { path: 'template', component: TemplatedrivenformComponent },
  { path: 'users', component: UsersComponent },
  // {path:'tabledata',component:TabledataComponent},
  { path: 'back', component: ReactiveformsComponent },
  { path: 'patch', component: PatchComponent },
  { path: 'forms', component: ReactiveComponent },
  {
    path: 'table', component: TableComponent,
    children: [
      { path: 'patch', component: PatchComponent },
    ]
  },
  { path: 'ttable', component: TemptableComponent },
  { path: 'tpatch', component: TemppatchComponent },
  {path:'tree',component:TreeComponent},
  // {path:'edit',component:EditableComponent},
  {path:'class',component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
