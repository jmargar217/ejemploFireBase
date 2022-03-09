import { Component, OnInit } from '@angular/core';
import { UsuarioRegister } from '../interfaces/interface';
import { AccesoService } from '../services/acceso.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuario: UsuarioRegister = {
    email:'',
    nombre:'',
    password:''
  };

  constructor(private servicioAcceso: AccesoService) { }


  ngOnInit() {
  }

  registro(){
    this.servicioAcceso.registro(this.usuario);
  }

}
