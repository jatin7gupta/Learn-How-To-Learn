import {Component, OnDestroy, OnInit} from '@angular/core';
import {WebService} from '../../web.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {Blogs} from '../../shared/BlogInterface';

class Category {
  constructor(public id: string, public name: string) { }
}

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit, OnDestroy {


  selectedCategory: Category;
  categories = [
    new Category('Technology', 'Technology' ),
    new Category('Creativity', 'Creativity' ),
    new Category('Entrepreneurship', 'Entrepreneurship' ),
    new Category('Politics', 'Politics'),
    new Category('Cars', 'Cars')
  ];
  blog: Blogs;
  updateRequeust:boolean=false;
  subscription:Subscription;

  constructor(private webService: WebService, private router: Router){

  }

  ngOnInit() {
    this.selectedCategory = this.categories[0];
    this.subscription = this.webService.navItem$.subscribe(
      item => {
        this.blog = item;
        this.updateRequeust = true;

      }
    );
    console.log(this.blog);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onInput($event) {
    $event.preventDefault();
    console.log('selected: ' + $event.target.value);
  }

  submitForm(value){
    console.log(this.updateRequeust);
    let newDate = new Date(Date.now());
    let blogData={
      author: value.author,
      title: value.blogTitle,
      date:newDate.toString(),
      logo:value.image,
      category: value.dropdown,
      votes: this.updateRequeust? this.blog.votes:0,
      content: value.content,

    };

    if(this.updateRequeust){

      blogData['id']=this.blog.id;
      // blogData['votes']=this.blog.votes;
      console.log(blogData);
      this.webService.updateData(blogData)
        .subscribe(res=>{
            console.log(res);
          },
          (err) => {
            console.error(err)
          },
          ()=>{
            this.router.navigateByUrl('/home');
          })
    }
    else {
      this.webService.postData(JSON.stringify(blogData))
        .subscribe(res=>{
            console.log(res);
          },
          (err) => {
            console.error(err)
          },
          ()=>{
            this.router.navigateByUrl('/home');
          })
      }
    }

}
