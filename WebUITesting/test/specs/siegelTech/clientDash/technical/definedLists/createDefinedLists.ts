import clientDashCommonPage from '../../../../../pageobjects/pages_new/clientDash/clientDashCommonPage';
import clientDashPagesContents from '../../../../../pageobjects/pages_new/clientDash/clientDashPageContents';

describe('TECHNICAL > Defined Lists > Create Defined Lists', () => {
    beforeEach(() => {
        browser.refresh();
        browser.url('https://loc-clientdash.siegeltech.io/#');
        browser.setTimeout({ 'pageLoad': 10000 });
        browser.pause(1000);
    })
    
    it('Create defined list with basical data', () => {
        /* preconditions */
        clientDashCommonPage.leftNavigationPanel.expand();
        clientDashCommonPage.leftNavigationPanel.categories.technical.menuItems.definedLists.select();
        browser.setTimeout({ 'pageLoad': 10000 });

        /* test */      
        const definedListsManagementPageContent: typeof clientDashPagesContents.technical.definedLists.definedListPageContent = clientDashPagesContents.technical.definedLists.definedListPageContent;
        const dataGrid = definedListsManagementPageContent.dataGrid;
        dataGrid.header.createNewItemButton.click();
        browser.pause(1000);

        const definedListEditPageContent: typeof clientDashPagesContents.technical.definedLists.definedListEditPageContent = clientDashPagesContents.technical.definedLists.definedListEditPageContent;
        const testInfo = definedListEditPageContent.setMinimumTestInfo();
        browser.pause(500);
        definedListEditPageContent.saveButton.click();

        definedListsManagementPageContent.search.makeSearch(testInfo.name);       

    })
})
