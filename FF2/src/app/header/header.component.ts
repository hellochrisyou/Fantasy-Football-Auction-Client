import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/service/auth.service';



declare var $: any;

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'toolbar-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public auth: AuthService
  ) { }
  ngOnInit(): void {
    $('.menu-collapsed').click(function () {
      $(this).toggleClass('menu-expanded');
    });
  }
  public logout() {
    this.auth.signOut();
  }
}
