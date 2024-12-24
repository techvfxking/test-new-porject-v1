import { Routes } from "@angular/router";
import { ListComponent } from "./list/list.component";
import { AddComponent } from "./add/add.component";

const test_module_routes: Routes = [
    {
        path: '',
        component: ListComponent
    },
    {
        path: 'add',
        component: AddComponent
    }
]

export default test_module_routes;