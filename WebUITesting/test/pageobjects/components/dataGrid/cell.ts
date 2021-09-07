export default class Cell {
    locator: string;
    constructor(rowNumber: number, columnNumber: number) {
        this.locator = `tbody tr:nth-child(${rowNumber}) td:nth-child(${columnNumber})`;
    }

    private get getOwnElement() {
        return $(this.locator);
    }

    get innerText() {
        return this.getOwnElement.getText();
    }

    clickOnIcon() {
        this.getOwnElement.$('.k-icon').click();
    }
}