import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [AppComponent, NxWelcomeComponent],
    imports: [BrowserModule, MatCardModule, MatButtonModule, MatIconModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
