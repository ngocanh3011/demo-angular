import { Component, OnInit, NgModule } from '@angular/core';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  authors = [
    {
      id: 1,
      img: "../../../../../assets/img/train.jpg",
      description: "Đây là anh phương năm 18 tuổi",
      date: "20/05/2011"
    },
    {
      id: 2,
      description: "anh Phương đi câu cá",
      img: "../../../../../assets/img/fish.jpg",
      date: "01/08/2011",
    },
    {
      id: 3,
      description: "anh Phương nướng thịt",
      img: "../../../../../assets/img/meat.jpg",
      date: "08/11/2011",
    },
    {
      id: 3,
      description: "anh Phương hơi đẹp trai",
      img: "../../../../../assets/img/JKK.jpg",
      date: "25/08/2012",
    },
    {
      id: 4,
      description: "anh tập lái ô tô, bibo bibo",
      img: "../../../../../assets/img/drive.jpg",
      date: "19/09/2012",
    },
    {
      id: 5,
      description: "anh Phương có đói vẫn đẹp trai",
      img: "../../../../../assets/img/hungry.jpg",
      date: "18/10/2012",
    },
    {
      id: 6,
      description: "anh Phương cùng cái máy ảnh",
      img: "../../../../../assets/img/photo.jpg",
      date: "22/10/2012",
    },
    {
      id: 7,
      description: "anh Phương vui vẻ giữa đám đông",
      img: "../../../../../assets/img/amount.jpg",
      date: "26/01/2014",
    },
    {
      id: 7,
      description: "anh Phương chụp hình cùng siêu nhân",
      img: "../../../../../assets/img/superman.jpg",
      date: "24/05/2014",
    },
    {
      id: 7,
      description: "anh Phương nhận thưởng",
      img: "../../../../../assets/img/award.jpg",
      date: "24/05/2014",
    },
    // more data
  ];
  constructor() {
    
   }
  ngOnInit() {

  }
}
