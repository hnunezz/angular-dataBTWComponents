import { Component, Input, OnInit } from '@angular/core';
import { Team } from 'src/app/shared/models/team';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

    @Input() public teams: Team[] | null;
    //@Input - Utilizado no componente onde você deseja receber os valores do componente Pai (main.component)

    constructor() {
        this.teams = new Array<Team>();
    }

    ngOnInit(): void {
    }

}
