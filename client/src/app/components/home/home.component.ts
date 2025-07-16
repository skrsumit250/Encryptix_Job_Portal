import { Component } from '@angular/core';
import { DescriptionComponent } from '../description/description.component';
import { JobBoxComponent } from '../job-box/job-box.component';

@Component({
  selector: 'app-home',
  imports: [DescriptionComponent, JobBoxComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
