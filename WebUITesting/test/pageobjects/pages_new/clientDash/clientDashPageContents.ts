import HomePageContent from "./homePageContent"
import accountsPageContents from './accounts/index';
import cmsPageContents from './cms/index';
import productsPagesContents from './products/index';
//import reports
import technicalPagesContents from './technical/index';

const clientDashPagesContents = {
    homePageContent: new HomePageContent(),
    accounts: accountsPageContents,
    products: productsPagesContents,
    //reports: 
    cms: cmsPageContents,
    technical: technicalPagesContents
}

export default clientDashPagesContents;