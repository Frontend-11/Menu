import { Component } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  student:Student={
    id:1,
    name:"khalid",
    age:28
  }
  title = 'menu';
  total=0;
  qty=0;
  searchTerm = '';

  receive(){
    console.log("welcom")
  }
  foodmenu=[
    {id:1,name:"دجاج",price:30,description:"دجاج مشوي على الفحم",img:"/assets/cheken.jpg"},
    {id:2,name:"دجاج",price:30,description:"دجاج شواية ",img:"/assets/cheken.jpg"},
    {id:3,name:"ايدام",price:20,description:"ايدام خضار مشكل",img:"/assets/edam.jpeg"},
    {id:4,name:"ايدام",price:20,description:"ايدام  بالدجاج على الفرن",img:"/assets/edam2.jpeg"}
  ]

  sum(event:any ,price:number)
  {
    const ischecked:boolean=event.target.checked;
    console.log(ischecked)
    if(ischecked)
    {
      this.total=this.total+price
      this.qty+=1;
    }
    else{
      this.total=this.total-price
      this.qty-=1;
    }
  }

  // دالة لترشيح قائمة الطعام حسب البحث
  filteredFoodMenu() {
    if (!this.searchTerm.trim()) {
      return this.foodmenu;
    }
    const searchTermLowerCase = this.searchTerm.toLocaleLowerCase();
    
    return this.foodmenu.filter(item => 
      item.name.toLocaleLowerCase().includes(searchTermLowerCase) ||
      item.description.toLocaleLowerCase().includes(searchTermLowerCase)
    );
  }
}
