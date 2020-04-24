import {NgModule} from "@angular/core";
import {IonicModule} from "@ionic/angular";
import {CommonModule} from "@angular/common";
import {PlaylistsComponent} from "./playlists.component";
import {PlaylistModule} from "../playlist/playlist.module";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        PlaylistModule
    ],
    exports: [PlaylistsComponent],
    declarations: [PlaylistsComponent],
    providers: [],
})
export class PlaylistsModule {
}