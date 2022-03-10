import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.scss'],
})
export class NavegacionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  logout(){
    localStorage.clear();
    this.router.navigateByUrl('');
  }

  login(){
    this.router.navigateByUrl('login');

  }

}
