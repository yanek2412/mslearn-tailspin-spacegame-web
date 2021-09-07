import DataGrid from '../../../../components/dataGrid/index';
import BreadCrumb from '../../../../components/breadCrumb';

export default class SettingsPageContent {
    dataGrid: DataGrid;
    breadCrumb: BreadCrumb;
    constructor() {
        this.dataGrid = new DataGrid('', null, null);
    }
}