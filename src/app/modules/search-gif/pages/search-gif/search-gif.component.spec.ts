import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { BrowserModule, By } from '@angular/platform-browser'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router'; 
import { ApiService }  from "src/app/core/http/api/api.service";
import { RouterTestingModule } from "@angular/router/testing"; 
import { HttpEvent, HttpEventType } from '@angular/common/http';

import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';


import { SearchGifComponent } from './search-gif.component';

describe('SearchGifComponent', () => {

  let component: SearchGifComponent;
  let fixture: ComponentFixture<SearchGifComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchGifComponent ],
      imports: [ BrowserModule, FormsModule, RouterModule, RouterTestingModule, HttpClientModule, HttpClientTestingModule, ReactiveFormsModule ],
      providers: [ ApiService ],
    })
    .compileComponents().then(()=>{
      fixture = TestBed.createComponent(SearchGifComponent)
      component = fixture.componentInstance;

      de = fixture.debugElement.query(By.css('form'));
      el = de.nativeElement;
    });
  });

   
  it(`should have as title 'GIF SEARCH'`, () => {
    const fixture = TestBed.createComponent(SearchGifComponent);
    const app = fixture.debugElement.componentInstance;
    console.log(app)
    expect(app.title).toEqual('GIF SEARCH');
  });
 


  it('should call the searchText function', () => {
    fixture.detectChanges()
    spyOn(component, 'searchText')
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click()
    expect(component.searchText).toHaveBeenCalledTimes(1);
  });


  
  it(
    'should get gif',
    inject(
      [HttpTestingController, ApiService],
      (httpMock: HttpTestingController, dataService: ApiService) => {
        const mockGif = [
              {
                  "type": "gif",
                  "id": "tIeCLkB8geYtW",
                  "url": "https://giphy.com/gifs/shaun-the-sheep-movie-not-my-gif-2016-oscar-nominations-tIeCLkB8geYtW",
                  "slug": "shaun-the-sheep-movie-not-my-gif-2016-oscar-nominations-tIeCLkB8geYtW",
                  "bitly_gif_url": "http://gph.is/210z1RD",
                  "bitly_url": "http://gph.is/210z1RD",
                  "embed_url": "https://giphy.com/embed/tIeCLkB8geYtW",
                  "username": "",
                  "source": "http://fee-he-he-heenay.tumblr.com/post/139490721357/2016-oscars-nominations-saw-242016-animated",
                  "title": "Shaun The Sheep Movie Ok GIF",
                  "rating": "g",
                  "content_url": "",
                  "source_tld": "fee-he-he-heenay.tumblr.com",
                  "source_post_url": "http://fee-he-he-heenay.tumblr.com/post/139490721357/2016-oscars-nominations-saw-242016-animated",
                  "is_sticker": 0,
                  "import_datetime": "2016-02-26 23:03:07",
                  "trending_datetime": "2019-12-30 10:15:06",
                  "images": {
                      "original": {
                          "height": "315",
                          "width": "400",
                          "size": "1140732",
                          "url": "https://media2.giphy.com/media/tIeCLkB8geYtW/giphy.gif",
                          "mp4_size": "152522",
                          "mp4": "https://media2.giphy.com/media/tIeCLkB8geYtW/giphy.mp4",
                          "webp_size": "250912",
                          "webp": "https://media2.giphy.com/media/tIeCLkB8geYtW/giphy.webp",
                          "frames": "41",
                          "hash": "f2adea560e921b88da5fd29cea9195e3"
                      },
                      "downsized": {
                          "height": "315",
                          "width": "400",
                          "size": "1140732",
                          "url": "https://media2.giphy.com/media/tIeCLkB8geYtW/giphy.gif"
                      },
                      "downsized_large": {
                          "height": "315",
                          "width": "400",
                          "size": "1140732",
                          "url": "https://media2.giphy.com/media/tIeCLkB8geYtW/giphy.gif"
                      },
                      "downsized_medium": {
                          "height": "315",
                          "width": "400",
                          "size": "1140732",
                          "url": "https://media2.giphy.com/media/tIeCLkB8geYtW/giphy.gif"
                      },
                      "downsized_small": {
                          "height": "314",
                          "width": "400",
                          "mp4_size": "112372",
                          "mp4": "https://media2.giphy.com/media/tIeCLkB8geYtW/giphy-downsized-small.mp4"
                      },
                      "downsized_still": {
                          "height": "315",
                          "width": "400",
                          "size": "1140732",
                          "url": "https://media2.giphy.com/media/tIeCLkB8geYtW/giphy_s.gif"
                      },
                      "fixed_height": {
                          "height": "200",
                          "width": "254",
                          "size": "514874",
                          "url": "https://media2.giphy.com/media/tIeCLkB8geYtW/200.gif",
                          "mp4_size": "48467",
                          "mp4": "https://media2.giphy.com/media/tIeCLkB8geYtW/200.mp4",
                          "webp_size": "132088",
                          "webp": "https://media2.giphy.com/media/tIeCLkB8geYtW/200.webp"
                      },
                      "fixed_height_downsampled": {
                          "height": "200",
                          "width": "254",
                          "size": "101674",
                          "url": "https://media2.giphy.com/media/tIeCLkB8geYtW/200_d.gif",
                          "webp_size": "59432",
                          "webp": "https://media2.giphy.com/media/tIeCLkB8geYtW/200_d.webp"
                      },
                      "fixed_height_small": {
                          "height": "100",
                          "width": "127",
                          "size": "189646",
                          "url": "https://media2.giphy.com/media/tIeCLkB8geYtW/100.gif",
                          "mp4_size": "18598",
                          "mp4": "https://media2.giphy.com/media/tIeCLkB8geYtW/100.mp4",
                          "webp_size": "48598",
                          "webp": "https://media2.giphy.com/media/tIeCLkB8geYtW/100.webp"
                      },
                      "fixed_height_small_still": {
                          "height": "100",
                          "width": "127",
                          "size": "5760",
                          "url": "https://media2.giphy.com/media/tIeCLkB8geYtW/100_s.gif"
                      },
                      "fixed_height_still": {
                          "height": "200",
                          "width": "254",
                          "size": "19349",
                          "url": "https://media2.giphy.com/media/tIeCLkB8geYtW/200_s.gif"
                      },
                      "fixed_width": {
                          "height": "158",
                          "width": "200",
                          "size": "388636",
                          "url": "https://media2.giphy.com/media/tIeCLkB8geYtW/200w.gif",
                          "mp4_size": "32870",
                          "mp4": "https://media2.giphy.com/media/tIeCLkB8geYtW/200w.mp4",
                          "webp_size": "92920",
                          "webp": "https://media2.giphy.com/media/tIeCLkB8geYtW/200w.webp"
                      },
                      "fixed_width_downsampled": {
                          "height": "158",
                          "width": "200",
                          "size": "81213",
                          "url": "https://media2.giphy.com/media/tIeCLkB8geYtW/200w_d.gif",
                          "webp_size": "40290",
                          "webp": "https://media2.giphy.com/media/tIeCLkB8geYtW/200w_d.webp"
                      },
                      "fixed_width_small": {
                          "height": "79",
                          "width": "100",
                          "size": "130900",
                          "url": "https://media2.giphy.com/media/tIeCLkB8geYtW/100w.gif",
                          "mp4_size": "12910",
                          "mp4": "https://media2.giphy.com/media/tIeCLkB8geYtW/100w.mp4",
                          "webp_size": "36936",
                          "webp": "https://media2.giphy.com/media/tIeCLkB8geYtW/100w.webp"
                      },
                      "fixed_width_small_still": {
                          "height": "79",
                          "width": "100",
                          "size": "4382",
                          "url": "https://media2.giphy.com/media/tIeCLkB8geYtW/100w_s.gif"
                      },
                      "fixed_width_still": {
                          "height": "158",
                          "width": "200",
                          "size": "15387",
                          "url": "https://media2.giphy.com/media/tIeCLkB8geYtW/200w_s.gif"
                      },
                      "looping": {
                          "mp4_size": "1186261",
                          "mp4": "https://media2.giphy.com/media/tIeCLkB8geYtW/giphy-loop.mp4"
                      },
                      "original_still": {
                          "height": "315",
                          "width": "400",
                          "size": "64493",
                          "url": "https://media2.giphy.com/media/tIeCLkB8geYtW/giphy_s.gif"
                      },
                      "original_mp4": {
                          "height": "378",
                          "width": "480",
                          "mp4_size": "152522",
                          "mp4": "https://media2.giphy.com/media/tIeCLkB8geYtW/giphy.mp4"
                      },
                      "preview": {
                          "height": "208",
                          "width": "264",
                          "mp4_size": "28274",
                          "mp4": "https://media2.giphy.com/media/tIeCLkB8geYtW/giphy-preview.mp4"
                      },
                      "preview_gif": {
                          "height": "63",
                          "width": "80",
                          "size": "49692",
                          "url": "https://media2.giphy.com/media/tIeCLkB8geYtW/giphy-preview.gif"
                      },
                      "preview_webp": {
                          "height": "142",
                          "width": "180",
                          "size": "37964",
                          "url": "https://media2.giphy.com/media/tIeCLkB8geYtW/giphy-preview.webp"
                      },
                      "480w_still": {
                          "height": "378",
                          "width": "480",
                          "size": "1140732",
                          "url": "https://media2.giphy.com/media/tIeCLkB8geYtW/480w_s.jpg"
                      }
                  },
                  "analytics_response_payload": "e=Z2lmX2lkPXRJZUNMa0I4Z2VZdFcmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01NDQ0ODEyNmF5cTVkNjNqZ3lsZnkzNDM3dGU0OTI0cHRhMTlzM2h1Nzc5aXBubnUmY3Q9Zw",
                  "analytics": {
                      "onload": {
                          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXRJZUNMa0I4Z2VZdFcmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01NDQ0ODEyNmF5cTVkNjNqZ3lsZnkzNDM3dGU0OTI0cHRhMTlzM2h1Nzc5aXBubnUmY3Q9Zw&action_type=SEEN"
                      },
                      "onclick": {
                          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXRJZUNMa0I4Z2VZdFcmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01NDQ0ODEyNmF5cTVkNjNqZ3lsZnkzNDM3dGU0OTI0cHRhMTlzM2h1Nzc5aXBubnUmY3Q9Zw&action_type=CLICK"
                      },
                      "onsent": {
                          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXRJZUNMa0I4Z2VZdFcmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01NDQ0ODEyNmF5cTVkNjNqZ3lsZnkzNDM3dGU0OTI0cHRhMTlzM2h1Nzc5aXBubnUmY3Q9Zw&action_type=SENT"
                      }
                  }
              },
        ]

        dataService.getData().subscribe((event:any) => {
          switch (event.type) {
            case HttpEventType.Response:
              expect(event.body).toEqual(mockGif);
          }
        });
        const url = "https://api.giphy.com/v1/gifs/search?api_key=deokzgUjxm6QHQdp3H3aca1LSZcCpucc&q=cart&limit=2&offset=0&rating=G&lang=en"
        const mockReq = httpMock.expectOne(url);

        expect(mockReq.cancelled).toBeFalsy();
        expect(mockReq.request.responseType).toEqual('json');
        mockReq.flush(mockGif);

        httpMock.verify();
      }
    )
  );
 
});
