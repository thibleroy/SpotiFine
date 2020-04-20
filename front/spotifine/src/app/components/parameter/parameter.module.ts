import {NgModule} from "@angular/core";
import {IonicModule} from "@ionic/angular";
import {CommonModule} from "@angular/common";
import {ParameterComponent} from "./parameter.component";

@NgModule({
    imports: [
        IonicModule,
        CommonModule
    ],
    exports: [ParameterComponent],
    declarations: [ParameterComponent],
    providers: [],
})
export class ParameterModule {
}