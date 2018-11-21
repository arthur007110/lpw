import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { Memorando } from '../models/Memorando';
import { MemorandoService } from '../serviços/memorando.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    id: string;
    items: MenuItem[];
    memorandos: Memorando[];
    
    constructor(private router: Router, private memorandoS: MemorandoService) { }
    
    deslogar(){
        sessionStorage.removeItem("id-usuario");
        sessionStorage.removeItem("id-setor");
        sessionStorage.removeItem("id-memorando");
        this.router.navigate(['']);
    }
    enviarMemorando(){
        this.router.navigate(['/envio-memorando']);
    }
    exibirMemorando(i){
        sessionStorage.setItem("id-usuario", this.memorandos[i].id);
        this.router.navigate(['/vizualizar', this.memorandos[i].id]);
    }
    mostrarMemorandosEnviados(){
        this.router.navigate(['enviados', this.id]);
    }
    mostrarMemorandosRecebidos(){
        this.router.navigate(['recebidos', this.id]);
    }
    listarSetores(){
        this.router.navigate(['listar-setores-de-usuario/', this.id]);
    }
    ngOnInit(){
        this.id = sessionStorage.getItem('id-usuario');
        
        this.items = [
            {
                label: 'Memorando',
                items: [
                    {label: 'Enviar',
                    command: (event: Event) => {this.enviarMemorando();}},
                    {label: 'Mostrar Enviados',
                    command: (event: Event) => { this.mostrarMemorandosEnviados();}},
                    {label: 'Mostrar Recebidos',
                    command: (event: Event) => { this.mostrarMemorandosRecebidos();}}
                ]
            },
            {
                label: 'Setor',
                icon: '',
                items: [
                    {label: 'Listar Setores',
                    icon: 'pi pi-fw pi-pencil',
                    command: (event: Event) => { this.listarSetores(); }}
                ]
            }
        ];
        
    }
}