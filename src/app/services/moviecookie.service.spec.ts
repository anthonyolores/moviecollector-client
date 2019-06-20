import { TestBed } from '@angular/core/testing';

import { MoviecookieService } from './moviecookie.service';
import { CookieService } from 'ngx-cookie-service';

describe('MoviecookieService', () => {

  let service: MoviecookieService; 
  let ids_all = "1,2,3,4";
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoviecookieService, CookieService]
    });
    service = TestBed.get(MoviecookieService);
    service.addBulk(ids_all);
  });

  it('should be created', () => { 
    expect(MoviecookieService).toBeTruthy();
  });

  it('Save Ids', () => {
    expect(ids_all)
        .toEqual(service.getIds());
  });

  it('Id Exists', () => { 
    expect(service.exists("4"))
        .toBeTruthy();
  });

  it('Remove Exists Id', () => {
    service.remove("2");
    expect(service.getIds())
        .toEqual("1,3,4");
  });

  it('Remove Not Exist Id', () => {
    service.remove("5");
    expect(service.getIds())
        .toEqual(ids_all);
  });

  it('Add Id', () => {
    service.add("5");
    expect(service.getIds())
        .toEqual(ids_all + ",5");
  });

  it('Add Exists Id', () => { 
    service.add("4");
    expect(service.getIds())
        .toEqual(ids_all);
  });


});

