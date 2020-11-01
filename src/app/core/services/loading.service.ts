import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Injectable()
export class LoadingService {
  private active = new BehaviorSubject<boolean>(false);
  public active$ = this.active.asObservable().pipe(distinctUntilChanged(), debounceTime(500));

  constructor (
  ) {}

  toggle(): void {
    this.setActive(!this.active.getValue());
  }

  show(): void {
    this.setActive(true);
  }

  hide(): void {
    this.setActive(false);
  }

  setActive(value: boolean): void {
    this.nextActive(value);
  }

  private nextActive(value: boolean): void {
    this.active.next(value)
  }

}
