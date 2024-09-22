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
    selector     : 'Component3121f9dfc5bb427ca055e6521008c7f95129a609d19b4df48659566e00894fa5',
    standalone   : true,
    templateUrl  : './Component3121f9dfc5bb427ca055e6521008c7f95129a609d19b4df48659566e00894fa5.component.html',
    encapsulation: ViewEncapsulation.None,
    imports:[
       CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule,MatRadioModule,
       ScoreComponentComponent
    ]
    
})
export class Component3121f9dfc5bb427ca055e6521008c7f95129a609d19b4df48659566e00894fa5
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
