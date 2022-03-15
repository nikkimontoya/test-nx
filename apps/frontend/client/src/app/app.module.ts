import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { UiComponentModule } from '@test-nx/ui-component';

@NgModule({
    declarations: [AppComponent, NxWelcomeComponent],
    imports: [BrowserModule, UiComponentModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
