import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nursery',
  templateUrl: './nursery.component.html',
  styleUrls: ['./nursery.component.css']
})
export class NurseryComponent implements OnInit {
  imagelist:Array<Object>=[] ;
  constructor() { }

  ngOnInit(): void {
    this.slideImages();
  }

  slideImages(){
    for(let i=0;i<8;i++){
       let imageObject: object = {
           image: "assets\\img\\Nursery\\IMG ("+(i+1).toString()+")"+".jpg",
           thumbImage: "assets\\img\\Nursery\\IMG ("+(i+1).toString()+")"+".jpg",
       }
       this.imagelist.push(imageObject);
    }
   }
}
