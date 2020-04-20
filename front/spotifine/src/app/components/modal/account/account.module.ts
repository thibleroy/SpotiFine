import {NgModule} from "@angular/core";
import {AccountComponent} from "./account.component";
import {IonicModule} from "@ionic/angular";
import {CommonModule} from "@angular/common";
import {ParameterModule} from "../../parameter/parameter.module";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        ParameterModule
    ],
    exports: [AccountComponent],
    declarations: [AccountComponent],
    providers: [],
})
export class AccountModule {
}