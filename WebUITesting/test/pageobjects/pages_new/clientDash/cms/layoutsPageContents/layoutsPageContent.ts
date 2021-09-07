import DataGrid, { IColumn } from '../../../../components/dataGrid/index';
import BreadCrumb from '../../../../components/breadCrumb';
import Search from '../../../../components/search';
import Icon, { IconTypes } from '../../../../components/basicComponents/icon';

export default class LayoutsPageContent {
    dataGrid: DataGrid;
    breadCrumb: BreadCrumb;
    search: Search;    


    constructor() {
        const columns : IColumn[]= [
            {name: 'Edit', childElements: [ {instance: new Icon('', IconTypes.gear)} ]},
            {name: 'Name'},
            {name: 'Description'},
            {name: 'Status'},
            {name: 'Last Modified'},
            {name: 'Preview'},
            {name: 'Archive'},
            {name: 'Delete'}
        ]
    
        this.dataGrid = new DataGrid('', columns);
        this.search = new Search();
    }
}