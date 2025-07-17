import { Component, inject } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { HttpClient } from '@angular/common/http';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-job-box',
  imports: [NgIf,NgFor,CardComponent],
  templateUrl: './job-box.component.html',
  styleUrl: './job-box.component.css'
})
export class JobBoxComponent {
  http = inject(HttpClient);
  jobs: any[] = [];
  ngOnInit(): void {
    this.getJobs();
  }
  getJobs(){
    this.http.get('http://localhost:5000/Jobs').subscribe((data:any) => {
      this.jobs = data;
      console.log(data);
    });
  }
}
