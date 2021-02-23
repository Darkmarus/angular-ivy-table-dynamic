import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ColumnModalComponent } from "../column-modal/column-modal.component";
import { RickAndMortyModel } from "../model/model";
import { TableHeaders } from "../model/table-headers.enum";
import { ApiService } from "../service/api.service";

@Component({
  selector: "app-table-dynamic",
  templateUrl: "./table-dynamic.component.html",
  styleUrls: ["./table-dynamic.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class TableDynamicComponent implements OnInit {
  tableHeaders = TableHeaders;
  displayedColumns: string[] = this.generateHeader();
  dataSource;

  constructor(public dialog: MatDialog, private apiService: ApiService) {}

  ngOnInit() {
    this.generateHeader();
    this.apiService.getCharacter().subscribe((response: RickAndMortyModel) => {
      this.dataSource = response.results;
    });
  }

  generateHeader() {
    return Object.keys(TableHeaders)
      .filter(item => !Number.isInteger(+item))
      .map(item => item.toLocaleLowerCase());
  }

  removeColumn(header: TableHeaders) {
    this.displayedColumns.splice(
      this.displayedColumns.indexOf(TableHeaders[header].toLocaleLowerCase()),
      1
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ColumnModalComponent, {
      width: "250px",
      data: [...this.displayedColumns]
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.displayedColumns = result;
      }
    });
  }
}
