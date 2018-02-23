import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {

  constructor( private route:ActivatedRoute ) { 
    this.route.parent.params.subscribe(param => {
      console.log("CHILD route - new user");
      console.log(param);
    })
  }

  ngOnInit() {
  }

}