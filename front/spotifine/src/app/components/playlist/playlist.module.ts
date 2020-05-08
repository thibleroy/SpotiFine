import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {PlaylistComponent} from './playlist.component';
import {ItemModule} from '../item/item.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        ItemModule
    ],
    exports: [PlaylistComponent],
    declarations: [PlaylistComponent],
    providers: [],
})
export class PlaylistModule {

}
