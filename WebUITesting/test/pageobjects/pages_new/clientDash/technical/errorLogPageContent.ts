import DataGrid from '../../../components/dataGrid/index';
import BreadCrumb from '../../../components/breadCrumb';

export default class ErrorLogPageContent {
    dataGrid: DataGrid;
    breadCrumb: BreadCrumb;
    constructor() {
        this.dataGrid = new DataGrid('');
    }
}