import Tagify from '../basicComponents/tagify';
import Badge from '../basicComponents/badge';
import ComboBox from '../basicComponents/combobox';
import Switcher from '../basicComponents/switcher';
import { isArray } from 'lodash';
import AbstractFormGroupComponent from './abstractFormGroupComponent';

export class TextGroup extends AbstractFormGroupComponent {
    constructor(parentLocator: string) {
        super(parentLocator);
    }

    getOwnElement() {
        return $(this.currentLocator).$('input, textarea')
    }

    getInnerText() {
        return this.getOwnElement().getText();
    }

    getValue() {
        return this.getOwnElement().getValue();
    }

    getValues() {
        return [this.getValue()];
    }

    setValue(value) {
        this.getOwnElement().setValue(value);
    }

    setValues(values) {
        if (isArray) this.getOwnElement().setValue(values[0])
        else this.getOwnElement().setValue(values);
    }
}

export class SelectGroup extends AbstractFormGroupComponent {
    private itemsLocator: string;
    constructor(parentLocator: string, itemsLocator: string) {
        super(parentLocator);
        this.itemsLocator = itemsLocator;

    }

    getOwnElement() {
        return new ComboBox(this.currentLocator, 'input', this.itemsLocator);
    }

    getInnerText() {
        return '';
    }

    getValue() {
        return this.getOwnElement().getValue();
    }

    getValues() {
        return [this.getValue()];
    }

    setValue(value: string) {
        this.getOwnElement().select(value);
    }

    setValues(values: string[]) {
        this.getOwnElement().select(values[0]);
    }
}
/*
export class TagifyGroup extends AbstractFormGroupComponent {
    constructor(parentLocator: string) {
        super(parentLocator)
    }

    getOwnElement() {
        return new Tagify()
    }
}
/*
export class SwitchGroup extends AbstractFormGroupComponent {
    constructor(parentLocator:) {
        super(parentLocator)
    }

    getOwnElement() {
        return new Switcher();
    }
}
*/

/*
export class RadioGroup extends AbstractFormGroupComponent {
    constructor(parentLocator: string) {
        super(parentLocator);
    }

    
}
*/
