import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'cupcake-flavors-page',
  templateUrl: './cupcake-flavors.component.html',
  standalone: true,
  styleUrls: ['./cupcake-flavors.component.css']
})
export class CupcakeFlavorsComponent implements OnInit {
  quantity: number = 0;
  selectedFlavor: string = '';
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.quantity = +params['quantity'];
    });
  }

  goBack(): void {
    this.router.navigate(['/cupcake-quantity']);
  }

  cancel(): void {
    this.router.navigate(['/cupcake-quantity']);
  }

  next(): void {
    if (this.selectedFlavor) {
      this.router.navigate(['/order-summary', this.quantity, this.selectedFlavor]);
    } else {
      alert("Please select a flavor!");
    }
  }

  selectFlavor(flavor: string): void {
    this.selectedFlavor = flavor;
  }
}

export class CupcakeFlavorComponent {
}
