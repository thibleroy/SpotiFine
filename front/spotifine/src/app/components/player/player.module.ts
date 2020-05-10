import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {PlayerComponent} from './player.component';
import {ItemModule} from '../item/item.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        ItemModule
    ],
    exports: [PlayerComponent],
    declarations: [PlayerComponent],
    providers: [],
})
export class PlayerModule {

}
