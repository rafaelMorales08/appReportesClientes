import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

  @Input() post: Post = {};


  img1 = '/assets/logonormal.png';
  
  img2 = '/assets/perro-2.jpg';
  
  img3 = '/assets/perro-3.jpg';

  constructor() { }

  ngOnInit(): void { }

}
