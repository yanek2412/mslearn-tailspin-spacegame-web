import DataGrid, { IColumn } from '../../../components/dataGrid/index';
import BreadCrumb from '../../../components/breadCrumb';
import Search from '../../../components/search';

import Icon, { IconTypes } from '../../../components/basicComponents/icon';
import Switcher from '../../../components/basicComponents/switcher';

export default class ProducctMgmtPageContent {
    dataGrid: DataGrid;
    breadCrumb: BreadCrumb;
    search: Search;
    constructor() {
        const columns : IColumn[]= [
            {name: 'Edit Product', childElements: [ {instance: new Icon('', IconTypes.gear)} ]},
            {name: 'Name'},
            {name: 'Description'},
            {name: 'Product Active', childElements: [{instance: new Switcher('', '')}]},
            {name: 'Fulfillment Category'},
            {name: 'Fulfillment Provider'},
            {name: 'History Changes', childElements: [{instance: new Icon('', IconTypes.clock)}]},
            {name: 'Delete the Product', childElements: [
                {name: 'delete', instance: new Icon('', IconTypes.delete)},
                {name: 'restore', instance: new Icon('', IconTypes.restore)}
            ]}

        ]
        
        this.dataGrid = new DataGrid('', columns);
        this.search = new Search();
        this.breadCrumb = new BreadCrumb();
    }   
}