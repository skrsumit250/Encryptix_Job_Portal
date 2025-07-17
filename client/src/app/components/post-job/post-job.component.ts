import { Component, inject,OnInit } from '@angular/core';
import { IJob } from '../../model/jobs';

@Component({
  selector: 'app-post-job',
  imports: [],
  templateUrl: './post-job.component.html',
  styleUrl: './post-job.component.css'
})
export class PostJobComponent implements OnInit {
  
  postJobs: IJob [] = [];

  ngOnInit(): void {

  }

}
