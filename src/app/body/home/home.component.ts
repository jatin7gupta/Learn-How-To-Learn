import {Component, OnInit} from '@angular/core';
import {WebService} from '../../web.service';
import {Router} from '@angular/router';
import {Category} from '../../shared/category';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  blogs:any[];
  categories:Category[];
  fliteredBlogs: any[];

  constructor(private webService:WebService, private router: Router) {
  }

  ngOnInit() {
    this.getBlogData();
    this.categories=this.webService.categories;

  }

  getBlogData(){

    this.webService.getData()
      .subscribe(
        res=>{
          this.blogs = res
        },
        (err) => {
          console.error(err)
        },
        ()=>{
          this.blogs.forEach(item=>{
            item.headingId=item.id+"heading";
            item.collapseId = item.id+"collapse";
          });
          if(this.router.url ==='/trending'){
            this.blogSort();
          }
          this.fliteredBlogs=this.blogs;
        }
      );
  }

  deleteBlog(item){
    this.webService.deleteData(item)
      .subscribe(
        res=>{
        console.log(res);
        },
        (err)=>{
        console.log(err);
        },
        ()=>{
          this.getBlogData();
        }
      )
  }

  upVote(item){
   let blogdata={
     author:item.author,
     title: item.title,
     date:item.date,
     logo:item.logo,
     category:item.category,
     votes:item.votes+1,
     content:item.content,
     id:item.id
    };

    this.webService.updateData(blogdata)
      .subscribe(res=>{
         // console.log(res);
        },
        (err)=>{
        console.log(err);
        },
        ()=>{
        this.getBlogData();
        }
      )
  }

  blogSort(){
    function comparator(a,b) {
      return parseInt(b.votes) - parseInt(a.votes);
    }
    this.blogs.sort(comparator);
  }

  updateBlog(item){
    this.webService.changeNav(item);
    this.router.navigateByUrl('/edit');
  }

  filterBlogs(category){
    if(isNullOrUndefined(category)|| category.name === 'All'){
      this.fliteredBlogs=this.blogs;
    }
    else {
      this.fliteredBlogs =  this.blogs.filter(blog=> blog['category']===category.name);
    }
  }
}
