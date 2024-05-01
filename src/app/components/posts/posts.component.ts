import { Component } from '@angular/core';
import { PostServiceService } from '../../services/post/post-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {

  constructor(private postServ: PostServiceService) {

  }

  postObj: any = {
    "postImg": '',
    "postTitle": '',
    "postDesc": '',
    "recipe": '',
  }

  createPost() {
    this.postServ.addPost(this.postObj).subscribe((res: any) => {
      if (res.result) {
        alert('Post Created');
        this.postObj.postImg = '';
        this.postObj.postDesc = '';
        this.postObj.postTitle = '';
        this.postObj.recipe = '';
      }
      else {
        alert(res.message);
      }
    })
  }

}
