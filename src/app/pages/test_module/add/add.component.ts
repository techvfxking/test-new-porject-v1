import { CommonModule } from '@angular/common';
import { Component, inject, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent {
  protected router: Router = inject(Router);
  protected onRoutingClick = async ($event: MouseEvent) => {
    const value = await this.router.navigate(['/test_mdoule']);
    if(value){
      alert(value);
    }
  }
}
