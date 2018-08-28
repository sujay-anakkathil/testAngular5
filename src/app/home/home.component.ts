import { Component, OnInit } from '@angular/core';
import {trigger,style,transition,animate,keyframes,query,stagger} from '@angular/animations'
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  itemCount:number;
  goalList=[];
  btnText:string="Add a goal"
  goalText:string="My first goal"
  constructor(private data:DataService) { }

  ngOnInit() {
    this.data.goal.subscribe(res=>this.goalList=res);
    this.itemCount = this.goalList.length;
    this.data.changeGoal(this.goalList);
  }

  addGoals(){
    this.goalList.push(this.goalText);
    this.goalText=''; 
    this.itemCount = this.goalList.length;
    this.data.changeGoal(this.goalList);

  }

  removeGoal(i){
    this.goalList.splice(i,1);
    this.itemCount = this.goalList.length;
    this.data.changeGoal(this.goalList);
    
    
  }

}
