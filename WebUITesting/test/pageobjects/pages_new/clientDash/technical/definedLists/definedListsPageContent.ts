import DataGrid from '../../../../components/dataGrid/index';
import BreadCrumb from '../../../../components/breadCrumb';
import Search from '../../../../components/search';

export default class DefinedListsPageContent {
    dataGrid: DataGrid;
    breadCrumb: BreadCrumb;
    search: Search;
    constructor() {
        this.dataGrid = new DataGrid('', null, null);
        this.search = new Search();
    }
}