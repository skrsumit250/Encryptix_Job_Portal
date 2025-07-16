import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-description',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent {
  headline: string = "Welcome to Job.Search()";
  paragraph: string = "At Job.Search(), we believe in the power of connecting talent with opportunity. Whether you are a job seeker looking for the perfect role or an employer searching for the ideal candidate, we are here to make the process seamless and successful.";
  jobseekers: string = " : Explore thousands of job listings from top companies.";
  employer: string = " : Post job openings and find qualified candidates quickly & Browse our extensive database of job seekers.";
}
