import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MenuItem } from '../models/menu-item-module';

@Injectable()
export class NavigationNotificationService {
    private navigationURLChange: string = "";
    constructor(private router: Router) {
        this.router.events.subscribe((ev: any) => {
            if (ev instanceof NavigationEnd) {
                this.navigationURLChange = ev.url;
            }
        })
    }
    changeOfRoute(mi: MenuItem): boolean {
        if (mi.componentLink === this.navigationURLChange) {
            return true;
        }
        return false
    }
}
