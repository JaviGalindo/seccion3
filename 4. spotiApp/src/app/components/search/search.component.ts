import { Component } from '@angular/core';
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {
  termino:string = "";

  constructor(public _spotify: SpotifyService) {}

   searchArtist() {
     if(this.termino.length == 0){
       return;
     }
     this._spotify.getArtistas(this.termino)
      .subscribe(response => {
        console.log(response);
      });
   }

}
