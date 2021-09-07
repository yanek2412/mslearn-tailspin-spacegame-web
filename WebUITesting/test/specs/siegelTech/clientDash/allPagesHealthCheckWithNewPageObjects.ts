import clientDashCommonPage from '../../../pageobjects/pages_new/clientDash/clientDashCommonPage';
import clientDashPagesContents from '../../../pageobjects/pages_new/clientDash/clientDashPageContents';

describe('ClientDash healthcheck with new page objects', () => {
    beforeEach(() => {
        browser.url('https://loc-clientdash.siegeltech.io/#');
        browser.setTimeout({ 'pageLoad': 10000 });
        //browser.pause(1000);
    }) 
    
    it('check home page', ()=>{        
        let pageContent: typeof clientDashPagesContents.homePageContent = clientDashCommonPage.content;
        expect(pageContent.homePageImage).toBeVisible()
        expect(pageContent.welcomeLabel.getText()).toContain("Welcome");
    })

    it('check PRODUCTS > Product Mgmt page healthcheck', () =>{
        /* preconditions */
        clientDashCommonPage.leftNavigationPanel.expand();
        clientDashCommonPage.leftNavigationPanel.categories.products.menuItems.productMgmt.select();
        
        /* test */
        const pageContent : typeof clientDashPagesContents.products.productMgmtPageContent = clientDashCommonPage.content;
        const dataGrid = pageContent.dataGrid;
        expect(dataGrid.getOwnElement()).toBeVisible({message: "Product management page > data grid is not visible"});
        expect(dataGrid.header.title.getText()).toContain("Products");
        expect(pageContent.breadCrumb.getOwnElement()).toBeVisible({message: "product management page > breadcrumb component is not visible"});
    })

    it('check TECHNICAL > Settings page', () => {
        /* preconditions */
        clientDashCommonPage.leftNavigationPanel.expand();
        clientDashCommonPage.leftNavigationPanel.categories.products.menuItems.productMgmt.select();
        
        /* test */
        const pageContent : typeof clientDashPagesContents.products.productMgmtPageContent = clientDashCommonPage.content;
        const dataGrid = pageContent.dataGrid;
        expect(dataGrid.getOwnElement()).toBeVisible({message: "Product management page > data grid is not visible"});
        expect(dataGrid.header.title.getText()).toContain("Products");
        expect(pageContent.breadCrumb.getOwnElement()).toBeVisible({message: "product management page > breadcrumb component is not visible"});

    })
})