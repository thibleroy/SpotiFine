import {NgModule} from "@angular/core";
import {HeaderComponent} from "./header.component";
import {IonicModule} from "@ionic/angular";
import {CommonModule} from "@angular/common";
import {AccountModule} from "../modal/account/account.module";
import {AccountComponent} from "../modal/account/account.component";
import {StatusModule} from "../status/status.module";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        AccountModule,
        StatusModule
    ],
    exports: [HeaderComponent],
    declarations: [HeaderComponent],
    entryComponents: [AccountComponent],
    providers: [],
})
export class HeaderModule {
}