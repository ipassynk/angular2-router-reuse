import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouteReuseStrategy, RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {ListComponent} from './list/list.component';
import {DetailReusableComponent} from 'app/detail-reusable/detail-reusable.component';
import {DetailSameComponent} from './detail-same/detail-same.component';
import {CustomRouteReuseStrategy} from 'app/route-reuse.strategy';
import {DetailStaleComponent} from 'app/detail-stale/detail-stale.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    children: [
      {path: 'detail-reusable/:id', component: DetailReusableComponent},
      {path: 'detail-same/:id', component: DetailSameComponent},
      {path: 'detail-stale/:id', component: DetailStaleComponent},
    ]
  }
];

@NgModule({
  declarations: [AppComponent, ListComponent, DetailReusableComponent, DetailStaleComponent, DetailSameComponent],
  imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(routes)],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: CustomRouteReuseStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
