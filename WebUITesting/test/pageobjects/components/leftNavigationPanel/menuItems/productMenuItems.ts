import MenuItemInfo from './MenuItemInfo';

import ProductManagementPage from '../../../pages/products/productMgmt/ProductManagementPage';

import clientDashPagesContents from '../../../pages_new/clientDash/clientDashPageContents';

export class ProductsMgmt extends MenuItemInfo {
    constructor(parentLocator) {
        super(parentLocator, 'li.nav-item:nth-child(1)', clientDashPagesContents.products.productMgmtPageContent);
    }
    
}

/* Such functionality is not implemented yet on front-end side */
/*
export class Offers extends MenuItemInfo {
    constructor(parentLocator) {
        super(parentLocator, 'li.nav-item:nth-child(2)', ProductManagementPage);
    }
}

export class Orders extends MenuItemInfo {
    constructor(parentLocator) {
        super(parentLocator, 'li.nav-item:nth-child(3)', ProductManagementPage);
    }
}
*/

