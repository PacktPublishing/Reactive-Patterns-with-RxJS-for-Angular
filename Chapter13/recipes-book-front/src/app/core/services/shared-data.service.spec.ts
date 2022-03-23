import { TestBed } from '@angular/core/testing';
import { toArray } from 'rxjs/operators';
import { TestScheduler } from 'rxjs/testing';
import { SharedDataService } from './shared-data.service';

describe('SharedDataService', () => {
  let service: SharedDataService;

  beforeEach(() => {
    service = TestBed.inject(SharedDataService);
  });

  it('should return true as a value', () => {
    service.getValue(false).subscribe(
      (result) => expect(result).toBe(true))
  });

  it('should return values in the right order', (done) => {
    const expectedValues = ['Hello', 'Packt', 'Readers'];
    let index = 0;
    service.getValues().subscribe(result => {
      expect(result).toBe(expectedValues[index]);
      index++;
      done();
    });
  });

  it('should return values in the right order', (done) => {
    const expectedValues = ['Hello', 'Packt', 'Readers'];
    service.getValues().pipe(toArray()).subscribe(result => {
      expect(result).toEqual(expectedValues);
      done();
    });
  });
});

describe('SampleService marble tests', () => {
let scheduler : TestScheduler ;
let service: SharedDataService;

beforeEach(() => {
  service = TestBed.inject(SharedDataService);
  scheduler = new TestScheduler((actual, expected) => {
  expect(actual).toEqual(expected);
});
});

it('should return values in the right order', () => {
  scheduler.run(({expectObservable}) => {
   const expectedMarble = '(abc|)' ;
   const expectedValues = {a:'Hello', b:'Packt', c:'Readers'};
   expectObservable(service.getValues()).toBe(expectedMarble, expectedValues)
  });
});

it('should return values in the right time', () => {
  scheduler.run(({expectObservable}) => {
   const expectedMarble = '(abc) 4995ms (abc) 4995ms (abc|)' ;
   const expectedValues = {a:'Hello', b:'Packt', c:'Readers'};
   expectObservable(service.getRecurrentValues()).toBe(expectedMarble, expectedValues)
  });
});


});