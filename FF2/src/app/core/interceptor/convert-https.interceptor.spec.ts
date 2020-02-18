import { TestBed } from '@angular/core/testing';
import { HttpHandler } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { EnsureHttpsInterceptor } from './convert-https.interceptor';
describe('EnsureHttpsInterceptor', () => {
  let service: EnsureHttpsInterceptor;
  beforeEach(() => {
    const httpHandlerStub = () => ({ handle: secureReq => ({}) });
    const httpRequestStub = () => ({
      clone: object => ({}),
      url: { replace: () => ({}) }
    });
    TestBed.configureTestingModule({
      providers: [
        EnsureHttpsInterceptor,
        { provide: HttpHandler, useFactory: httpHandlerStub },
        { provide: HttpRequest, useFactory: httpRequestStub }
      ]
    });
    service = TestBed.get(EnsureHttpsInterceptor);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
  describe('intercept', () => {
    it('makes expected calls', () => {
      // tslint:disable-next-line: deprecation
      const httpHandlerStub: HttpHandler = TestBed.get(HttpHandler);
      // tslint:disable-next-line: deprecation
      const httpRequestStub: HttpRequest<any> = TestBed.get(HttpRequest);
      spyOn(httpHandlerStub, 'handle').and.callThrough();
      spyOn(httpRequestStub, 'clone').and.callThrough();
      service.intercept(httpRequestStub, httpHandlerStub);
      expect(httpHandlerStub.handle).toHaveBeenCalled();
      expect(httpRequestStub.clone).toHaveBeenCalled();
    });
  });
});
