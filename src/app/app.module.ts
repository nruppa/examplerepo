import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoginComponent } from './login/login.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { LoginsComponent } from './logins/logins.component';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MenuComponent } from './menu/menu.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';
import { UserComponent } from './user/user.component';
import { MatSelectModule } from '@angular/material/select';
import { UsersComponent } from './users/users.component';
import { TabledataComponent } from './tabledata/tabledata.component';
import { MatTableModule } from '@angular/material/table';
import { PatchComponent } from './patch/patch.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { DrivenComponent } from './driven/driven.component';
import { TableComponent } from './table/table.component';
import { TestService } from './test.service';
import { TemptableComponent } from './temptable/temptable.component';
import { TemppatchComponent } from './temppatch/temppatch.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ScreenComponent } from './screen/screen.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { EditableComponent } from './editable/editable.component';
import { MatTreeModule } from '@angular/material/tree';
import { TreeComponent } from './tree/tree.component';
import { EditComponent } from './edit/edit.component';
import { ClassComponent } from './class/class.component';



@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    LoginComponent,
    LoginsComponent,
    MenuComponent,
    ReactiveformsComponent,
    TemplatedrivenformComponent,
    UserComponent,
    UsersComponent,
    TabledataComponent,
    PatchComponent,
    ReactiveComponent,
    DrivenComponent,
    TableComponent,
    TemptableComponent,
    TemppatchComponent,
    ScreenComponent,
    EditableComponent,
    TreeComponent,
    EditComponent,
    ClassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    LayoutModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatSnackBarModule,
    MatDialogModule,
    MatBottomSheetModule,
    MatListModule,
    MatSidenavModule,
    MatSelectModule,
    MatTableModule,
    MatCheckboxModule,
    MatTreeModule



  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
