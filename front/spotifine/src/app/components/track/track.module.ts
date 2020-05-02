import {NgModule} from "@angular/core";
import {TrackComponent} from "./track.component";
import {IonicModule} from "@ionic/angular";
import {CommonModule} from "@angular/common";


@NgModule({
    imports: [
        IonicModule,
        CommonModule
    ],
    exports: [TrackComponent],
    declarations: [TrackComponent],
    providers: [],
})
export class TrackModule {
}