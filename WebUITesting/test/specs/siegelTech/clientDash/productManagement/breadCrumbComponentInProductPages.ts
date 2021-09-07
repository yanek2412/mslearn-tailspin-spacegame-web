import clientDashCommonPage from '../../../../pageobjects/pages_new/clientDash/clientDashCommonPage';
import clientDashPagesContents from '../../../../pageobjects/pages_new/clientDash/clientDashPageContents';

describe.only('Check breadcrumbs component on the product pages', () => {
  beforeEach(() => {
    browser.refresh();
    browser.url('https://loc-clientdash.siegeltech.io/#');
    browser.setTimeout({ pageLoad: 10000 });
    // browser.pause(1000);
  });

  describe('Check breadcrumb on the product management page', () => {
    it('Check navigating to Home page', () => {
      /* preconditions */
      clientDashCommonPage.leftNavigationPanel.expand();
      clientDashCommonPage.leftNavigationPanel.categories.products.menuItems.productMgmt.select();
      browser.setTimeout({ pageLoad: 10000 });

      /* test */
      // eslint-disable-next-line max-len
      const productManagementPageContent : typeof clientDashPagesContents.products.productMgmtPageContent = clientDashCommonPage.content;
      productManagementPageContent.breadCrumb.goToHome();
      browser.setTimeout({ pageLoad: 10000 });

      const { homePageContent } = clientDashPagesContents;
      expect(homePageContent.welcomeLabel).toBeVisible();
      expect(homePageContent.homePageImage).toBeVisible();
    });

    it('Check Breadcrumbs elements counts and text', () => {
      /* preconditions */
      clientDashCommonPage.leftNavigationPanel.expand();
      clientDashCommonPage.leftNavigationPanel.categories.products.menuItems.productMgmt.select();
      browser.setTimeout({ pageLoad: 10000 });

      /* test */
      // eslint-disable-next-line max-len
      const productManagementPageContent : typeof clientDashPagesContents.products.productMgmtPageContent = clientDashCommonPage.content;
      expect(productManagementPageContent.breadCrumb.getElementsCount()).toEqual(2);
      const lastElementText = productManagementPageContent.breadCrumb.getLastElementText();
      expect(lastElementText).toEqual('Products');
    });
  });

  describe('Check breadcrumb on the new product page', () => {
    it.only('Check navigating to Home page', () => {
      /* preconditions */
      clientDashCommonPage.leftNavigationPanel.expand();
      clientDashCommonPage.leftNavigationPanel.categories.products.menuItems.productMgmt.select();
      browser.setTimeout({ pageLoad: 10000 });
      // eslint-disable-next-line max-len
      const productManagementPageContent : typeof clientDashPagesContents.products.productMgmtPageContent = clientDashCommonPage.content;
      productManagementPageContent.dataGrid.header.createNewItemButton.click();
      browser.setTimeout({ pageLoad: 10000 });

      /* test */
      const { newProductPageContent } = clientDashPagesContents.products;
      newProductPageContent.breadcrumb.goToHome();
      browser.setTimeout({ pageLoad: 10000 });

      const { homePageContent } = clientDashPagesContents;
      expect(homePageContent.welcomeLabel).toBeVisible();
      expect(homePageContent.homePageImage).toBeVisible();
    });

    it('Check Breadcrumbs elements counts and text', () => {
      /* preconditions */
      clientDashCommonPage.leftNavigationPanel.expand();
      clientDashCommonPage.leftNavigationPanel.categories.products.menuItems.productMgmt.select();
      browser.setTimeout({ pageLoad: 10000 });
      // eslint-disable-next-line max-len
      const productManagementPageContent : typeof clientDashPagesContents.products.productMgmtPageContent = clientDashCommonPage.content;
      productManagementPageContent.dataGrid.header.createNewItemButton.click();
      browser.setTimeout({ pageLoad: 10000 });

      /* test */
      const { newProductPageContent } = clientDashPagesContents.products;
      const elementsCount = newProductPageContent.breadcrumb.getElementsCount();
      expect(elementsCount).toEqual(3);
      const lastElementText = newProductPageContent.breadcrumb.getLastElementText();
      expect(lastElementText).toEqual('New Product');
    });
  });
});
