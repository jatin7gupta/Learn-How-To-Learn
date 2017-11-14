import {Component, OnDestroy, OnInit} from '@angular/core';
import {WebService} from '../../web.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {Blogs} from '../../shared/BlogInterface';
import {isNullOrUndefined} from 'util';
import {Category} from '../../shared/category';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit, OnDestroy {


  selectedCategory: Category;
  categories = [];
  blog: Blogs;
  updateRequeust:boolean;
  subscription:Subscription;
  authorModel:string='';
  titleModel:string='';
  logoModel:string='';
  contentModel:string='';


  constructor(private webService: WebService, private router: Router){
    this.updateRequeust=false;
    if(router.url==='/create'){
      this.authorModel='';
      this.titleModel='';
      this.logoModel='';
      this.contentModel='';
      this.updateRequeust=false;
    }
  }

  ngOnInit() {
    this.categories=this.webService.categories;
    this.selectedCategory = this.categories[0];
    this.subscription = this.webService.navItem$.subscribe(
      item => {
        this.blog = item;
        if(!isNullOrUndefined(item)){
          this.updateRequeust = true;
          this.authorModel=this.blog.author;
          this.contentModel=this.blog.content;
          this.logoModel=this.blog.logo;
          this.titleModel=this.blog.title;
        }

      },()=>{
        this.updateRequeust = false;
    }
    );
    console.log(this.blog);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.webService.changeNav(undefined);
  }

  onInput($event) {
    $event.preventDefault();
    console.log('selected: ' + $event.target.value);
  }

  submitForm(value){
    let newDate = new Date(Date.now());
    let blogData={
      author: value.author,
      title: value.blogTitle,
      date:newDate.toString(),
      logo:value.image,
      category: value.dropdown,
      votes: 0,
      content: value.content,
    };

    if(this.updateRequeust){

      blogData['id']=this.blog.id;
      blogData['votes']= +this.blog.votes;
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
