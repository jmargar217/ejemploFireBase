/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Bicicleta } from '../interfaces/interface';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-editar-bici',
  templateUrl: './editar-bici.page.html',
  styleUrls: ['./editar-bici.page.scss'],
})
export class EditarBiciPage implements OnInit {
  bicicleta!: Bicicleta;
  ver: boolean = false;

  formulario: FormGroup=this.fb.group({
    marca:! [''],
    modelo:![''],
    imagen:![''],
    color:!['']
  });

  constructor(private rutaActiva: ActivatedRoute,
    private servicioCRUD: DataService,
    private router: Router,
    private alertController: AlertController,
    private fb: FormBuilder

    ) { }

  ngOnInit() {
    this.getBici();
  }

  getBici(){
    this.servicioCRUD.getBiciById(this.rutaActiva.snapshot.params['id']).subscribe({
      next: data =>{
        console.log(data);
        this.bicicleta=data;
        this.ver=true;
      },
      error: resp=>{
        console.log(resp);
      }
    });
  }

  editarBici(){
    this.servicioCRUD.updateBici(this.bicicleta).then(()=>{
      this.showAlert();
      this.router.navigate(['/listado-bicis']);
    });

  }

  showAlert() {
    this.alertController.create({
      header: 'Editada !',
      subHeader: 'Se ha editado la bicicleta',
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
