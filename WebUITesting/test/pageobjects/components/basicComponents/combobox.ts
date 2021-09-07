export default class Combobox {
    private locator;
    private locatorForOptionsList;

    constructor(parentLocator, currentLocator, locatorForOptionsList) {
        this.locator = `${parentLocator} ${currentLocator}`;
        this.locatorForOptionsList = locatorForOptionsList;    
    }

    select(optionText) {
        $(this.locator).click();
        browser.pause(1000);
        //return $('this.locatorForOptionsList').click..selectByVisibleText(optionText);
        console.log('SELECT LOCATOR IS -> ');
        console.log(`${this.locatorForOptionsList} ul li[role="option"] span:nth-child(1)`);
        const listNames = $$(`${this.locatorForOptionsList} ul li[role="option"] span:nth-child(1)`);
        listNames.forEach(currentName => {
            if (currentName.getText() === optionText) return currentName.click();
        })
    }

    getValue() {
        //to be implemented
    }
}