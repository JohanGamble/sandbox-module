import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MenuItem } from '../models/menu-item-module';

@Injectable()
export class NotificationService {
    // Notify menu items of css class change
    private notifySubscribers = new Subject<MenuItem[]>();

    announcementStatus$ = this.notifySubscribers.asObservable();

    announcementMade(value: MenuItem[]): void {
        this.notifySubscribers.next(value);
    }
}