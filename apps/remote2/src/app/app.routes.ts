import { Route, RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation'
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path: 'remote2',
        loadChildren: () => loadRemoteModule({
            remoteEntry: 'http://localhost:4202/remoteEntry.js',
            type: 'module',
            exposedModule: './Module',
        })
        .then( m => m.AbcModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}