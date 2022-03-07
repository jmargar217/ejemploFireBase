/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable @typescript-eslint/semi */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Bicicleta } from '../interfaces/interface';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-add-bici',
  templateUrl: './add-bici.page.html',
  styleUrls: ['./add-bici.page.scss'],
})
export class AddBiciPage implements OnInit {

  formulario: FormGroup=this.fb.group({
    marca:! [''],
    modelo:![''],
    color:!['']
  });

  bicicleta:Bicicleta = {
    marca:'',
    modelo:'',
    imagen:'',
    color:''
  }

  constructor(private fb: FormBuilder, private servicioCrud:DataService,
    private alertController: AlertController,
    private router:Router) { }

  ngOnInit() {
  }

  addBici(){
    if(this.bicicleta.imagen==''){
      this.bicicleta.imagen='https://cdn.shoplightspeed.com/shops/620181/themes/13663/v/416004/assets/big-block-bg.jpg?20220115220039';
    }
    this.servicioCrud.addBici(this.bicicleta);
    this.showAlert();
    this.router.navigateByUrl('listado-bicis');
  }

  showAlert() {
    this.alertController.create({
      header: 'Añadida',
      subHeader: 'La bicicleta se ha añadido',
      cssClass: 'my-custom-class',
      mode: 'ios',
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
          cssClass: 'alertButton'
        }
      ]
    }).then(res => {
      res.present();
    });

  }

}
