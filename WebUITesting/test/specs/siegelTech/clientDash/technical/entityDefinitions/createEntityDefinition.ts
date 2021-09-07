import clientDashCommonPage from '../../../../../pageobjects/pages_new/clientDash/clientDashCommonPage';
import clientDashPagesContents from '../../../../../pageobjects/pages_new/clientDash/clientDashPageContents';

describe('TECHNICAL > Entity Definitions > Create Entity Definition', () => {
    beforeEach(() => {
        browser.refresh();
        browser.url('https://loc-clientdash.siegeltech.io/#');
        browser.setTimeout({ 'pageLoad': 10000 });
        browser.pause(1000);
    })
    
    it('Create Entity Definition with basical information', () => {
        /* preconditions */
        clientDashCommonPage.leftNavigationPanel.expand();
        clientDashCommonPage.leftNavigationPanel.categories.technical.menuItems.definitions.select();
        browser.setTimeout({ 'pageLoad': 10000 });
        
        /* test */      
        const entityDefinitionsManagementPageContent: typeof clientDashPagesContents.technical.definitions.definitionsPageContent = clientDashPagesContents.technical.definitions.definitionsPageContent;
        const dataGrid = entityDefinitionsManagementPageContent.dataGrid;
        dataGrid.header.createNewItemButton.click();
        browser.pause(1000);

        const definitionsEditPageContent: typeof clientDashPagesContents.technical.definitions.definitionsEditPropertiesPageContent = clientDashPagesContents.technical.definitions.definitionsEditPropertiesPageContent;
        const testInfo = definitionsEditPageContent.setMinimumTestInfo();
        browser.pause(500);
        definitionsEditPageContent.saveButton.click();
        definitionsEditPageContent.readcrumb.goByLink('Entity Definition Management');
        browser.pause(500);

        entityDefinitionsManagementPageContent.search.makeSearch(testInfo.name);       
    })
})