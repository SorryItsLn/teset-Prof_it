import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  userData: FormGroup
  constructor(){
    this.userData = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required,Validators.minLength(6)])
    })
  }




  onAuth(){
    if (this.userData.valid) {
      alert("вы усешно зарегистриовались");
     this.userData.reset()
      
    } else {
      alert("Введите правильно значение");
      this.userData.reset()
    }
    
  }
}
