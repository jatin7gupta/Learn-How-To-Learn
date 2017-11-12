import {Component, OnInit} from '@angular/core';
import {WebService} from '../../web.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  blogs:any[];

  constructor(private webService:WebService) {
    this.getBlogData();
  }

  ngOnInit() {

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

}
