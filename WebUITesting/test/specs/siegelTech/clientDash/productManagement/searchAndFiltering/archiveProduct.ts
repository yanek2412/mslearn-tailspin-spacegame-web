import clientDashCommonPage from '../../../../../pageobjects/pages_new/clientDash/clientDashCommonPage';
import clientDashPagesContents from '../../../../../pageobjects/pages_new/clientDash/clientDashPageContents';

describe('Create a new product', ()=>{
    beforeEach(() => {
        browser.refresh();
        browser.url('https://loc-clientdash.siegeltech.io/#');
        browser.setTimeout({ 'pageLoad': 10000 });
        //browser.pause(1000);
        clientDashCommonPage.leftNavigationPanel.expand();
        clientDashCommonPage.leftNavigationPanel.categories.products.menuItems.productMgmt.select();

    }) 
    
    it('Create a product with minimum data', ()=>{
        const productManagementPageContent : typeof clientDashPagesContents.products.productMgmtPageContent = clientDashCommonPage.content;
        const dataGrid = productManagementPageContent.dataGrid;
        dataGrid.header.createNewItemButton.click();

        const newProductPageContent: typeof clientDashPagesContents.products.newProductPageContent = clientDashPagesContents.products.newProductPageContent;
        const testInfo = newProductPageContent.setMinimumTestInfo();
        newProductPageContent.saveButton.scrollIntoView();
        browser.pause(1000);
        newProductPageContent.saveButton.click();
        browser.pause(1000);
        browser.refresh();
        productManagementPageContent.search.makeSearch(testInfo.name);
        browser.setTimeout({ 'pageLoad': 3000 });
        expect(productManagementPageContent.dataGrid.getCellText(1, 'Name')).toEqual(testInfo.name);

    })

  
})