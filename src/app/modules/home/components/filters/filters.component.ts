import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

    @Input() public nameFilterBind!: string;

    @Output() public nameFilterBindChange: EventEmitter<string>;
    /*
    ATENÇÃO
    Para que ocorra corretamente a ligação bidirecional
    O nome do Input (Entrada) e Output (Saida) devem ser Iguais.
    Ex. Input  - nome
        Output - nome'Change'
    */

    constructor() {
        this.nameFilterBindChange = new EventEmitter<string>();
    }

    ngOnInit(): void {
    }

    public emitNameFilter(): void{
        this.nameFilterBindChange.emit(this.nameFilterBind);
    }

}
