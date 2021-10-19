import { Injectable } from "@angular/core";

import { ModuleItem } from "../models/setting-module";
import { CSSClass } from "../extern-processes/menu-item-selection";

import { MenuItem } from "../models/menu-item-module";
import { GeneralInfoComponent } from "../components/settings/general-info/general-info.component";
import { TeamInfoComponent } from "../components/settings/team-info/team-info.component";

@Injectable()
export class MenuItemViewService {
    getMenuItemInformation(): MenuItem[] {
        return [
            new MenuItem(1, "Data Table Component", CSSClass.MODULE_CLOSE, "/datatable"),
            new MenuItem(2, "Settings Component", CSSClass.MODULE_CLOSE, "/settings")
        ]
    }
}

@Injectable()
export class TabViewService {

    getTabInformation(): ModuleItem[] {
        return [
            new ModuleItem(GeneralInfoComponent,
                {
                    title: "General Info",
                    tabNumber: 0,
                    header: {
                        style: {},
                    },
                    data: []
                }),
            new ModuleItem(TeamInfoComponent,
                {
                    title: "Team",
                    tabNumber: 1,
                    header: {
                        style: {}
                    },
                    data: { name: "two" }
                }),

        ];
    }
}
