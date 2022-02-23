import { Component, OnInit, Input, HostListener } from '@angular/core'; 
 
import { Router } from '@angular/router';
import { ApiService }  from "src/app/core/http/api/api.service";

@Component({
  selector: 'app-search-gif',
  templateUrl: './search-gif.component.html',
  styleUrls: ['./search-gif.component.scss']
})
export class SearchGifComponent implements OnInit {
  
  title: string = "GIF SEARCH";
  text: string = "";
  myResults = this.apiService.myResults
  loading = false
  number = Array(6).fill(0).map((x,i)=>i);
  defaultImage = 'https://miro.medium.com/max/441/1*9EBHIOzhE1XfMYoKz1JcsQ.gif';

constructor(public apiService: ApiService, public router: Router) {
 }

  // Listen to when the user scroll down the page and load more content
  @HostListener('window:scroll')
  onScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
      this.apiService.next();
    }
  }

  
  searchText() {
    console.log(this.text)
    this.apiService.search(this.text);
  }
  
  goNext(data:any){
    const id = data.id 
    localStorage.setItem('gif', JSON.stringify(data));
    return this.router.navigate(['search-single',  id]);
  }

   ngOnInit(): void { 
  }

   ngDoCheck() {
     this.loading = this.apiService.myResultsStatus
       console.log(this.apiService.myResultsStatus)
    }
}
