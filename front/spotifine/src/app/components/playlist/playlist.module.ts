import {NgModule} from "@angular/core";
import {IonicModule} from "@ionic/angular";
import {CommonModule} from "@angular/common";
import {PlaylistComponent} from "./playlist.component";

@NgModule({
    imports: [
        IonicModule,
        CommonModule
    ],
    exports: [PlaylistComponent],
    declarations: [PlaylistComponent],
    providers: [],
})
export class PlaylistModule {

}