import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular'
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

const routes: Routes = [];

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, IonicModule.forRoot(), RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules})],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {}