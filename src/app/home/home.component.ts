import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // slip: { id: number, advice: string } null null;

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // ngOnInit(): void {
  //   const url = 'https://cat-fact.herokuapp.com';
  //   this.http.get<{slip: { id: number, advice: string }}>(url).subscribe(retorno => {
  //     this.slip = retorno.slip;  
  //     console.log(retorno);
  //   }
  //   );
  // }

  // imageCat() {
  //   console.log("image");
  // }

  // gifCat() {
  //   console.log("gif");
  // }

}
