/* eslint-disable eqeqeq */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Bicicleta } from '../interfaces/interface';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-listado-bicis',
  templateUrl: './listado-bicis.page.html',
  styleUrls: ['./listado-bicis.page.scss'],
})
export class ListadoBicisPage implements OnInit {

  bicicletas: Bicicleta[]=[];
  constructor(private servicioCRUD: DataService, private router: Router,
    private alertController: AlertController) { }

  ngOnInit() {
    this.getBicicletas();
  }

  getBicicletas(){
    this.servicioCRUD.getBicis().subscribe(resp=>{
      this.bicicletas=resp;
      if(this.bicicletas.length==0){
        this.router.navigateByUrl('menu');
      }
    });
  }



}
