export default class Pagination {
    private currentLocator: string;
    
    constructor(parentLocator) {
        this.currentLocator = `${parentLocator} .k-grid-pager`;
    }

    getOwnElement() {
        return $(this.currentLocator);
    }

    navigateToNextPage() {

    }

    navigateToPreviousPage() {

    }

    navigateToFirstPage() {

    }

    navigateToLastPage() {

    }

    refresh() {

    }
}