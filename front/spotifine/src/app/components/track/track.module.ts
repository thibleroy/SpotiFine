import {NgModule} from '@angular/core';
import {TrackComponent} from './track.component';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {ItemModule} from '../item/item.module';


@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        ItemModule
    ],
    exports: [TrackComponent],
    declarations: [TrackComponent],
    providers: [],
})
export class TrackModule {
}