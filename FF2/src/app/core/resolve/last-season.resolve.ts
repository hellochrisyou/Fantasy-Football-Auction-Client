import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { empty, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { TOKENS } from 'src/app/shared/const/api-key';
import { APIURL } from 'src/app/shared/const/url.const';
import { HttpService } from '../service/http.service';
import { LastSeasonStatService } from '../service/last-season-stat.service';

@Injectable({ providedIn: 'root' })
export class LastSeasonResolver implements Resolve<any> {

    private readonly AUCTIONURL = APIURL.NFLAUCTIONPLAYERS;
    private readonly APIKEY = TOKENS.APIKEY;

    constructor(
        private httpService: HttpService,
        private lastSeasonStatService: LastSeasonStatService,
    ) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        this.lastSeasonStatService.setLastSeasonQB();
        this.lastSeasonStatService.setLastSeasonRB();
        this.lastSeasonStatService.setLastSeasonWR();
        this.lastSeasonStatService.setLastSeasonTE();
        this.lastSeasonStatService.setLastSeasonDEF();
        this.lastSeasonStatService.setLastSeasonK();
        return this.httpService.get(this.AUCTIONURL + this.APIKEY).pipe(map(data => data.AuctionValues),
            catchError((error) => {
                console.log('error in resolve, http get: ', error);
                // tslint:disable-next-line: deprecation
                return empty;
            }));
    }
}
