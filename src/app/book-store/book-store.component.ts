import { Component, NgModule, VERSION } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';  
import { FormsModule } from '@angular/forms';
import { FilterPipe }from './book-store.filter';



@Component({
  selector: 'app-root',
  templateUrl: './book-store.component.html',
  styleUrls: ['./book-store.component.css']
})
export class AppComponent {
  selected_books: { name: string; id: number; selected: boolean; }[];
  name:string;
  searchText:string = "";
  selected_count:number = 0;
  
  
  // Data Object to List Games
  books = [
    {
      name:'1971-1980',
      id:1,
      selected:false
    },
    {
      name:'1981-1990',
      id:2,
      selected:false
    },
    {
      name:'1991-2000',
      id:3,
      selected:false
    },
    {
      name:'2000-2010',
      id:4,
      selected:true},
    {
      name:'Просвіта',
      id:5,
      selected:false
    },
    {
      name:'Підручники і посібники',
      id:6,
      selected:false},
    {
      name:'Ранок',
      id:7,
      selected:true
    },
    {
    name:'BOOKSHEF',
    id:8,
    selected:false
  }
  ]
  
  
  getSelected(){
     this.selected_books =  this.books.filter( s => {
          return s.selected;
        });
     this.selected_count = this.selected_books.length;    
        
  }
  
 
  clearSelection(){
    this.searchText = "";
    this.books =  this.books.filter( g => {
          g.selected = false;
          return true;
        });
    this.getSelected();    
  }
  
  
  deleteGame(id:number){
    this.searchText = "";
    this.books =  this.books.filter( g => {
          if(g.id == id)
          g.selected = false;
          
          return true;
        });
    this.getSelected(); 
  }
  
  clearFilter(){
    this.searchText = "";
  }
  
  constructor() {
    this.name = `Angular! v${VERSION.full}`;
    this.getSelected();
  }
}