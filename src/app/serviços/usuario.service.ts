import { Injectable } from '@angular/core';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  adm = new Usuario(0, "admin", "1234567", "admin",null);
  user = new Usuario(1, "a", "1234566", "a",null);
  user2 = new Usuario(3, "a", "2234566", "a",null);
  user3 = new Usuario(4, "a", "3234566", "a",null);
  user4 = new Usuario(5, "a", "4234566", "a",null);
  user5 = new Usuario(6, "a", "5234566", "a",null);
  usuarios: Usuario[] = [this.adm, this.user];
  

  constructor() { }

  getUsuarios(){
    return this.usuarios;
  }

  getUsuarioPorId(id): Usuario{
    for(let i = 0; i < this.usuarios.length; i++){
      if(this.usuarios[i].getID() == id){
        return this.usuarios[i];
      }
    }
  }

  getUsuarioPorNome(nome): Usuario{
    for(let i = 0; i < this.usuarios.length; i++){
      if(this.usuarios[i].getNome() == nome){
        return this.usuarios[i];
      }
    }
  }

  getUsuariosPorSiape(siape): Usuario{
    for(let i = 0; i < this.usuarios.length; i++){
      if(this.usuarios[i].getSiape() == siape){
        return this.usuarios[i];
      }
    }

    return null;
  }

  setUsuario(nome, siape, senha, setor){
    //Obtém um id para o usuário
    let id = this.usuarios.length;
    //Salva usuário no array
    this.usuarios.push(new Usuario(id, nome, siape, senha, setor));
  }

  atualizaSetorDeUsuario(id, idDoSetor){
    for(let i = 0; i < this.usuarios.length; i++){
      if(this.usuarios[i].getID() == id){
        this.usuarios[i].setsetor(idDoSetor);
      }
    }
  }
}
