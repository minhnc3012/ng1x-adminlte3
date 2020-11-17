import {
    Component,
    OnInit,
    AfterViewInit,
    ViewChild,
    Output,
    EventEmitter
} from '@angular/core';

@Component({
    selector: 'mn-ng1xlte3-layout-control-sidebar',
    templateUrl: './control-sidebar.component.html',
    styleUrls: ['./control-sidebar.component.scss']
})
export class Ng1xLTE3ControlSidebarComponent implements OnInit, AfterViewInit {

    @ViewChild('controlSidebar', { static: false }) controlSidebar;
    @Output() controlSidebarHeight: EventEmitter<any> = new EventEmitter<any>();

    constructor() { }

    ngOnInit() {}

    ngAfterViewInit() {
        this.controlSidebarHeight.emit(this.controlSidebar.nativeElement.offsetHeight);
    }
}
