//import BaseLayoutPageContent from './baseLayoutsPagesContents/baseLayoutsPageContent';

import cmsPagePageObjectssContent from './pages/index';
import cmsBaseLayoutPagesContent from './baseLayoutsPagesContents/index';
import cmsLayoutPagesContent from './layoutsPageContents/index';
import cmsSituationPagesContent from './situations/index';
import cmsSnippetPagesContent from './snippets/index';
import LayoutsPageContent from './layoutsPageContents/layoutsPageContent';
import PagesPageContent from './pages/pagesPageContent';
import SituationsPageContent from './situations/situationsPageContent';
import SnippetsPageContent from './snippets/snippetsPageContent';

const cmsPagePageObjectsContents = {
    //baseLayoutsPageContent: new BaseLayoutPageContent(),
    //layoutsPageContent: new LayoutsPageContent(),
    //pagesPageContent: new PagesPageContent(),
    cmsBaseLayoutPagesContent: cmsBaseLayoutPagesContent,
    cmsLayoutPagesContent: cmsLayoutPagesContent,
    cmsPagePageObjectsContent: cmsPagePageObjectssContent,
    //situationsPageContent: new SituationsPageContent(),
    cmsSituationPagesContent: cmsSituationPagesContent,
    cmsSnippetPagesContent: cmsSnippetPagesContent,
    //snippetsPageContent: new SnippetsPageContent()
}

export default cmsPagePageObjectsContents;