import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AdultComponent } from './components/adult/adult.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { NurseryComponent } from './components/nursery/nursery.component';
import { SchoolComponent } from './components/school/school.component';
@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        AdultComponent,
        NurseryComponent,
        SchoolComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        ComponentsModule,
        ExamplesModule,
        NgImageSliderModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
