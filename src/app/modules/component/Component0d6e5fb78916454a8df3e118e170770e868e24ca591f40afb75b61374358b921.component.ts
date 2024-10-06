import {Component, Input, ViewEncapsulation} from '@angular/core';
import {MatRadioGroup, MatRadioModule} from '@angular/material/radio';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DomSanitizer } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ScoreComponentServiceClient } from '../clients/score.component.client';
import { ScoreComponentComponent } from '../clients/score-component/score.component';

@Component({
    selector     : 'Component0d6e5fb78916454a8df3e118e170770e868e24ca591f40afb75b61374358b921',
    standalone   : true,
    templateUrl  : './Component0d6e5fb78916454a8df3e118e170770e868e24ca591f40afb75b61374358b921.component.html',
    encapsulation: ViewEncapsulation.None,
    imports:[
       CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule,MatRadioModule,
       ScoreComponentComponent
    ]
    
})
export class Component0d6e5fb78916454a8df3e118e170770e868e24ca591f40afb75b61374358b921
{

    @Input() data:any;
    @Input() env:any={
        'Authorized': 'X-Asynmous-User-ID',
        'ScoreUrl': 'http://localhost:8081/v3/edu/ReactiveComponentRuntime/score'
    }

    constructor(
        public sanitizer:DomSanitizer,  
     ){}
    
    
   
}
