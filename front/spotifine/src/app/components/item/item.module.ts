import {NgModule} from '@angular/core';
import {ItemComponent} from './item.component';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [
        IonicModule,
        CommonModule
    ],
    exports: [ItemComponent],
    declarations: [ItemComponent],
    entryComponents: [],
    providers: [],
})
export class ItemModule {
}