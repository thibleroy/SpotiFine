import {NgModule} from "@angular/core";
import {IonicModule} from "@ionic/angular";
import {CommonModule} from "@angular/common";
import {ArtistComponent} from "./artist.component";
import {ItemModule} from "../item/item.module";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        ItemModule
    ],
    exports: [ArtistComponent],
    declarations: [ArtistComponent],
    providers: [],
})
export class ArtistModule {

}