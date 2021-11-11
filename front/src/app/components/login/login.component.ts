import { Component, Input, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { ConfigService } from '../../services/config.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() operacion = "login";
  @Input() modal: any;
  objUser: Usuario = new Usuario();
  constructor(private sUsuario: UsuarioService, private sConfig: ConfigService) { }

  ngOnInit(): void {
  }

  operacionUsuario() {
    console.log(this.operacion);
    if(this.operacion == "login") {
      this.login();
      return;
    }
    this.insert();
  }
  login() {
    this.sUsuario.login(this.objUser.nick,this.objUser.password).subscribe(resp => {
      if(resp.status == 400) {
        alert(resp.mensaje);
        this.modal.close("Save click");
        return;
      }
      this.modal.close("Save click");
      this.sConfig.setCookie("userId", resp.usuario.id + "");
      this.sConfig.setCookie("nick", resp.usuario.nick);
      location.href="/home";
    }, error => {

    });
  }
  insert() {
    this.sUsuario.insert(this.objUser.nick,this.objUser.password).subscribe(resp => {
      if(resp.status == 400) {
        alert(resp.mensaje);
        this.modal.close("Save click");
        return;
      }      
      this.modal.close("Save click");
      this.sConfig.setCookie("userId", resp.usuario.id + "");
      this.sConfig.setCookie("nick", resp.usuario.nick);
      location.href="/home";
    }, error => {

    });
  }
}
