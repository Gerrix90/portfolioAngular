import { Component, OnInit } from '@angular/core';
import { InfoPageService } from 'src/app/services/info-page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( public _InfoPageService: InfoPageService,
              private router: Router) { }

  ngOnInit() {
  }

  buscarProducto( termino: string) {

    if(termino.length < 1 ){
      return;
    }
  this.router.navigate(['/search', termino]);
  }
}
