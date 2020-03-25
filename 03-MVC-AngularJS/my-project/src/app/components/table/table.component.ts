import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie'

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
    @Input() results: Array<Movie>;
    @Input() total: number;

    constructor() { }

    ngOnInit() { }
}