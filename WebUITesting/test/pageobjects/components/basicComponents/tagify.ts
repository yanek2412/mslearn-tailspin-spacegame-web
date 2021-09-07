export default class Tagify {
    private locator: string;
    constructor(parentLocator, currentLocator) {
        this.locator = `${parentLocator} ${currentLocator}`
    }

    setTag(tag:string) {
        $(this.locator).click();
        const tagCharsArray = tag.split('');
        browser.keys([...tagCharsArray,'\t']);
    }

    getTag(): string {
        return "";
    }

    setTags(tagsArray: string[]) {
        tagsArray.forEach((tag) => {
            this.setTag(tag);
        })
    };

    getTags(): string[] {
        return [];
    }


}