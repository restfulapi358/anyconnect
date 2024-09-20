import { CommonModule } from '@angular/common';
import { AfterContentInit, Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
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
export class LandingHomeComponent implements AfterContentInit
{

    /**
     * Constructor
     */
    constructor(private componentFactoryResolver: ComponentFactoryResolver)
    {



    }
  

    @ViewChild('test', {read:ViewContainerRef}) testContainer!: ViewContainerRef;
   

    template = {
      "name" : "Fill-in-blank",
      "description" : "fill-in-blank white-space: normal: This allows the text to wrap onto the next line as needed, which is the default for most block elements.",
      "version" : "v2.0"
    };
      
    reactiveComponent = {
      "component" : {
        "componentTemplateId": "30a70399b4ed499f9eb8208993b7165c",
        "templateDeployId": null,
        "content" : {
          "question" : "This is the question?"
        },
        "ui" : { }
      },
      "runtime" : {
        "data" : {
          "answer" : "people"
        }
      },
      "constants" : { }
    };



    async ngAfterContentInit() {
      
      this.StartTest();

    }

   
    async StartTest(){
      
        const componentModule = await import('../component/Component3121f9dfc5bb427ca055e6521008c7f95129a609d19b4df48659566e00894fa5.component');
        const TemplateComponent = componentModule['Component3121f9dfc5bb427ca055e6521008c7f95129a609d19b4df48659566e00894fa5'];

        this.testContainer.clear();

        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(TemplateComponent);

        console.log('container:' + this.testContainer);
        const fmComponentRef  = this.testContainer!.createComponent(componentFactory);
        (fmComponentRef as any).instance.data = this.reactiveComponent;
        fmComponentRef.changeDetectorRef.markForCheck();

    }

}
