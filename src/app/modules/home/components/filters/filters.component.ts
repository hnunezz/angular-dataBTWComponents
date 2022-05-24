import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

    @Input() public nameFilterBind!: string;

    @Output() public nameFilterChange: EventEmitter<string>;

    constructor() {
        this.nameFilterChange = new EventEmitter<string>();
    }

    ngOnInit(): void {
    }

    public emitNameFilter(): void{
        this.nameFilterChange.emit(this.nameFilterBind);
    }

}
