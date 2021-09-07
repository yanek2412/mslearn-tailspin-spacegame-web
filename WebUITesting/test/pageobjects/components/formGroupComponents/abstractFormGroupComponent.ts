export default abstract class AbstractFormGroupComponent {
    protected currentLocator: string;
    
    constructor(formGroupFieldId: string) {
        this.currentLocator = `//*[@id="${formGroupFieldId}"]/..`;
        //this.currentLocator = formGroupFieldLocator;        
    }

    abstract getOwnElement() 

    abstract getInnerText();
    
    abstract getValue();
    
    abstract getValues();

    abstract setValue(value);

    abstract setValues(values);    
    
    private get validatorElement() {
        const allValidatorElements = $(this.currentLocator).$$('.invalidMessage span');
        const displayedElements = allValidatorElements.filter(validatorElement => {
            if (validatorElement.isDisplayed()) return validatorElement;
        });
        return displayedElements[0];
    }

    isValidatorVisiable() {
        return this.validatorElement.isDisplayed();
    }

    get validatorMessage() {
        return this.validatorElement.getText();
    }

    get labelElement() {
        return $(this.currentLocator).parentElement().$('label');
    }

    get labelText() {
        return this.labelElement.getText();
    }

    scrollIntoView() {
        this.labelElement.scrollIntoView();
        browser.pause(500);
    }
}
