import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, FormControl } from '@angular/forms';
import { MatStepperModule} from '@angular/material/stepper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router){
  }

  // goToPage(pageName:string){
  //   this.router.navigate([`${pageName}`]);
  // }

  title = 'tenant-web';
}
