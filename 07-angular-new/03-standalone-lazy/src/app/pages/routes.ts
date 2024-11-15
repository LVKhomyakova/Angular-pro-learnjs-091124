import { Route } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";

export const pagesRoutes: Route[] = [
    {
        path: '',
        children: [
            {
                path: 'admin',
                component: AdminComponent,
            },
            {
                path: 'home',
                loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
            },
        ],
        providers: [
            {
                provide: 'token',
                useValue: 'Value in lazy'
            }
        ]
    }
]