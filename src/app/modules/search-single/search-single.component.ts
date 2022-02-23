import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-single',
  templateUrl: './search-single.component.html',
  styleUrls: ['./search-single.component.scss']
})
export class SearchSingleComponent implements OnInit {
  dataCog:any
  defaultImage = 'https://miro.medium.com/max/441/1*9EBHIOzhE1XfMYoKz1JcsQ.gif';

  constructor() { }

  ngOnInit(): void {
    const gif:any = localStorage.getItem('gif');
    this.dataCog = JSON.parse(gif);
    console.log(JSON.parse(gif));
  }

}
 