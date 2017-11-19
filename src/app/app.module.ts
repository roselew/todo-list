import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputComponent } from './input.component';
import { ItemComponent } from './item.component';
import { ListManagerComponent } from './list-manager.component';
import { TodoListService } from './todo-list.service';
import { TodoListStorageService } from './todo-list-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ItemComponent,
    ListManagerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    TodoListService,
    TodoListStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
