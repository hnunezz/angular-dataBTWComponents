import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from 'src/app/shared/models/team';
import { FilterService } from '../../services/filter.service';
import { TeamsService } from '../../services/teams.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    public teamName!: string;
    public teams$: Observable<Team[]>;
    /*`$` Convenção do Angular referente a boas práticas,
    Sinaliza que essa variavel é do tipo Observable*/

    //[CompontenteEmissor]="ComponenteDestino"

    constructor(
        private teamsService: TeamsService,
        private filterService: FilterService
    ) {
        this.teams$ = new Observable<Team[]>();
    }

    ngOnInit(): void {
        this.getTeams();
    }

    private getTeams(): void {
        this.teams$ = this.teamsService.getTeams();
        /*
        Requisão para a TeamService onde é retornado
        todos os itens da Interface no tipo Observable
        */
    }

    public updateFilter(): void {
        this.filterService.setFilteredTeams(this.teamName)
    }

}
