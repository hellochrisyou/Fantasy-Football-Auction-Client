import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router';

import { AuthGuard } from '../guard/auth.guard';
import { AuthService } from '../service/auth.service';
describe('AuthGuard', () => {
  let service: AuthGuard;
  beforeEach(() => {
    const activatedRouteSnapshotStub = () => ({});
    const routerStub = () => ({ navigate: array => ({}) });
    const routerStateSnapshotStub = () => ({});
    const authServiceStub = () => ({ isAuthenticated: {} });
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        {
          provide: ActivatedRouteSnapshot,
          useFactory: activatedRouteSnapshotStub
        },
        { provide: Router, useFactory: routerStub },
        { provide: RouterStateSnapshot, useFactory: routerStateSnapshotStub },
        { provide: AuthService, useFactory: authServiceStub }
      ]
    });
    // tslint:disable-next-line: deprecation
    service = TestBed.get(AuthGuard);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
  describe('canActivate', () => {
    it('makes expected calls', () => {
      // tslint:disable-next-line: deprecation
      const activatedRouteSnapshotStub: ActivatedRouteSnapshot = TestBed.get(
        ActivatedRouteSnapshot
      );
      // tslint:disable-next-line: deprecation
      const routerStub: Router = TestBed.get(Router);
      // tslint:disable-next-line: deprecation
      const routerStateSnapshotStub: RouterStateSnapshot = TestBed.get(
        RouterStateSnapshot
      );
      spyOn(routerStub, 'navigate').and.callThrough();
      service.canActivate(activatedRouteSnapshotStub, routerStateSnapshotStub);
      expect(routerStub.navigate).toHaveBeenCalled();
    });
  });
});
