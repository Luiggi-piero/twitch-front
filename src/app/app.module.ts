import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {CarouselModule} from "ngx-carousel-lib";

import { AppComponent } from './app.component';

import { MenuComponent } from './components/menu/menu.component';
import { SectionCoverComponent } from './components/section-cover/section-cover.component';
import { SectionLiveComponent } from './components/section-live/section-live.component';
import { SectionVideoComponent } from './components/section-video/section-video.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    SectionCoverComponent,
    SectionLiveComponent,
    SectionVideoComponent,
    SidebarComponent,
    VideoPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
