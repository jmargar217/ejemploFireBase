import { Component, OnInit } from '@angular/core';
import { Bicicleta } from '../interfaces/interface';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-listado-bicis',
  templateUrl: './listado-bicis.page.html',
  styleUrls: ['./listado-bicis.page.scss'],
})
export class ListadoBicisPage implements OnInit {

  bicicletas: Bicicleta[]=[];
  constructor(private servicioCRUD: DataService) { }

  ngOnInit() {
    this.getBicicletas();
  }

  getBicicletas(){
    this.servicioCRUD.getBicis().subscribe(resp=>{
      this.bicicletas=resp;
      console.log(resp);
    });
  }

}
