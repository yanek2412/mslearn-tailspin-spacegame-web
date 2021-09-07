export default class Search {
    private locator = '#SearchArea';
    private innerFilters;

    private get textField() {
        return $(`${this.locator} #searchZone`);
    }

    private get searchButton() {
        return $(`${this.locator} .clickMe .k-i-search`);
    }

    makeSearch(searchString) {
        this.textField.setValue(searchString);
        this.searchButton.click();
    }
}