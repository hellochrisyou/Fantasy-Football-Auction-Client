import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CachingInterceptor } from './core/interceptor/caching.interceptor';
import { HeaderInterceptor } from './core/interceptor/header.interceptor';
import { HomeModule } from './feature/home/home.module';
import { MyAccountModule } from './feature/my-account/my-account.module';
import { MyTeamModule } from './feature/my-team/my-team.module';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from './shared/shared.module';
import { CreateAuctionComponent } from './feature/create-auction/create-auction.component';
import { CreateAuctionModule } from './feature/create-auction/create-auction.module';
import { JoinAuctionModule } from './feature/join-auction/join-auction.module';
import { LiveAuctionModule } from './feature/live-auction/live-auction.module';
import { ProfileModule } from './feature/profile/profile.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    HomeModule,
    CreateAuctionModule,
    JoinAuctionModule,
    LiveAuctionModule,
    SharedModule,
    MyTeamModule,
    ProfileModule,
    MyAccountModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CachingInterceptor,
      multi: true
    }
  ],
})
export class AppModule { }
