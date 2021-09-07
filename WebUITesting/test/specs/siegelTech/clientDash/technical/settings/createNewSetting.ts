import clientDashCommonPage from '../../../../../pageobjects/pages_new/clientDash/clientDashCommonPage';
import clientDashPagesContents from '../../../../../pageobjects/pages_new/clientDash/clientDashPageContents';

describe('TECHNICAL > Settings > Create a regular setting', () => {
    beforeEach(() => {
        browser.refresh();
        browser.url('https://loc-clientdash.siegeltech.io/#');
        browser.setTimeout({ 'pageLoad': 10000 });
        //browser.pause(1000);
    })

    it('Create a new setting item', ()=>{
        /* preconditions */
        clientDashCommonPage.leftNavigationPanel.expand();
        clientDashCommonPage.leftNavigationPanel.categories.technical.menuItems.settings.select();
        browser.setTimeout({ 'pageLoad': 10000 });

        /* test */      
        const settingsManagementPageContent: typeof clientDashPagesContents.technical.settings.settingsMgmtPageContent = clientDashPagesContents.technical.settings.settingsMgmtPageContent;
        const dataGrid = settingsManagementPageContent.dataGrid;
        dataGrid.header.createNewItemButton.click();
        const settingsEditPropertiesPageCOntent: typeof clientDashPagesContents.technical.settings.settingsEditPropertiesPageContent = clientDashPagesContents.technical.settings.settingsEditPropertiesPageContent;
        const testInfo = settingsEditPropertiesPageCOntent.fillTestInfo();
        settingsEditPropertiesPageCOntent.saveButton.scrollIntoView();
        browser.pause(1000);
        settingsEditPropertiesPageCOntent.saveButton.click();
        browser.pause(1000);
        browser.refresh();
        //productManagementPageContent.search.makeSearch(testInfo.name);
        //browser.setTimeout({ 'pageLoad': 3000 });
        // test is not finished. Need to add checks to make sure that new item was really added and stabilize running in Firefox
        // TODO: https://dev.azure.com/SiegelTech/Sales%20Rails/_workitems/edit/986

    })
})