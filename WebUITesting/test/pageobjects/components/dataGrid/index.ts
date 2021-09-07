import Header from './header';
import Pagination from './pagination';
import ResultsData from './resultsData';
import Cell from './cell';

import Icon from '../basicComponents/icon';
import Switcher from '../basicComponents/switcher';
import Tagify from '../basicComponents/tagify'

export interface IChildElement {
    name? : string,
    instance: Icon | Switcher | Tagify
}

export interface IColumn {
    name: string,
    childElements?: IChildElement[]
}

export class Row {
    currentLocator: string;
    columns: IColumn[]
    constructor(parentLocator, rowNumber, columns: IColumn[]) {
        this.currentLocator = `${parentLocator} tbody tr:nth-child(${rowNumber}) `
        this.columns = columns;
    }
}

export default class DataGrid {
    currentLocator: string;
    header: Header;
    pagination: Pagination;
    resultsData: ResultsData;
    private columns: IColumn[]
    

    constructor(parentLocator:string, columns: IColumn[], columnsContent?: Object) {
        this.currentLocator = parentLocator ? `${parentLocator} #divResults`: '#divResults';
        this.header = new Header(this.currentLocator);    
        this.columns = columns;
    
    }

    getOwnElement() {
        return $(this.currentLocator);
    }

    private getColumnNumberByColumnName(columnName) {
        return this.columns.indexOf(columnName);
    }

    getRowByNumber(rowNumber:number) {
        //if (this.columnsContent) return new this.columnsContent(`${this.currentLocator} tbody tr:nth-child(${rowNumber})`);        
        return $(`${this.currentLocator} tbody tr:nth-child(${rowNumber})`);
    }

    private getCellNumberByName(columnName: string) {
        let result;
        this.columns.forEach((column, i) => {
            if (column.name.toUpperCase() === columnName.toUpperCase()) result = i;
        })
        return result;
    }

    getCell(rowNumber: number, columnName: string) {
        const columnNumber = this.getCellNumberByName(columnName);
        return new Cell(rowNumber, columnNumber + 1);
    }

    getCellText(rowNumber: number, columnName: string) {
        const cell = this.getCell(rowNumber, columnName);
        const text = cell.innerText;
        return text;
    }


    /* not sure that we need this method
    getRowByColumnValue(columnName: string, columnValue:string) {

    }
    */
    
}