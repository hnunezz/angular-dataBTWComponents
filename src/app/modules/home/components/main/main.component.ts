import { Component, OnInit } from '@angular/core';
import { lastValueFrom, Observable, Subscription } from 'rxjs';
import { Team } from 'src/app/shared/models/team';
import { FilterService } from '../../services/filter.service';
import { TeamsService } from '../../services/teams.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    public teamName!: string;//Propriedade que recebe o valor do filtro.
    public teams: Team[];
    /*`$` Convenção do Angular referente a boas práticas,
    Sinaliza que essa variavel é do tipo Observable*/

    //[CompontenteEmissor]="ComponenteDestino"

    public filteredTeams: Array<Team>;
    private teamsFilterSubscription: Subscription;

    constructor(
        private teamsService: TeamsService,
        private filterService: FilterService
    ) {
        this.teams = new Array<Team>();
        this.filteredTeams = new Array<Team>();
        this.teamsFilterSubscription = new Subscription();
    }

    public async ngOnInit(): Promise<void> {
        await this.getTeams();
        this.initSubscription();
    }

    private async getTeams(): Promise<void> {
        const response = await lastValueFrom(this.teamsService.getTeams()) as Array<Team>;
        //LastValueFrom => toPromise()

        if (response) {
            this.teams = response; // Teams: Variavel que retornar o time filtrado
            this.filteredTeams = this.teams; // FilteredTeams: Variavel responsável a popular a lista
        }
        /*Requisão para a TeamService*/
    }

    private initSubscription(): void {
        this.teamsFilterSubscription = this.filterService.getFilteredTeams().subscribe((filterValue: string) => {
            if (filterValue == null) { //Caso o value venha Null (Option '--') filtra todos os times novamente.
                this.filteredTeams = this.teams
            } else { //Caso contrário a filtragem é feita.
                this.filteredTeams = this.teams.filter(x => x.team.team_id.toString() == filterValue)
                /*Propriedade teams(Lista de times) é comparada com váriavel local filterValue(idTeam)
                E atribui a filtereTeams o time atual.
                */
            }
        })
    }
}
