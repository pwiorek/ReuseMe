import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { FiltersComponent } from "@core/components/filters/filters.component";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showArrowBackIcon: boolean = false;
  showFilterIcon: boolean = true;
  showBookmarkIcon: boolean = false;

  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(val => val instanceof NavigationEnd)
    ).subscribe(val => {
      this.showArrowBackIcon = this.router.url != '/';
      this.showFilterIcon = this.router.url == '/';
      this.showBookmarkIcon = this.router.url != '/' && !this.router.url.includes('create');
    })
  }

  public showFilters(): void {
    this.dialog.open(FiltersComponent, {
      width: '100vw',
      height: '50vh'
    });
  }

}
