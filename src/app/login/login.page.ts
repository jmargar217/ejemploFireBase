import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AccesoService } from '../services/acceso.service';
import { Usuario } from '../interfaces/interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formulario:FormGroup=this.fb.group({
    email:! [''],
    password:![''],
  });

  usuario:Usuario={
    email:'',
    password:''
  };

  constructor(private fb: FormBuilder, private servicioAcceso:AccesoService) { }

  ngOnInit() {
  }

  login(){
    this.servicioAcceso.login(this.usuario);
  }

}
