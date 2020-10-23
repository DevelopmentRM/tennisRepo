import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {
  imagelist:Array<Object>=[] ;
  constructor() { }

  ngOnInit(): void {
    this.slideImages();
  }

  slideImages(){
    for(let i=0;i<7;i++){
       let imageObject: object = {
           image: "assets\\img\\school\\IMG ("+(i+1).toString()+")"+".jpg",
           thumbImage: "assets\\img\\school\\IMG ("+(i+1).toString()+")"+".jpg",
       }
       this.imagelist.push(imageObject);
    }
   }

}
