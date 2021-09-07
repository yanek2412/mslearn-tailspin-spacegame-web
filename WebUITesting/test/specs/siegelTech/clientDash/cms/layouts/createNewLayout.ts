import clientDashCommonPage from '../../../../../pageobjects/pages_new/clientDash/clientDashCommonPage'
import clientDashPagesContents from '../../../../../pageobjects/pages_new/clientDash/clientDashPageContents';

describe('Create a new Layout', ()=>{
    beforeEach(() => {
        browser.refresh();
        browser.url('https://loc-clientdash.siegeltech.io/#');
        browser.setTimeout({ 'pageLoad': 10000 });
        //browser.pause(1000);

        /* preconditions */
        clientDashCommonPage.leftNavigationPanel.expand();
        clientDashCommonPage.leftNavigationPanel.categories.cms.menuItems.layouts.select();       
    }) 
    
    it('Create a Layout with minimum data', ()=>{
        const layoutPagesContent : typeof clientDashPagesContents.cms.cmsLayoutPagesContent.pagesPagecontent = clientDashPagesContents.cms.cmsLayoutPagesContent.pagesPagecontent;
        const dataGrid = layoutPagesContent.dataGrid;
        dataGrid.header.createNewItemButton.click();
        browser.pause(1000);

        const newAndEditLayoutPagecontent: typeof clientDashPagesContents.cms.cmsLayoutPagesContent.newAndEditPageContent = clientDashPagesContents.cms.cmsLayoutPagesContent.newAndEditPageContent;
        const testInfo = newAndEditLayoutPagecontent.setMinimumTestInfo();
        newAndEditLayoutPagecontent.saveButton.scrollIntoView();
        browser.pause(1000);
        newAndEditLayoutPagecontent.saveButton.click();
        browser.pause(1000);
        browser.refresh();
        newAndEditLayoutPagecontent.search.makeSearch(testInfo.name);
        browser.setTimeout({ 'pageLoad': 3000 });
        expect(layoutPagesContent.dataGrid.getCellText(1, 'Name')).toEqual(testInfo.name);
    });

    it('Check validators when we try to create a Layout without data', () =>{
        const layoutsPageContent : typeof clientDashPagesContents.cms.cmsLayoutPagesContent.pagesPagecontent = clientDashPagesContents.cms.cmsLayoutPagesContent.pagesPagecontent;
        const dataGrid = layoutsPageContent.dataGrid;
        dataGrid.header.createNewItemButton.click();
        browser.pause(1000);

        const newAndEditLayoutPagecontent: typeof clientDashPagesContents.cms.cmsLayoutPagesContent.newAndEditPageContent = clientDashPagesContents.cms.cmsLayoutPagesContent.newAndEditPageContent;
        
        newAndEditLayoutPagecontent.saveButton.scrollIntoView();
        browser.pause(1000);
        newAndEditLayoutPagecontent.saveButton.click();
        browser.pause(1000);

        expect(newAndEditLayoutPagecontent.name.validatorMessage).toEqual('Please enter a name.');
        expect(newAndEditLayoutPagecontent.description.validatorMessage).toEqual('Please enter a description.');
    })
});