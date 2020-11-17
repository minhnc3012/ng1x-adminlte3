import { InjectionToken } from '@angular/core';
import { Ng1xLTE3LayoutStore } from './layout.store';
import { Ng1xLTE3LayoutConfig } from './layout.config';

/**
 * [InjectionToken description]
 */
export const AdminLTE3ConfigToken = new InjectionToken('layoutConfig');

/**
 * [layoutStoreFactory description]
 */
export function ng1xLTE3LayoutStoreFactory(layoutConfig: Ng1xLTE3LayoutConfig): Ng1xLTE3LayoutStore {
    return new Ng1xLTE3LayoutStore(layoutConfig);
}

/**
 * [layoutProvider description]
 */
export function ng1xLTE3LayoutProvider(layoutConfig: Ng1xLTE3LayoutConfig) {
    return [{
        provide: Ng1xLTE3LayoutStore,
        useFactory: ng1xLTE3LayoutStoreFactory,
        deps: [AdminLTE3ConfigToken]
    }, {
            provide: AdminLTE3ConfigToken,
            useValue: layoutConfig
    }
    ];
}
