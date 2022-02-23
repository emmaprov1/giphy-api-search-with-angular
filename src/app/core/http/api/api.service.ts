import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'; 
import { filter, distinct , tap, distinctUntilChanged } from 'rxjs/operators';
import { GifSearchResult, GifSearchValues, GifSearchReq } from 'src/app/core/interface/searchgif.interface';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //the main endpoint url
  static readonly giphyUrl = 'https://api.giphy.com/v1/gifs/search';
  //the provided api key for the assessment
  static readonly giphyApiKey = 'deokzgUjxm6QHQdp3H3aca1LSZcCpucc'; 

  imageHolder:any = [];
  
  private readonly rating = 'G';
  private readonly lang = 'en';

  currentOffset = 0;
  currentSearchText = '';
  pageSize = 20;


  myResultsSubject = new Subject<Array<GifSearchValues>>();
  myResults = new Observable<Array<GifSearchValues>>();
  myResultsStatus = false;

  searchRequest = new Subject<GifSearchReq>();
  resetSearch = new Subject<any>();

  constructor(private http: HttpClient) {
    this.myResults = this.myResultsSubject.asObservable();
 
    this.searchRequest.pipe(
      distinct(request => request.offset, this.resetSearch),
    ).subscribe((request) => {
      this.getmyResults(request.searchText, request.offset, request.pageSize);
    });
  }

  private getmyResults(text: string, offset: number, pageSize: number) {
    
    this.myResultsStatus = true;

    const params = {
      api_key: ApiService.giphyApiKey,
      q: text,
      limit: pageSize.toString(),
      offset: offset.toString(),
      rating: this.rating,
      lang: this.lang
    };
    try{
        this.http.get<GifSearchResult>(ApiService.giphyUrl, { params }).subscribe((searchGifResult) => {
          this.myResultsStatus = false;
          this.imageHolder = [...this.imageHolder, ...searchGifResult.data];
          this.currentOffset = searchGifResult.pagination.offset + searchGifResult.pagination.count;
          console.log(searchGifResult)
          this.myResultsSubject.next(this.imageHolder);
        });
    }
    catch(e){
      // Sentry can be integrated here for error catchng
      console.log(e)
    }
  }

  search(text: string) {
    this.currentSearchText = text;
    this.currentOffset = 0;

    this.imageHolder = [];
    this.myResultsSubject.next(this.imageHolder);
    this.resetSearch.next(null);

    this.searchRequest.next({ searchText: this.currentSearchText, offset: this.currentOffset, pageSize: this.pageSize });
  }

  next() {
    this.searchRequest.next({ searchText: this.currentSearchText, offset: this.currentOffset, pageSize: this.pageSize });
  }

  setPageSize(size: number) {
    this.pageSize = size;
  }

  getData(text:string = 'cart', offset: number = 0, pageSize: number = 2) {
    const params = {
      api_key: ApiService.giphyApiKey,
      q: text,
      limit: pageSize.toString(),
      offset: offset.toString(),
      rating: this.rating,
      lang: this.lang
    }; 
    return  this.http.get<GifSearchResult>(ApiService.giphyUrl, { params })
  }
}

