/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable @typescript-eslint/semi */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
    color:''
  }

  constructor(private fb: FormBuilder, private servicioCrud:DataService) { }

  ngOnInit() {
  }

  addBici(){
    this.bicicleta.id = Date.now().toString();
    this.servicioCrud.addBici(this.bicicleta);
  }

}
