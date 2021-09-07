export default class BreadCrumb {
    private currentLocator = "#breadCrumb";

    scrollIntoView() {
        this.getOwnElement().scrollIntoView();
    }

    getOwnElement() {
        return $(this.currentLocator);
    }

    goToHome() {
        this.scrollIntoView();
        const homeElement = $(`${this.currentLocator} a:nth-child(1) span`);
        homeElement.click();
        browser.pause(1000);
    }

    goByLink(linkText) {
        this.scrollIntoView();
        const linkElement = this.getOwnElement().$(`=${linkText}`);
        linkElement.click();
        browser.pause(1000);
    }

    goToPreviousPage() {
        this.scrollIntoView();
        const linkElement = this.getOwnElement().$('a:last-child');
        linkElement.click();
        browser.pause(1000);
    }

    getLastElementText() {
        const allTextElements = this.getOwnElement().getText().split('»');
        const lastElementText = allTextElements[allTextElements.length - 1].trim();
        return lastElementText;
    }

    getElementsCount() {
        const allTextElements = this.getOwnElement().getText().split('»');
        return allTextElements.length;
    }

}