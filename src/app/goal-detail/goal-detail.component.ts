import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Goal } from '../goal';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {

  @Input() goal:Goal;
  @Output() isComplete= new EventEmitter<boolean>();
  @Output() isDelete= new EventEmitter<boolean>();

  goalComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
  goalDelete(deleted:boolean){
    this.isDelete.emit(deleted);
  }
  constructor() { }

  ngOnInit() {
  }

}
