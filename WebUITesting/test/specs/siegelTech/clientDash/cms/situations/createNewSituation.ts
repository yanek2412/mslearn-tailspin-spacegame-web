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
        clientDashCommonPage.leftNavigationPanel.categories.cms.menuItems.situations.select();
    }) 
    
    it('Create a Situation with minimum data', ()=>{
        const situationsPageContent : typeof clientDashPagesContents.cms.cmsSituationPagesContent.situationsPagecontent = clientDashPagesContents.cms.cmsSituationPagesContent.situationsPagecontent;
        const dataGrid = situationsPageContent.dataGrid;
        dataGrid.header.createNewItemButton.click();
        browser.pause(1000);

        const newAndEditSituationPagecontent: typeof clientDashPagesContents.cms.cmsSituationPagesContent.newAndEditSituationPageContent = clientDashPagesContents.cms.cmsSituationPagesContent.newAndEditSituationPageContent;
        const testInfo = newAndEditSituationPagecontent.setMinimumTestInfo();
        newAndEditSituationPagecontent.saveButton.scrollIntoView();
        browser.pause(1000);
        newAndEditSituationPagecontent.saveButton.click();
        browser.pause(1000);
        browser.refresh();
        newAndEditSituationPagecontent.search.makeSearch(testInfo.name);
        browser.setTimeout({ 'pageLoad': 3000 });
        expect(situationsPageContent.dataGrid.getCellText(1, 'Name')).toEqual(testInfo.name);
    });

    it('Check validators when we try to create a Situation without data', () =>{
        /* test */      
        const situationsPageContent : typeof clientDashPagesContents.cms.cmsSituationPagesContent.situationsPagecontent = clientDashPagesContents.cms.cmsSituationPagesContent.situationsPagecontent;
        const dataGrid = situationsPageContent.dataGrid;
        dataGrid.header.createNewItemButton.click();
        browser.pause(1000);

        const newAndEditSituationPagecontent: typeof clientDashPagesContents.cms.cmsSituationPagesContent.newAndEditSituationPageContent = clientDashPagesContents.cms.cmsSituationPagesContent.newAndEditSituationPageContent;
        
        newAndEditSituationPagecontent.saveButton.scrollIntoView();
        browser.pause(1000);
        newAndEditSituationPagecontent.saveButton.click();
        browser.pause(1000);

        expect(newAndEditSituationPagecontent.name.validatorMessage).toEqual('Please enter a name.');
        expect(newAndEditSituationPagecontent.description.validatorMessage).toEqual('Please enter a description.');
    })
});