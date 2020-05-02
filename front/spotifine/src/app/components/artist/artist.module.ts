import {NgModule} from "@angular/core";
import {IonicModule} from "@ionic/angular";
import {CommonModule} from "@angular/common";
import {ArtistComponent} from "./artist.component";

@NgModule({
    imports: [
        IonicModule,
        CommonModule
    ],
    exports: [ArtistComponent],
    declarations: [ArtistComponent],
    providers: [],
})
export class ArtistModule {

}