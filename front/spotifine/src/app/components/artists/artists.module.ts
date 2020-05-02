import {NgModule} from "@angular/core";
import {IonicModule} from "@ionic/angular";
import {CommonModule} from "@angular/common";
import {ArtistsComponent} from "./artists.component";
import {ArtistModule} from '../artist/artist.module'
@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        ArtistModule
    ],
    exports: [ArtistsComponent],
    declarations: [ArtistsComponent],
    providers: [],
})
export class ArtistsModule {

}