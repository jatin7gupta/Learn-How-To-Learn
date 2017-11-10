import { Component, OnInit } from '@angular/core';

class Category {
  constructor(public id: string, public name: string) { }
}

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  authors:string;
  imageURL:string;
  contentData: string;
  titleBlog: string;

  selectedCategory: Category;
  categories = [
    new Category('Technology', 'Technology' ),
    new Category('Creativity', 'Creativity' ),
    new Category('Entrepreneurship', 'Entrepreneurship' ),
    new Category('Politics', 'Politics'),
    new Category('Cars', 'Cars')
  ];

  constructor(){}

  ngOnInit() {
    this.selectedCategory = this.categories[1];
  }

  onInput($event) {
    $event.preventDefault();
    console.log('selected: ' + $event.target.value);
  }

  submitForm(value){

    let newDate = new Date(Date.now());

    let blogData={
      title: this.titleBlog,
      author: this.authors,
      date:newDate,
      logo:this.imageURL,
      rating: 5,
      category: this.selectedCategory,
      content:this.contentData
    };
    // {{dateString |  date:'MM/dd/yyyy'}}
    console.log(value);
  }
}
