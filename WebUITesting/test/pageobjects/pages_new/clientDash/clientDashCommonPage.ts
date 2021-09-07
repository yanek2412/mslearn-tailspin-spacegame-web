import LeftNavigationPanel from '../../components/leftNavigationPanel/index';
import TopNavigationPanel from '../../components/topNavigationPanel';
import Footer from '../../components/footer';

import HomePageContent from './homePageContent';

class ClientDashCommonPage {
    leftNavigationPanel: LeftNavigationPanel;
    topNavigationPanel: TopNavigationPanel;
    footer: Footer;
    content;

    constructor() {
        this.leftNavigationPanel = new LeftNavigationPanel();
        this.topNavigationPanel = new TopNavigationPanel();
        this.footer = new Footer();
        this.content = new HomePageContent();
    }
}

export default new ClientDashCommonPage();