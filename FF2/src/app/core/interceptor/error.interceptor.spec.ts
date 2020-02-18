import { TestBed } from '@angular/core/testing';
import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { ErrorInterceptor } from './error.interceptor';
describe('ErrorInterceptor', () => {
  let service: ErrorInterceptor;
  beforeEach(() => {
    const httpRequestStub = () => ({ url: { includes: () => ({}) } });
    const httpHandlerStub = () => ({ handle: req => ({ pipe: () => ({}) }) });
    TestBed.configureTestingModule({
      providers: [
        ErrorInterceptor,
        { provide: HttpRequest, useFactory: httpRequestStub },
        { provide: HttpHandler, useFactory: httpHandlerStub }
      ]
    });
    service = TestBed.get(ErrorInterceptor);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
  describe('intercept', () => {
    it('makes expected calls', () => {
      // tslint:disable-next-line: deprecation
      const httpRequestStub: HttpRequest<any> = TestBed.get(HttpRequest);
      // tslint:disable-next-line: deprecation
      const httpHandlerStub: HttpHandler = TestBed.get(HttpHandler);
      spyOn(httpHandlerStub, 'handle').and.callThrough();
      service.intercept(httpRequestStub, httpHandlerStub);
      expect(httpHandlerStub.handle).toHaveBeenCalled();
    });
  });
});
