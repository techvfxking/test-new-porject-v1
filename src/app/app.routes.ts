import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'test_mdoule',
        loadChildren: () => import("./pages/test_module/test.routes").then(x => x.default)
    }
];
