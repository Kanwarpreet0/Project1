import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-page',
  templateUrl: './cupcake-quantity.component.html',
  styleUrls: ['./cupcake-quantity.component.css']
})
export class CupcakeQuantityComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  selectCupcakes(quantity: number): void {

    this.router.navigate(['/cupcake-flavors', quantity]);
  }

}
