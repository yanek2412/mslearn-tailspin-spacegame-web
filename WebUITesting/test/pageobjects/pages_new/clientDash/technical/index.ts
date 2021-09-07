import DefinedListsPageContent from './definedListsPageContent';
import DefinitionsPageContent from './entityDefinitions/definitionsPageContent';
import ErrorLogPageContent from './errorLogPageContent';
import InstancesPageContent from './instancesPageContent';
//import SettingsPageContent from './settingsPageContent/settingsPageContent';
import definedLists from './definedLists/index';
import definitions from './entityDefinitions/index'

import settings from './settingsPageContent/index';

const technicalPagesContents = {
    //definedListsPageContent: new DefinedListsPageContent(),
    //definitionsPageContent: new DefinitionsPageContent(),
    errorLogPageContent: new ErrorLogPageContent(),
    instancesPageContent: new InstancesPageContent(),
    //settingsPageContent: new SettingsPageContent()
    definedLists: definedLists,
    definitions: definitions,
    settings: settings
}

export default technicalPagesContents;