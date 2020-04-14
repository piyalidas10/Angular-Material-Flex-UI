import { Routes, RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './core/material.module';
import { GridComponent } from './grid/grid.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
    // { path: '', redirectTo: 'grids', pathMatch: 'full' },
    {
        path: '',
        component: GridComponent
    },
    {
        path: 'form',
        component: FormComponent
    }
];

@NgModule({
    declarations: [
        GridComponent,
        FormComponent
    ],
    imports: [
        FlexLayoutModule,
        MaterialModule,
        RouterModule.forRoot(routes)
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [
        RouterModule
    ]
})

export class AppRouting {}
