import {Component} from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent {

    mostrar = true;

    frase:any = {
        mensaje: 'Un gran poder requiere una gran resposabilidad',
        autor: 'Ben Parker'
    }

    personajes:string[] = ['A','B','C']
}