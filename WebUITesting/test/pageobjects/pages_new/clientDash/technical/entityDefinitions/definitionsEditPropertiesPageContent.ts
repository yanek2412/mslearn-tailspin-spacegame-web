import BreadCrumb from '../../../../components/breadCrumb';
import DataGrid from '../../../../components/dataGrid/index';

interface IDefinitionProperty {
    name: string,
    value?: string,
    childItems: IDefinitionProperty[]
}

export interface IEntityDefinitions {
    name?: string,
    description?: string,
    properties?: IDefinitionProperty[]
}


function generateTestInfo() {
    const testInfo: IEntityDefinitions = {
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


export default class DefinitionsEditPropertiesPage {
    readcrumb = new BreadCrumb();
    dataGrid: DataGrid;
    dataGridColumns = ['Name', 'Value']
    constructor() {
        this.dataGrid = new DataGrid('', null, null);
    }

    get name() {
        return $('#textName');
    }

    get description() {
        return $('#textDescription')
    }

    /*
    get accessModifiers() {
        return ...
    }
    */

    get saveButton() {
        return $('#btnSave');
    }


    setMinimumTestInfo(): IEntityDefinitions {
        const testInfo: IEntityDefinitions = generateTestInfo();
        this.name.setValue(testInfo.name);
        this.description.setValue(testInfo.description);
        return testInfo;
    }

    setFullTestInfo(): IEntityDefinitions {
        const testInfo: IEntityDefinitions = generateTestInfo();
        this.name.setValue(testInfo.name);
        this.description.setValue(testInfo.description);
        testInfo.properties.forEach( property => {
            // add item in dataGrid
        })
        return testInfo;
    }
}