import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../../services/post/post-service.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  postList: any[] = [];

  constructor(private postSrv: PostServiceService, private router: Router) {

  }

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postSrv.getPosts().subscribe((res: any) => {
      this.postList = res.data;
    })
  }

  trimText(text: string, limit: number): string {
    const words = text.split(' ');
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    } else {
      return text;
    }
  }

  navigateToCurrentPost(id: number) {
    this.router.navigate(['/PostDetails', id]);
  }

}
