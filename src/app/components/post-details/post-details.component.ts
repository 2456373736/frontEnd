import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../../services/post/post-service.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css'
})
export class PostDetailsComponent implements OnInit {
  postObj: any[] = [];

  postId = 0;

  constructor(private postSrv: PostServiceService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((res: any) => {
      this.postId = res.id;
    });
  }

  ngOnInit(): void {
    this.postSrv.getPostById(this.postId).subscribe((res: any) => {
      if (res.result) {
        this.postObj = res.data;
      }
    });
  }

}
