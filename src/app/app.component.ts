import { CommonModule } from '@angular/common';
import { Component, inject, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test-new-porject-v1';
  protected router: Router = inject(Router);
  protected onRoutingClick = async ($event: MouseEvent) => {
    const value = await this.router.navigate(['/test_mdoule']);
    if(value){
      alert(value);
    }
  }
}
