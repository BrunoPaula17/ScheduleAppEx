import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WelcomeComponent } from './welcome.component'
import { AlocacaoComponent } from './alocacao/alocacao.component';

@NgModule({
    imports: [ BrowserModule ],
    declarations:[ AlocacaoComponent ],
    bootstrap:[ AlocacaoComponent ]
})

export class AppModule {}