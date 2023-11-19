import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private router:Router){}

  onSubmit(form: NgForm){
   console.log(form.value);
   this.router.navigate(['/game-board']);
  }

}
