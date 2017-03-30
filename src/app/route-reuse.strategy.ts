import {DefaultRouteReuseStrategy} from '@angular/router/src/router';
import {ActivatedRouteSnapshot} from '@angular/router';

export class CustomRouteReuseStrategy extends DefaultRouteReuseStrategy {
  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    let name = future.component && (<any>future.component).name;
    return super.shouldReuseRoute(future, curr) && name !== 'DetailSameComponent';
  }
}
