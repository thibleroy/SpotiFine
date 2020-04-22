import {NgModule} from "@angular/core";
import {StatusComponent} from "./status.component";
import {IonicModule} from "@ionic/angular";
import {CommonModule} from "@angular/common";


@NgModule({
    imports: [
        IonicModule,
        CommonModule
    ],
    exports: [StatusComponent],
    declarations: [StatusComponent],
    providers: [],
})
export class StatusModule {
}