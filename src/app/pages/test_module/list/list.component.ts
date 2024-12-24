import { CommonModule } from '@angular/common';
import { Component, inject, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-list',
   imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  protected router: Router = inject(Router);
  protected onRoutingClick = async ($event: MouseEvent) => {
    const value = await this.router.navigate(['/test_mdoule/add']);
    if(value){
      alert(value);
    }
  }
}
