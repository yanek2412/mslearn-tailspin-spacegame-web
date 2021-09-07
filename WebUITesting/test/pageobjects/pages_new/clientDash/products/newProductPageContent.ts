import Combobox from '../../../components/basicComponents/combobox';
import Tagify from '../../../components/basicComponents/tagify';
import Search from '../../../components/search';
//import productsPagesContents from './index';
import BreadCrumb from '../../../components/breadCrumb';
import Switcher from '../../../components/basicComponents/switcher';

import { TextGroup, SelectGroup } from '../../../components/formGroupComponents/formGroupComponents';

export interface IProductInfo {
    name?: string;
    description?: string;
    defaultVariantSKU?: string;
    productActiveSwitcher?: boolean;
    defaultProductOffer?: string;
    otherProductOffers?: string[];
    productOptionsNames?: string[];
    productOptionsValues?: string[];
    fulfilmentCategory?: string;
    fulfilmentProvider?: string;
}

export default class NewProductPageContent {   
    breadcrumb = new BreadCrumb();   
    
    get name() {
        //return $("#textName");
        return new TextGroup('textName');
    }

    get description() {
        //return $("#textDescription");
        return new TextGroup('textDescription')
    }

    get defaultVariantSKU() {
        //return $("#defaultVariantSku");
        return new TextGroup('defaultVariantSku')
    }

    get productActiveSwitcher() {
        return $("");
    }

    get defaultProductOffer() {
        return new Tagify('', '.productOfferRow div:nth-child(1) tags');
    
    }

    get otherProductOffers() {
        return new Tagify('', '.productOfferRow div:nth-child(2) tags');
    }

    get productOptionsOptionName() {
        return $('.productOptionRow div:nth-child(1) input');
    }

    get productOptionsOptionValues() {
        return new Tagify('', '.productOptionRow div:nth-child(2) tags');
    }

    get addAnotherOption() {
        return $("");
    }

    get saveButton() {
        return $("#btnSave");
    }

    get fulfillmentCategory() {
        return new Combobox('','.fulfillmentCategory .k-select', '#fulfillmentCategory-list');
        //return new SelectGroup('.fulfillmentCategory .k-select', '#fulfillmentCategory-list');
    }

    get fulfillmentProvider() {
        return new Combobox('', '.fulfillmentProvider .k-select', '#fulfillmentProvider-list')
    }

    get active() {
        return new Switcher('', '');
    }

    setTestValues(productInfo: IProductInfo) {
        if (productInfo.name) this.name.setValue(productInfo.name)
    }

    private generateTestInfo() {
        const testInfo: IProductInfo = {
            name: "test" + Date.now(),
            description: "some text description",
            fulfilmentCategory: "Digital",
            fulfilmentProvider: "Spring of Life",
            defaultProductOffer: "1000.99",
            otherProductOffers: ["999.99", "499.99", "200.00"],
            productOptionsNames: ["color"],
            productOptionsValues: ["red", "gold", "silver", "blue"]            
        }
        return testInfo;
    }

    setMinimumTestInfo() {
        const fullTestInfo = this.generateTestInfo();
        const testInfo: IProductInfo = {
            name: fullTestInfo.name,
            description: fullTestInfo.description,
            fulfilmentCategory: fullTestInfo.fulfilmentCategory,
            fulfilmentProvider: fullTestInfo.fulfilmentProvider,
            defaultProductOffer: fullTestInfo.defaultProductOffer
        }

        this.name.setValue(testInfo.name);
        this.description.setValue(testInfo.description);
        this.fulfillmentCategory.select(testInfo.fulfilmentCategory);
        this.fulfillmentProvider.select(testInfo.fulfilmentProvider);
        this.defaultProductOffer.setTag(testInfo.defaultProductOffer);
        
        return testInfo;
    }

    setFullTestInfo() {
        const testInfo = this.generateTestInfo();
        this.name.setValue(testInfo.name);
        this.description.setValue(testInfo.description);
        this.fulfillmentCategory.select(testInfo.fulfilmentCategory);
        this.fulfillmentProvider.select(testInfo.fulfilmentProvider);
        this.defaultProductOffer.setTag(testInfo.defaultProductOffer);
        this.otherProductOffers.setTags(testInfo.otherProductOffers);
        this.productOptionsOptionName.setValue(testInfo.productOptionsNames[0]);
        this.productOptionsOptionValues.setTags(testInfo.productOptionsValues);
        return testInfo;        
    }
}