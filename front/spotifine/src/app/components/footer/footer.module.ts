import {NgModule} from "@angular/core";
import {FooterComponent} from "./footer.component";
import {IonicModule} from "@ionic/angular";

@NgModule({
    imports: [
        IonicModule
    ],
    exports: [FooterComponent],
    declarations: [FooterComponent],
    providers: [],
})
export class FooterModule {
}