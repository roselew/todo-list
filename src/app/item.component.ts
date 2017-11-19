import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `
  <div class='todo-item'>
  <input type="checkbox" (click)="completeItem()"/>
  <p class="todo-title" [ngClass]="{'todo-complete': isComplete}">
  {{ todoItem.title }}
</p>
    <button (click)="removeItem()">
    remove
  </button>
  </div>  
  `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input()
  todoItem 
  @Output() remove:EventEmitter<any> = new EventEmitter();
  
  
  removeItem() {
    this.remove.emit(this.todoItem);
  }

  isComplete: boolean = false;
  
  completeItem() {
    this.isComplete = !this.isComplete;
  }
  constructor() { }

  ngOnInit() {
  }

}
