import { Routes } from '@angular/router';
import { JobBoxComponent } from './components/job-box/job-box.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { PostJobComponent } from './components/post-job/post-job.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'Jobs',
        component: JobBoxComponent,
    },
    {
        path: 'Post_Jobs',
        component: PostJobComponent,
    },
    {
        path: 'Contact',
        component: ContactComponent,
    }
];


