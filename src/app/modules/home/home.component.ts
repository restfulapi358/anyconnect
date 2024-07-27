import { CommonModule } from '@angular/common';
import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { RouterLink } from '@angular/router';

@Component({
    selector     : 'landing-home',
    templateUrl  : './home.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone   : true,
    imports      : [MatButtonModule, RouterLink, MatIconModule,
        MatIconModule,  CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule,
        MatInputModule, MatRadioModule],
})
export class LandingHomeComponent
{

    /**
     * Constructor
     */
    constructor(private componentFactoryResolver: ComponentFactoryResolver)
    {



    }

    @ViewChild('test', {read:ViewContainerRef}) testContainer!: ViewContainerRef;
    TemplateCmponent:any;

    template={

        name: 'HtmlText-Inplace',
        description:'This page can provide the specification document of this component template in detail, including the function, the model and exceptions. And it provides the usage document to help.',
        version: 'v1.0.1'

    }

  
    reactiveComponent = {
        "component": {
          "content": {
            "initText": "<h3>Using Nginx</h3><p>If you have Nginx installed, you can configure it to serve your Angular application.</p><ol><li><strong>Install Nginx</strong> (if not already installed):</li></ol><p><br></p>"
          },
          "ui": {}
        },
        "runtime": {
          "data": {
            "htmlText": null
          }
        },
        "constants": {}
      };
   
    async StartTest(){
      
        const componentModule = await import('../component/Component3121f9dfc5bb427ca055e6521008c7f987d885a252da4666a4d795fa6eb31346.component');
        const TemplateComponent = componentModule['Component3121f9dfc5bb427ca055e6521008c7f987d885a252da4666a4d795fa6eb31346'];

        this.testContainer.clear();

        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(TemplateComponent);

        console.log('container:' + this.testContainer);
        const fmComponentRef  = this.testContainer!.createComponent(componentFactory);
        (fmComponentRef as any).instance.data = this.reactiveComponent;
        fmComponentRef.changeDetectorRef.markForCheck();

    }

}
