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
   

    template={
  "name" : "Test2",
  "description" : "test 2 for score and attribute owner",
  "version" : "v1.0"
};
      
    reactiveComponent={
  "component" : {
    "componentTemplateId" : "0d6e5fb78916454a8df3e118e170770e",
    "templateDeployId" : null,
    "content" : { },
    "ui" : { }
  },
  "runtime" : {
    "data" : { }
  },
  "scores" : [ ]
};



    async ngAfterContentInit() {
      
      this.StartTest();

    }

   
    async StartTest(){
      
        const componentModule = await import('../component/Component0d6e5fb78916454a8df3e118e170770e868e24ca591f40afb75b61374358b921.component');
        const TemplateComponent = componentModule['Component0d6e5fb78916454a8df3e118e170770e868e24ca591f40afb75b61374358b921'];

        this.testContainer.clear();

        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(TemplateComponent);

        console.log('container:' + this.testContainer);
        const fmComponentRef  = this.testContainer!.createComponent(componentFactory);
        (fmComponentRef as any).instance.data = this.reactiveComponent;
        fmComponentRef.changeDetectorRef.markForCheck();

    }

}
