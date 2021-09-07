import clientDashCommonPage from '../../../../pageobjects/pages_new/clientDash/clientDashCommonPage';
import clientDashPagesContents from '../../../../pageobjects/pages_new/clientDash/clientDashPageContents';

describe('Create a new product', ()=>{
    beforeEach(() => {
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

    it('Create a product with full data', ()=>{
        const productManagementPageContent : typeof clientDashPagesContents.products.productMgmtPageContent = clientDashCommonPage.content;
        const dataGrid = productManagementPageContent.dataGrid;
        dataGrid.header.createNewItemButton.click();

        const newProductPageContent: typeof clientDashPagesContents.products.newProductPageContent = clientDashPagesContents.products.newProductPageContent;
        const testInfo = newProductPageContent.setFullTestInfo();
        newProductPageContent.saveButton.scrollIntoView();
        browser.pause(1000);
        newProductPageContent.saveButton.click();
        browser.pause(1000);
        browser.refresh();
        productManagementPageContent.search.makeSearch(testInfo.name);
        browser.setTimeout({ 'pageLoad': 3000 });
        expect(productManagementPageContent.dataGrid.getCellText(1, 'Name')).toEqual(testInfo.name);
    
        productManagementPageContent.dataGrid.getCell(1, 'Edit Product').clickOnIcon();
        browser.setTimeout({ 'pageLoad': 10000 });

        expect(newProductPageContent.name.getValue()).toEqual(testInfo.name);
        expect(newProductPageContent.description.getValue()).toEqual(testInfo.description);
        
    })

    it('Check validators when we save a product without data', () => {
      const productManagementPageContent : typeof clientDashPagesContents.products.productMgmtPageContent = clientDashCommonPage.content;
      const dataGrid = productManagementPageContent.dataGrid;
      dataGrid.header.createNewItemButton.click();

      const newProductPageContent: typeof clientDashPagesContents.products.newProductPageContent = clientDashPagesContents.products.newProductPageContent;
      newProductPageContent.saveButton.scrollIntoView();
      newProductPageContent.saveButton.click();  
      expect(newProductPageContent.name.validatorMessage).toEqual('Please enter a name.');
      expect(newProductPageContent.description.validatorMessage).toEqual('Please enter a description.');

    })

    it('Check validator when we try to create a product with existing name', () => {
        const productManagementPageContent : typeof clientDashPagesContents.products.productMgmtPageContent = clientDashCommonPage.content;
        const dataGrid = productManagementPageContent.dataGrid;
        dataGrid.header.createNewItemButton.click();
  
        const newProductPageContent: typeof clientDashPagesContents.products.newProductPageContent = clientDashPagesContents.products.newProductPageContent;
        const testInfo = newProductPageContent.setMinimumTestInfo();
        newProductPageContent.saveButton.scrollIntoView();
        browser.pause(1000);
        newProductPageContent.saveButton.click();
        browser.pause(1000);
        
        dataGrid.header.createNewItemButton.click();
        newProductPageContent.name.setValue(testInfo.name);
        newProductPageContent.saveButton.scrollIntoView();
        browser.pause(1500);
        newProductPageContent.saveButton.click();
        browser.pause(500);
        newProductPageContent.breadcrumb.scrollIntoView();
        const validatorMessage = newProductPageContent.name.validatorMessage;
        expect(validatorMessage).toEqual('Name is not unique, please choose a unique name.');
    })

})