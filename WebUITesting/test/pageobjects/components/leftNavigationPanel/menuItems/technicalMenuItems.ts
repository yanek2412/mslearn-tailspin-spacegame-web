import MenuItemInfo from './MenuItemInfo';

import clientDashPagesContents from '../../../pages_new/clientDash/clientDashPageContents';

export class Settings extends MenuItemInfo {
    constructor(parentLocator) {
        super(parentLocator, 'li.nav-item:nth-child(1)', clientDashPagesContents.technical.settings.settingsMgmtPageContent);
    }    
}

export class Definitions extends MenuItemInfo {
    constructor(parentLocator) {
        super(parentLocator, 'li.nav-item:nth-child(2)', clientDashPagesContents.technical.definitions.definitionsPageContent);
    }
}

export class DefinedLists extends MenuItemInfo {
    constructor(parentLocator) {
        super(parentLocator, 'li.nav-item:nth-child(3)', clientDashPagesContents.technical.definedLists.definedListPageContent);
    }
    
}

export class ErrorLog extends MenuItemInfo {
    constructor(parentLocator) {
        super(parentLocator, 'li.nav-item:nth-child(4)', clientDashPagesContents.technical.errorLogPageContent);
    }    
}


