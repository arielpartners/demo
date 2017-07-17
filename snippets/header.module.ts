import {NgModule} from '@angular/core';
import {HeaderComponent} from './header.component';
import {CommonModule} from '@angular/common';
import {MenuModule} from '../menu/menu.module';
import {BadgeModule} from '../badge/badge.module';
import {ListModule} from '../list/list.module';
import {RouterModule} from '@angular/router';
import {IconModule} from '../icon/icon.module';

@NgModule({
    declarations: [HeaderComponent],
    imports: [
        CommonModule,
        MenuModule,
        IconModule,
        BadgeModule,
        ListModule,
        RouterModule
    ],
    exports: [HeaderComponent]
})

export class HeaderModule { }
