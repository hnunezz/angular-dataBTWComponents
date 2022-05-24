import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from 'src/app/shared/models/team';

@Injectable()
export class TeamsService {

    public readonly teamsUrl = 'assets/response/backend-classification.json'; //URL para chamar o mock JSON

    constructor(
        private httpClient: HttpClient
    ) { }

    public getTeams(): Observable<Team[]> {
        return this.httpClient.get(this.teamsUrl) as Observable<Team[]>;
        /*
            Chamada do tipo GET;
            Retorna um Observable do tipo Team[](Interface do mock JSON)
        */
    }
}
