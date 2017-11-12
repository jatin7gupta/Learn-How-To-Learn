import {Component, OnInit} from '@angular/core';
import {WebService} from '../../web.service';
import {Router} from '@angular/router';
import {HomeComponent} from '../home/home.component';

class Category {
  constructor(public id: string, public name: string) { }
}

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {


  selectedCategory: Category;
  categories = [
    new Category('Technology', 'Technology' ),
    new Category('Creativity', 'Creativity' ),
    new Category('Entrepreneurship', 'Entrepreneurship' ),
    new Category('Politics', 'Politics'),
    new Category('Cars', 'Cars')
  ];

  constructor(private webService: WebService, private router: Router){}

  ngOnInit() {
    this.selectedCategory = this.categories[0];
  }

  onInput($event) {
    $event.preventDefault();
    console.log('selected: ' + $event.target.value);
  }

  submitForm(value){

    let newDate = new Date(Date.now());

    // {{dateString |  date:'MM/dd/yyyy'}}

    let blogData={
      author: value.author,
      title: value.blogTitle,
      date:newDate.toString(),
      logo:value.image,
      category: value.dropdown,
      rating: 5,
      content: value.content
    };

    this.webService.postData(JSON.stringify(blogData))
      .subscribe(res=>{
        console.log(res);
      },
      (err) => console.error(err),
      ()=>{
      this.router.navigate([HomeComponent]);
    })
  }
}
