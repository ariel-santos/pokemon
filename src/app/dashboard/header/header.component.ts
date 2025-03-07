import { Component, OnInit } from '@angular/core';
declare var M: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.addEventListener('DOMContentLoaded', () => {
      const elems = document.querySelectorAll('.sidenav');

      const instances = M.Sidenav.init(elems, {});
    });
  }

}
