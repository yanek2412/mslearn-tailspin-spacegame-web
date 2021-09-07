import Combobox from '../../../../components/basicComponents/combobox';
import Tagify from '../../../../components/basicComponents/tagify';
import Search from '../../../../components/search';

import BreadCrumb from '../../../../components/breadCrumb';
import Switcher from '../../../../components/basicComponents/switcher';

import { TextGroup, SelectGroup } from '../../../../components/formGroupComponents/formGroupComponents';

interface ICMSLayoutInfo {
    name?: string,
    description?: string,
    category?: string,
    parentLayout?: string,
    SituationDefinition?: string,
    published?: boolean,
    archived?: boolean,
    tags?: string[]
    pageAttributes?: string[]
}

export default class NewAndEditLayoutPageContent {
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

    get parentLayout() {
        return new Combobox('', '', '');
    }

    get situationDefinition() {
        return new Combobox('', '', '');
    }

    get tags() {
        return new Tagify('', '');
    }

    get previewButton() {
        return $('#btnPreview');
    }

    get hisotryButton() {
        return $('#btnHistory')
    }

    get duplicateButton() {
        return $('#btnDuplicate')
    }

    get speedButton() {
        return $('#btnSpeed')
    }

    get openButton() {
        return $('#btnOpen'); 
    }

    get copyUrlButton() {
        return $('#btnCopyUrl')
    }

    get saveButton() {
        return $('#btnSave');
    }

    private generateTestInfo() {
        const testInfo: ICMSLayoutInfo = {
            name: `TestLayout${Date.now()}`,
            description: 'Some test description',
            category: 'Home',
            parentLayout: 'Public Page Layout',
            SituationDefinition: 'Base Page Situation Definition',
            pageAttributes: []
        }
        return testInfo;
    }

    setMinimumTestInfo() {
        const fullTestInfo = this.generateTestInfo();
        const testInfo: ICMSLayoutInfo = {
            name: fullTestInfo.name,
            description: fullTestInfo.description
        }
        this.name.setValue(testInfo.name);
        this.description.setValue(testInfo.description);
        return testInfo;
    }
}