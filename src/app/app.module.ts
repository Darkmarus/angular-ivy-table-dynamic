import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TableDynamicComponent } from "./table-dynamic/table-dynamic.component";
import { HttpClientModule } from "@angular/common/http";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { ColumnModalComponent } from "./column-modal/column-modal.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDialogModule } from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ApiService } from "./service/api.service";
import { MatCheckboxModule } from "@angular/material/checkbox";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    MatCheckboxModule
  ],
  declarations: [AppComponent, TableDynamicComponent, ColumnModalComponent],
  bootstrap: [AppComponent],
  providers: [ApiService]
})
export class AppModule {}
