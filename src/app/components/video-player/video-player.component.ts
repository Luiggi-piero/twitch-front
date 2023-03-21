import {
  Component,
  ElementRef,
  inject,
  ViewChild,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import HLS from 'hls.js';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css'],
})
export class VideoPlayerComponent implements OnInit {
  private _activatedRoute = inject(ActivatedRoute);

  private hls = new HLS();
  public user: string | null = 'HOME'; //User que se pasa por la url como parametro
  private playing: boolean = false;
  @ViewChild('video', { static: true }) private readonly video:
    | ElementRef<HTMLVideoElement>
    | any;

  ngOnInit(): void {
    this.user = this._activatedRoute.snapshot.paramMap.get('user') || 'HOME';
    // console.log('user capturado', this.user);
    this.load(`http://190.40.184.41:8000/live/${this.user}/index.m3u8`);
  }

  load(currentVideo: string) {
    if (HLS.isSupported()) {
      this.loadVideoWithHLS(currentVideo);
    } else {
      console.log('Lo siento...HLS no es soportado por su navegador');
    }
  }

  private loadVideoWithHLS(currentVideo: string) {
    this.hls.loadSource(currentVideo);
    this.hls.attachMedia(this.video.nativeElement);
  }
}
