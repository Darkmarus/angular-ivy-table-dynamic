import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { TableHeaders } from "../model/table-headers.enum";

interface Item {
  columnName: string;
  checked: boolean;
}

@Component({
  selector: "app-column-modal",
  templateUrl: "./column-modal.component.html",
  styleUrls: ["./column-modal.component.css"]
})
export class ColumnModalComponent implements OnInit {
  table = {
    name: "Headers",
    completed: false,
    headers: [] as Item[]
  };

  allComplete: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<ColumnModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string[]
  ) {}

  ngOnInit() {
    this.table.headers = this.generate(this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    this.table.headers.forEach(h => (h.checked = completed));
  }

  someComplete(): boolean {
    return (
      this.table.headers.filter(t => t.checked).length > 0 && !this.allComplete
    );
  }

  updateAllComplete() {
    this.allComplete = this.table.headers.every(t => t.checked);
  }

  getHeaders():string[] {
    return this.table.headers.filter(h => h.checked).map(h => h.columnName);
  }

  generate(data: string[]): Item[] {
    return Object.keys(TableHeaders)
      .filter(item => !Number.isInteger(+item))
      .map(
        item =>
          ({
            columnName: item.toLocaleLowerCase(),
            checked: data.some(
              columnName => columnName === item.toLocaleLowerCase()
            )
          } as Item)
      );
  }
}
