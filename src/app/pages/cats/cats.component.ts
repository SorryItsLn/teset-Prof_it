import { Component, OnInit } from '@angular/core';
import { ICats } from '../../models/datsInt';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrl: './cats.component.scss',
})
export class CatsComponent {
  link = '';
  response: any;
  catsData: FormGroup;
  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.catsData = new FormGroup({
      dataWithText: new FormControl(null, [Validators.minLength(0)]),
    });
  }
  // не знал как реальизовать данный компонент, немного не понял тз, надеюсь на обратную связь, сделал очень кастыльно
  catWiwthText() {
    if (this.catsData.value.dataWithText == null) {
      this.link = 'https://cataas.com/cat';
      console.log('ndnjfh');
    } else {
      this.link ='https://cataas.com/cat/says/' + this.catsData.value.dataWithText;
      this.catsData.reset();
      console.log('первая');
    }
  }
}
