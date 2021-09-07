import clientDashCommonPage from '../../../../../pageobjects/pages_new/clientDash/clientDashCommonPage'
import clientDashPagesContents from '../../../../../pageobjects/pages_new/clientDash/clientDashPageContents';

describe('Create a new Snipnet', ()=>{
    beforeEach(() => {
        browser.refresh();
        browser.url('https://loc-clientdash.siegeltech.io/#');
        browser.setTimeout({ 'pageLoad': 10000 });
        //browser.pause(1000);
        /* preconditions */
        clientDashCommonPage.leftNavigationPanel.expand();
        clientDashCommonPage.leftNavigationPanel.categories.cms.menuItems.snippets.select();
    }) 
    
    it('Create a Snipnet with minimum data', ()=>{
        const snippetsPageContent : typeof clientDashPagesContents.cms.cmsSnippetPagesContent.snippetsPagecontent = clientDashPagesContents.cms.cmsSnippetPagesContent.snippetsPagecontent;
        const dataGrid = snippetsPageContent.dataGrid;
        dataGrid.header.createNewItemButton.click();
        browser.pause(1000);

        const newAndEditSnippetPagecontent: typeof clientDashPagesContents.cms.cmsSnippetPagesContent.newAndEditSnippetPageContent = clientDashPagesContents.cms.cmsSnippetPagesContent.newAndEditSnippetPageContent;
        const testInfo = newAndEditSnippetPagecontent.setMinimumTestInfo();
        newAndEditSnippetPagecontent.saveButton.scrollIntoView();
        browser.pause(1000);
        newAndEditSnippetPagecontent.saveButton.click();
        browser.pause(1000);
        browser.refresh();
        newAndEditSnippetPagecontent.search.makeSearch(testInfo.name);
        browser.setTimeout({ 'pageLoad': 3000 });
        expect(snippetsPageContent.dataGrid.getCellText(1, 'Name')).toEqual(testInfo.name);
    });

    it('Check validators when we try to create a Snipnet without data', () =>{
        /* test */      
        const snippetsPageContent : typeof clientDashPagesContents.cms.cmsSnippetPagesContent.snippetsPagecontent = clientDashPagesContents.cms.cmsSnippetPagesContent.snippetsPagecontent;
        const dataGrid = snippetsPageContent.dataGrid;
        dataGrid.header.createNewItemButton.click();
        browser.pause(1000);

        const newAndEditSnippetPagecontent: typeof clientDashPagesContents.cms.cmsSnippetPagesContent.newAndEditSnippetPageContent = clientDashPagesContents.cms.cmsSnippetPagesContent.newAndEditSnippetPageContent;
        
        newAndEditSnippetPagecontent.saveButton.scrollIntoView();
        browser.pause(1000);
        newAndEditSnippetPagecontent.saveButton.click();
        browser.pause(1000);

        expect(newAndEditSnippetPagecontent.name.validatorMessage).toEqual('Please enter a name.');
        expect(newAndEditSnippetPagecontent.description.validatorMessage).toEqual('Please enter a description.');
    })
});