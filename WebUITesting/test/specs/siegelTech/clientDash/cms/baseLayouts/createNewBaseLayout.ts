import clientDashCommonPage from '../../../../../pageobjects/pages_new/clientDash/clientDashCommonPage'
import clientDashPagesContents from '../../../../../pageobjects/pages_new/clientDash/clientDashPageContents';

describe('Create a new Base Layout', ()=>{
    beforeEach(() => {
        browser.refresh();
        browser.url('https://loc-clientdash.siegeltech.io/#');
        browser.setTimeout({ 'pageLoad': 10000 });
        //browser.pause(1000);

        /* preconditions */
        clientDashCommonPage.leftNavigationPanel.expand();
        clientDashCommonPage.leftNavigationPanel.categories.cms.menuItems.pages.select();
    }) 
    
    it('Create a Base Layout with minimum data', ()=>{
        const baseLayoutPagesContent : typeof clientDashPagesContents.cms.cmsBaseLayoutPagesContent.pagesPagecontent = clientDashPagesContents.cms.cmsBaseLayoutPagesContent.pagesPagecontent;
        const dataGrid = baseLayoutPagesContent.dataGrid;
        dataGrid.header.createNewItemButton.click();
        browser.pause(1000);

        const newAndEditBaseLayoutPagecontent: typeof clientDashPagesContents.cms.cmsBaseLayoutPagesContent.newAndEditPageContent = clientDashPagesContents.cms.cmsBaseLayoutPagesContent.newAndEditPageContent;
        const testInfo = newAndEditBaseLayoutPagecontent.setMinimumTestInfo();
        newAndEditBaseLayoutPagecontent.saveButton.scrollIntoView();
        browser.pause(1000);
        newAndEditBaseLayoutPagecontent.saveButton.click();
        browser.pause(1000);
        browser.refresh();
        newAndEditBaseLayoutPagecontent.search.makeSearch(testInfo.name);
        browser.setTimeout({ 'pageLoad': 3000 });
        expect(baseLayoutPagesContent.dataGrid.getCellText(1, 'Name')).toEqual(testInfo.name);
    });

    it('Check validators when we try to create a Base Layout without data', () =>{
        const baseLayoutPageContent : typeof clientDashPagesContents.cms.cmsBaseLayoutPagesContent.pagesPagecontent = clientDashPagesContents.cms.cmsBaseLayoutPagesContent.pagesPagecontent;
        const dataGrid = baseLayoutPageContent.dataGrid;
        dataGrid.header.createNewItemButton.click();
        browser.pause(1000);

        const newAndEditBaseLayoutPagecontent: typeof clientDashPagesContents.cms.cmsBaseLayoutPagesContent.newAndEditPageContent = clientDashPagesContents.cms.cmsBaseLayoutPagesContent.newAndEditPageContent;
        
        newAndEditBaseLayoutPagecontent.saveButton.scrollIntoView();
        browser.pause(1000);
        newAndEditBaseLayoutPagecontent.saveButton.click();
        browser.pause(1000);

        expect(newAndEditBaseLayoutPagecontent.name.validatorMessage).toEqual('Please enter a name.');
        expect(newAndEditBaseLayoutPagecontent.description.validatorMessage).toEqual('Please enter a description.');
    })
});