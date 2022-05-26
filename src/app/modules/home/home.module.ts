import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MainComponent } from './components/main/main.component';
import { TeamsService } from './services/teams.service';
import { HttpClientModule } from '@angular/common/http';
import { FiltersComponent } from './components/filters/filters.component';
import { ListComponent } from './components/list/list.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { FilterService } from './services/filter.service';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
    declarations: [
        MainComponent,
        FiltersComponent,
        ListComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        HttpClientModule,
        MatInputModule,
        FormsModule,
        MatSelectModule
    ],
    providers: [
        TeamsService,
        FilterService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
