import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Team } from 'src/app/shared/models/team';
import { FilterService } from '../../services/filter.service';

@Component({
    selector: 'app-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

    @Input() public allTeams: Team[] | null;//Popular o drop
    @Input() public teamIdBind!: string;

    @Output() public teamIdBindChange: EventEmitter<string>;

    /*
    ATENÇÃO
    Para que ocorra corretamente a ligação bidirecional
    O nome do Input (Entrada) e Output (Saida) devem ser Iguais.
    Ex. Input  - nome
        Output - nome'Change'
    */

    constructor(private filterService: FilterService) {
        this.teamIdBindChange = new EventEmitter<string>();
        this.allTeams = new Array<Team>();
    }

    ngOnInit(): void { }

    public emitNameFilter(): void {
        this.teamIdBindChange.emit(this.teamIdBind);
    }

    public updateFilter(): void {
        this.filterService.setFilteredTeams(this.teamIdBind);
    }
}

//Atualizar o drop para Multiselect
