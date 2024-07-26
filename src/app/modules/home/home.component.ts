import { CommonModule } from '@angular/common';
import { Component, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { RouterLink } from '@angular/router';
import { TemplateComponent } from '../component/template.component';

@Component({
    selector     : 'landing-home',
    templateUrl  : './home.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone   : true,
    imports      : [MatButtonModule, RouterLink, MatIconModule, 
        TemplateComponent,
        MatIconModule,  CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule,
        MatInputModule, MatRadioModule],
})
export class LandingHomeComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }

    @ViewChild('test', {read:ViewContainerRef}) testContainer!: ViewContainerRef;


    template={

        name: 'HtmlText-Inplace',
        description:'This page can provide the specification document of this component template in detail, including the function, the model and exceptions. And it provides the usage document to help.',
        version: 'v1.0.1'

    }

  
    reactiveComponent={
        component:{
          content:{
              question: "input the question here?",
              options:{
                option1: {
                    key:"1",
                    value:"option 1"
                },
                option2:{
                    key:"2",
                    value:"option 2"
                },
                option3:{
                    key:"3",
                    value:"option 3"
                }
              }

          },
          ui:{},      
        },
        runtime:{
          data:{
             
          },
          score:{},
          feedback:{}
        }
      };
  
   
    StartTest(){

        this.testContainer.clear();

        console.log('container:' + this.testContainer);
        const fmComponentRef  = this.testContainer!.createComponent(TemplateComponent);
        (fmComponentRef as any).instance.data = this.reactiveComponent;
        fmComponentRef.changeDetectorRef.markForCheck();

    }

}
