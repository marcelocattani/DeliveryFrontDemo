import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-managerscreen',
  templateUrl: './managerscreen.component.html',
  styleUrls: ['./managerscreen.component.css']
})
export class ManagerscreenComponent implements OnInit {

  public valueSelected = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
