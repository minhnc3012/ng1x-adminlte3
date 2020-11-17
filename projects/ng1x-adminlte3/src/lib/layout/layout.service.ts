import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LayoutService {
  
  public fixHeightBehaviorSubject: BehaviorSubject<FixHeight> = new BehaviorSubject({ header: 0, footer: 0});
  private fixHeight: FixHeight;

  /**
   * @method constructor
   * @param routingService [description]
   */
  constructor() {}
}

export interface FixHeight {
  header?: number;
  footer?: number;
}