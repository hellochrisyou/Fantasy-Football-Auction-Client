import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CachingInterceptor } from './caching.interceptor';
import { HeaderInterceptor } from './header.interceptor';
import { ErrorInterceptor } from './error.interceptor';
import { LoggingInterceptor } from './logging.interceptor';

export const httpInterceptorProviders: any[] = [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true },
];

export * from './caching.interceptor';
export * from './logging.interceptor';
export * from './error.interceptor';
export * from './header.interceptor';
