import BreadCrumb from '../../../../components/breadCrumb';
import DataGrid from '../../../../components/dataGrid/index';

interface IDefinedListProperty {
    name: string;
    value?: string;
    childItems: IDefinedListProperty[];
}


export interface IDefinedList {
    name?: string;
    description?: string;
    properties?: IDefinedListProperty[];
}

function generateTestInfo() {
    const testInfo: IDefinedList = {
        name: "test" + Date.now(),
        description: "test description",
        properties: [
            {
                name: "Property1",
                value: "1",
                childItems: []    
            },
            {
                name: "Property2",
                value: "2",
                childItems: []    
            },
            {
                name: "Property2",
                value: "",
                childItems: [
                    {
                        name: "Child Property1",
                        value: "1_1",
                        childItems: []
                    },
                    {
                        name: "Child Property2",
                        value: "1_2",
                        childItems: []
                    }
                ]    

            }
        ]
    }
    return testInfo;
}


export default class DefinedListEditPageContent {
    breadcrumb: BreadCrumb;
    dataGrid: DataGrid;


    constructor() {
        this.breadcrumb = new BreadCrumb();
        this.dataGrid = new DataGrid('', [])
    }

    get name() {
        return $('#textName');
    }

    get description() {
        return $('#textDescriptionDefinedList')
    }

    /*
    get accessModifiers() {
        return ...
    }
    */

    get saveButton() {
        return $('#btnSaveEdits');
    }

    setMinimumTestInfo(): IDefinedList {
        const testInfo: IDefinedList = generateTestInfo();
        this.name.setValue(testInfo.name);
        this.description.setValue(testInfo.description);
        return testInfo;
    }

    setFullTestInfo(): IDefinedList {
        const testInfo: IDefinedList = generateTestInfo();
        this.name.setValue(testInfo.name);
        this.description.setValue(testInfo.description);
        testInfo.properties.forEach( property => {
            // add item in dataGrid
        })
        return testInfo;
    } 
}