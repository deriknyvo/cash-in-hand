import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectMenuService {

  public menuSelected = new Subject();

  public selectMenu(menu: any) {
    this.menuSelected.next(menu);
  }
}
