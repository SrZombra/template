import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit, OnChanges {

  @ViewChild('drawer') drawer: MatDrawer;
  @Input() opened: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges){
    if(changes.opened && this.drawer){
      this.drawer.toggle();
    }
  }

}
