import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './components/landing/landing.component';
import { PostsComponent } from './components/posts/posts.component';
import { HomeComponent } from './components/home/home.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { SignupComponent } from './components/signup/signup.component';

export const routes: Routes = [
    { path: '', redirectTo: 'Login', pathMatch: 'full' },
    {
        path: 'Login',
        component: LoginComponent,
        title: 'Login',
    },
    {
        path: 'Signup',
        component: SignupComponent,
        title: 'Singup'
    },
    {
        path: '',
        component: LandingComponent,
        children: [
            {
                path: 'Home',
                component: HomeComponent,
                title: 'Home',
            },
            {
                path: 'Post',
                component: PostsComponent,
                title: 'Add Posts',
            },
            {
                path: 'PostDetails/:id',
                component: PostDetailsComponent,
                title: 'PostDetails',
            }
        ]
    }
];
