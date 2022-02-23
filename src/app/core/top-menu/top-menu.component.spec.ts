import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMenuComponent } from './top-menu.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { RouterTestingModule } from "@angular/router/testing";

 
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
 

describe('TopMenuComponent', () => {
  let component: TopMenuComponent;
  let fixture: ComponentFixture<TopMenuComponent>;

  const fakeActivatedRoute = {
    snapshot: { data: {} }
  } as ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopMenuComponent ],
      imports: [RouterTestingModule], 
       providers: [ {provide: ActivatedRoute, useValue: fakeActivatedRoute}, NgbModal ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
