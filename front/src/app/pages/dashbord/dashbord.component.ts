import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { ConfigService } from '../../services/config.service';
import { Nivel } from '../../models/nivel';
import { Lecciones } from '../../models/leccion';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {

  constructor(private sUsuario: UsuarioService, private sConfig: ConfigService) { }
  usuarioId: number = 0;
  niveles: Nivel[] = [];
  primerNivel: Nivel = new Nivel;
  async ngOnInit() {
    this.usuarioId = parseInt(this.sConfig.getCookie("userId"));
    await this.getLecciones();
    this.primerNivel = this.niveles[0];
    this.niveles.splice(0,1);
    console.log(this.niveles);
  }
  getLecciones () {
    return new Promise(resolve => {
      this.sUsuario.getNivelxUsuario(this.usuarioId).subscribe(resp => {
        this.niveles = resp.items;
        resp.items.forEach(item => {
          this.sUsuario.getleccionesxnivel(item.id).subscribe(resp=> {
              item.lecciones = resp.items;
          });
        });
        this.niveles = resp.items;
        resolve("s");
      });
      
    });
    
  }
  getLecion(posicion: number) {
    return this.niveles[posicion].lecciones;
  }

}
