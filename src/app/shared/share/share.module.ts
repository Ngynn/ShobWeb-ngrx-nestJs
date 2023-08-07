import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { MainComponent } from 'src/app/components/main/main.component';



@NgModule({
  declarations: [NavbarComponent, FooterComponent , MainComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavbarComponent, RouterModule,FooterComponent, MainComponent],
})
export class ShareModule { }
