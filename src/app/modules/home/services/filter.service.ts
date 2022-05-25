import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable()
export class FilterService {

    private _teamNameFilter: ReplaySubject<string>;
    /*ReplaySubject: responsável por armazenar o valor compartilhado.
    É ele quem retorna ou atualiza o valor da instância.*/

    constructor() {
        this._teamNameFilter = new ReplaySubject<string>(0); //Obrigatóriamente deve ser iniciado com um valor
    }

    public getFilteredTeams(): Observable<string> {
        return this._teamNameFilter.asObservable();
        //Método GET para retornar o nomes dos times da instância
    }

    public setFilteredTeams(teams: string): void {
        this._teamNameFilter.next(teams);
        ///Método SET para atualizar os nomes dos times da instância
    }
}
