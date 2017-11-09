import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  blogs:any[];
  constructor() {
    this.blogs = [
      {
        "id": 1,
        "title": "Hello World",
        "author": "Jhon Doe",
        "date": "13/12/3017",
        "logo": "assets/helloworld.jpg",
        "rating": "4",
        "category": "Technology",
        "content": "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      },
      {
        "id": 2,
        "title": "Hello World",
        "author": "Jhon Doe",
        "date": "",
        "logo": "",
        "rating": "3",
        "category": "Technology",
        "content": "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      }
    ];
    this.blogs.forEach(item=>{
      item.headingId=item.id+"heading";
      item.collapseId = item.id+"collapse";
    });
  }

  ngOnInit() {
  }

}
