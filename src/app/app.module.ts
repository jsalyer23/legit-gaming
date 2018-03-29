// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule, MatButtonModule } from '@angular/material';
import { NgxCarouselModule } from 'ngx-carousel';

// Libraries
import 'hammerjs';

// Components
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { StoreComponent } from './store/store.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';

/* Routes go here, specify custom url paths { path: PATH, component: COMPONENT } */
const appRoutes: Routes = [
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'store', component: StoreComponent },
  { path: 'login', component: UserComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ContactUsComponent,
    StoreComponent,
    UserComponent,
    AdminComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    NgxCarouselModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }, // Enable this to track route handling and callbacks NOTE: Debug only
    )
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    NgxCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
