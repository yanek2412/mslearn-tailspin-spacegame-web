import clientDashCommonPage from '../../../../../pageobjects/pages_new/clientDash/clientDashCommonPage'
import clientDashPagesContents from '../../../../../pageobjects/pages_new/clientDash/clientDashPageContents';

describe('Create a new page', ()=>{
    beforeEach(() => {
        browser.refresh();
        browser.url('https://loc-clientdash.siegeltech.io/#');
        browser.setTimeout({ 'pageLoad': 10000 });
        //browser.pause(1000);

        /* preconditions */
        clientDashCommonPage.leftNavigationPanel.expand();
        clientDashCommonPage.leftNavigationPanel.categories.cms.menuItems.pages.select();
    }) 
    
    it('Create a Page with minimum data', ()=>{
        const pagesPageContent : typeof clientDashPagesContents.cms.cmsPagePageObjectsContent.pagesPagecontent = clientDashPagesContents.cms.cmsPagePageObjectsContent.pagesPagecontent;
        const dataGrid = pagesPageContent.dataGrid;
        dataGrid.header.createNewItemButton.click();
        browser.pause(1000);

        const newAndEditCMSPagecontent: typeof clientDashPagesContents.cms.cmsPagePageObjectsContent.newAndEditPageContent = clientDashPagesContents.cms.cmsPagePageObjectsContent.newAndEditPageContent;
        const testInfo = newAndEditCMSPagecontent.setMinimumTestInfo();
        newAndEditCMSPagecontent.saveButton.scrollIntoView();
        browser.pause(1000);
        newAndEditCMSPagecontent.saveButton.click();
        browser.pause(1000);
        browser.refresh();
        pagesPageContent.search.makeSearch(testInfo.name);
        browser.setTimeout({ 'pageLoad': 3000 });
        expect(pagesPageContent.dataGrid.getCellText(1, 'Name')).toEqual(testInfo.name);
    });

    it('Check validators when we try to create a page without data', () =>{ 
        const pagesPageContent : typeof clientDashPagesContents.cms.cmsPagePageObjectsContent.pagesPagecontent = clientDashPagesContents.cms.cmsPagePageObjectsContent.pagesPagecontent;
        const dataGrid = pagesPageContent.dataGrid;
        dataGrid.header.createNewItemButton.click();
        browser.pause(1000);

        const newAndEditCMSPagecontent: typeof clientDashPagesContents.cms.cmsPagePageObjectsContent.newAndEditPageContent = clientDashPagesContents.cms.cmsPagePageObjectsContent.newAndEditPageContent;
        
        newAndEditCMSPagecontent.saveButton.scrollIntoView();
        browser.pause(1000);
        newAndEditCMSPagecontent.saveButton.click();
        browser.pause(1000);

        expect(newAndEditCMSPagecontent.name.validatorMessage).toEqual('Please enter a name.');
        expect(newAndEditCMSPagecontent.description.validatorMessage).toEqual('Please enter a description.');
    })
});