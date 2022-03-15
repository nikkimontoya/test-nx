import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatIconModule, MatCardModule],
  declarations: [
    HeaderComponent
  ],
  exports: [HeaderComponent]
})
export class UiComponentModule {}
