import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { FiltersComponent } from "@core/components/filters/filters.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showArrowBackIcon: boolean = false;
  showFilterIcon: boolean = true;

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  public showFilters(): void {
    this.dialog.open(FiltersComponent, {
      width: '100vw',
    });
  }
}
