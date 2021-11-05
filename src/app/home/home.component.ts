import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public name = 'Hữu Chiến';
  public age = 28;
  public vnData = [{city: "Chọn thành phố"},{city: "Nam Định", districts: ["Nam Trực", "Trực Ninh", "Hải Hậu", "Mỹ Lộc", "Xuân Trường", "Giao Thủy", "Ý Yên", "Vụ Bản"]}
  ,{city: "Thái Bình", districts: ["Quỳnh Phụ", "Đông Hưng", "Tiền Hải", "Quỳnh Côi"]}
    , {city: "Hà Nam", districts: ["Phủ Lí", "Bình Lục", "Duy Tiên", "Kim Bảng"]}
  ];
  public districts: any;

  constructor() {}

  ngOnInit(): void {}

  public resetName(): void {
    console.log('resetName');
    this.name = '';
  }

  public changeCity(event: any) : void {
    const city = event.target.value;
    const search:any = this.vnData.find(element => element.city === city);
    this.districts = search.districts;
  }
}
