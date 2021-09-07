import MenuItemInfo from './MenuItemInfo';


import clientDashPagesContents from '../../../pages_new/clientDash/clientDashPageContents';

export class Pages extends MenuItemInfo {
    constructor(parentLocator) {
        super(parentLocator, 'li.nav-item:nth-child(1)', clientDashPagesContents.cms.cmsPagePageObjectsContent.pagesPagecontent);
    }    
}

export class Snippets extends MenuItemInfo {
    constructor(parentLocator) {
        super(parentLocator, 'li.nav-item:nth-child(2)', clientDashPagesContents.cms.snippetsPageContent);
    }    
}

export class Layouts extends MenuItemInfo {
    constructor(parentLocator) {
        super(parentLocator, 'li.nav-item:nth-child(3)', clientDashPagesContents.cms.layoutsPageContent);
    }    
}

export class BaseLayouts extends MenuItemInfo {
    constructor(parentLocator) {
        super(parentLocator, 'li.nav-item:nth-child(4)', clientDashPagesContents.cms.cmsBaseLayoutPagesContent.pagesPagecontent);
    }    
}

export class Situations extends MenuItemInfo {
    constructor(parentLocator) {
        super(parentLocator, 'li.nav-item:nth-child(5)', clientDashPagesContents.cms.situationsPageContent);
    }    
}

