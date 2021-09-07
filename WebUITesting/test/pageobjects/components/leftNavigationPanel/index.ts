import * as _ from 'lodash';
import CollapsedLeftNavigationPanel from './collapsedLeftNavigationPanel';
import ExpandedLeftNavigationPanel from './expandedLeftNavigationPanel';

import * as ProductItems from './menuItems/productMenuItems';
import * as TechnicalItems from './menuItems/technicalMenuItems';
import * as CMSItems from './menuItems/cmsMenuItems';

//import pages from '../../pages/index';
import clientDashCommonPage from '../../pages_new/clientDash/clientDashCommonPage';

const accountCategoryInfo =  {
    locator: "li.nav-category:nth-child(1)",
    menuItems: []
}


class ProductsCategoryInfo {
    private locator: string;
    private currentlocator = "li.nav-category:nth-child(2)";
    
    menuItems: {
        "productMgmt": ProductItems.ProductsMgmt
    };

    constructor(parentLocator) {
        this.locator = `${parentLocator} ${this.currentlocator}`;
        
        this.menuItems = {
            "productMgmt": new ProductItems.ProductsMgmt(this.locator) 
        }        
    }
}
class CMSCategoryInfo {
    private locator: string;
    private currentLocator = "li.nav-category:nth-child(4)";
    menuItems: {
        pages: CMSItems.Pages,
        snippets: CMSItems.Snippets,
        layouts: CMSItems.Layouts,
        baseLayouts: CMSItems.BaseLayouts,
        situations: CMSItems.Situations
    }

    constructor(parentLocator) {
        this.locator = `${parentLocator} ${this.currentLocator}`;
    
        this.menuItems = {
            pages: new CMSItems.Pages(this.locator),
            snippets: new CMSItems.Snippets(this.locator),
            layouts: new CMSItems.Layouts(this.locator),
            baseLayouts: new CMSItems.BaseLayouts(this.locator),
            situations: new CMSItems.Situations(this.locator)
        }
    }

}

class TechnicalCategoryInfo {
    private locator: string;
    private currentLocator = 'li.nav-category:nth-child(5)';

    menuItems: {
        "settings": TechnicalItems.Settings,
        "definitions": TechnicalItems.Definitions,
        "definedLists": TechnicalItems.DefinedLists,
        "errorLog": TechnicalItems.ErrorLog
    }

    constructor(parentLocator) {
        this.locator = `${parentLocator} ${this.currentLocator}`;

        this.menuItems = {
            "settings": new TechnicalItems.Settings(this.locator),
            "definitions": new TechnicalItems.Definitions(this.locator),
            "definedLists": new TechnicalItems.DefinedLists(this.locator),
            "errorLog": new TechnicalItems.ErrorLog(this.locator)
        }
    }
}
/*
const reportingCategoryInfo = {
    locator: "li.nav-category:nth-child(3)",
    menuItems: []
}
*/


/*
const technicalCategoryInfo = {
    locator: "li.nav-category:nth-child(5)",
    menuItems: []
}
*/
export default class LeftNavigationPanel{
    
    private locator = "#sideNavbar";
    categories = {
        //"accounts": accountCategoryInfo, 
        "products": new ProductsCategoryInfo(this.locator), 
        //"reporting": reportingCategoryInfo, 
        "cms": new CMSCategoryInfo(this.locator),
        "technical": new TechnicalCategoryInfo(this.locator) //technicalCategoryInfo
    };
    
    private isCollapsed(): Boolean {
        return $("body").getAttribute("class").includes("collapsed"); 
    }

    public expand(): void {
        if (this.isCollapsed()) clientDashCommonPage.topNavigationPanel.collapseButton.click();        
    } 

    public collapse(): void {
        if (!this.isCollapsed()) clientDashCommonPage.topNavigationPanel.collapseButton.click();
    }
}