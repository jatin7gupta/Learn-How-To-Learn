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
    webService.getData()
      .subscribe(res=>{
        this.blogs = res
      },
        (err) => console.error(err),
        ()=>{
          this.blogs.forEach(item=>{
            item.headingId=item.id+"heading";
            item.collapseId = item.id+"collapse";
          });
      }
      );
  }

  ngOnInit() {

  }


}
