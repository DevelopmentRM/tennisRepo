import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-adult',
  templateUrl: './adult.component.html',
  styleUrls: ['./adult.component.css']
})
export class AdultComponent implements OnInit {
  imagelist:Array<Object>=[] ;
  constructor() { }

  ngOnInit(): void {
    this.slideImages();
  }
  slideImages(){
    for(let i=0;i<8;i++){
       let imageObject: object = {
           image: "assets\\img\\Adult\\IMG ("+(i+1).toString()+")"+".jpg",
           thumbImage: "assets\\img\\Adult\\IMG ("+(i+1).toString()+")"+".jpg",
       }
       this.imagelist.push(imageObject);
    }
   }

}
