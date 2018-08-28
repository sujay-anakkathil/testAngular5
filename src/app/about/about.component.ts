import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
goals:any;
  constructor(private rou:ActivatedRoute, private router:Router,private data:DataService) { 
    this.rou.params.subscribe(response=>console.log(response.id));
  }

  ngOnInit() {
    this.data.goal.subscribe(res=>this.goals=res);
  }

  sendMeHome(){
    this.router.navigate([''])
  }
}
