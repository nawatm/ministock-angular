import { ConstantService } from './service/common/constant.service';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router,NavigationEnd,ActivatedRoute } from '@angular/router';
import { filter,map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = ' | Ministock Angular';

constructor(private titleService:Title,private route:Router,private activatedRoute:ActivatedRoute) {}

  setDocTitle(title:string){
    this.titleService.setTitle(title)
  }

  ngOnInit() {
    const appTitle = this.titleService.getTitle();
    this.route
      .events.pipe(
        filter(event=>event instanceof NavigationEnd),
        map(()=>{
          let child = this.activatedRoute.firstChild;
          while(child.firstChild){
            child = child.firstChild;
          }
          if(child.snapshot.data["title"]){
            return child.snapshot.data["title"];
          }
          return appTitle;
        })
      ).subscribe((ttf:string)=>{
        this.titleService.setTitle(ttf+this.title);
      });
  }

}

