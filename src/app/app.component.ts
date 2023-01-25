import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { NasaService } from './nasa.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  imgOfTheDay = "";

  constructor(public nasaService: NasaService){}

  ngOnInit(): void {
    this.nasaService.getImageOfTheDay().subscribe((toto) => {
      this.imgOfTheDay = toto.url;
    });
}
}
