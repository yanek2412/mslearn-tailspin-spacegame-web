import Combobox from '../../../../components/basicComponents/combobox';
import Tagify from '../../../../components/basicComponents/tagify';
import Search from '../../../../components/search';

import BreadCrumb from '../../../../components/breadCrumb';
import Switcher from '../../../../components/basicComponents/switcher';

import { TextGroup, SelectGroup } from '../../../../components/formGroupComponents/formGroupComponents';

interface ICMSSituationInfo {
    name?: string,
    description?: string,
    category?: string,
    situationProperties?: string[]
}

export default class NewAndEditSituationPageContent {
    breadcrumb = new BreadCrumb();
    search = new Search();
    get name() {
        return new TextGroup('textName')
    }

    get description() {
        return new TextGroup('textDescription');
    }

    get category() {
        return new Combobox('', 'cmsCategory_input', '#cmsCategory_listbox')
    }

    get tags() {
        return new Tagify('', '');
    }

    get hisotryButton() {
        return $('#btnHistory')
    }

    get duplicateButton() {
        return $('#btnDuplicate')
    }

    get saveButton() {
        return $('#btnSave');
    }

    private generateTestInfo() {
        const testInfo: ICMSSituationInfo = {
            name: `TestSituation${Date.now()}`,
            description: 'Some test description',
            category: 'Home',
            situationProperties: []
            }
        return testInfo;
    }

    setMinimumTestInfo() {
        const fullTestInfo = this.generateTestInfo();
        const testInfo: ICMSSituationInfo = {
            name: fullTestInfo.name,
            description: fullTestInfo.description
        }
        this.name.setValue(testInfo.name);
        this.description.setValue(testInfo.description);
        return testInfo;
    }
}