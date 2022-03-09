import { Component, OnInit } from '@angular/core';
import { AccesoService } from '../services/acceso.service';
import { Usuario } from '../interfaces/interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  usuario: Usuario={
    email:'',
    password:''
  };

  constructor(private servicioAcceso: AccesoService) { }

  ngOnInit() {
  }

  login(){
    this.servicioAcceso.login(this.usuario);
  }

}
