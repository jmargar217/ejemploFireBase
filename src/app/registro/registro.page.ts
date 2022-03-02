import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsuarioRegister } from '../interfaces/interface';
import { AccesoService } from '../services/acceso.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  formulario:FormGroup=this.fb.group({
    email:! [''],
    password:![''],
  });

  usuario: UsuarioRegister = {
    email:'',
    nombre:'',
    password:''
  };

  constructor(private fb: FormBuilder, private servicioAcceso:AccesoService) { }


  ngOnInit() {
  }

  registro(){
    this.servicioAcceso.registro(this.usuario);
  }

}
