import DataGrid, { IColumn } from '../../../../components/dataGrid/index';
import BreadCrumb from '../../../../components/breadCrumb';

import Icon, { IconTypes } from '../../../../components/basicComponents/icon';
import Switcher from '../../../../components/basicComponents/switcher';
import Search from '../../../../components/search';

export default class PagesPageContent {
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