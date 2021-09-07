import BreadCrumb from '../../../../components/breadCrumb';


export interface ISettingsInfo {
    displayName?: string,
    description?: string,
    value?: string,
    help?: string
}

export default class SettingsEditPropertiesPage {
    readcrumb = new BreadCrumb();
    
    get name() {
        return $('#textDisplayName');
    }

    get description() {
        return $('#textDescription');
    }

    get value() {
        return $('#textValue');
    }

    get help() {
        return $('#textHelp');
    }

    get saveButton() {
        return $('#btnSaveEdits');
    }

    generateTestInfo() {
        const testInfo: ISettingsInfo = {
            displayName: "Test Setting" + Date.now(),
            description: "some test description",
            value: "111",
            help: "It's help for test setting"
        }
        return testInfo; 
    }

    fillTestInfo() {
        const testInfo = this.generateTestInfo();
        this.name.setValue(testInfo.displayName);
        this.description.setValue(testInfo.description);
        this.value.setValue(testInfo.value);
        this.help.setValue(testInfo.help);
    }
}