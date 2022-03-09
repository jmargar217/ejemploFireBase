/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-unused-labels */
/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Bicicleta } from '../interfaces/interface';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {
  ver: boolean = false;
  bicicleta!: Bicicleta;
  constructor(private rutaActiva: ActivatedRoute, private servicioCRUD: DataService, private router: Router,
    private alertController: AlertController) { }

  ngOnInit() {
    this.getBici();
  }

  getBici(){
    this.servicioCRUD.getBiciById(this.rutaActiva.snapshot.params['id']).subscribe({
      next: data =>{
        this.bicicleta=data;
        this.ver=true;
      },
      error: resp=>{
        console.log(resp);
      }
    });
  }

  borrar(){
    this.servicioCRUD.deleteBici(this.bicicleta).then(()=>{
      this.showAlert();
      this.router.navigateByUrl('menu');
    });
  }

  showAlert() {
    this.alertController.create({
      header: 'Completado !',
      subHeader: 'Se ha borrado la bicicleta',
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
