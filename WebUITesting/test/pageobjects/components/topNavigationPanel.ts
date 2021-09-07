export default class TopNavigationPanel {
    private currentLocator = 'nav';
    
    get collapseButton() {
        return $(`${this.currentLocator} button.navbar-toggler`);
    }

    get salesRalesLabel() {
        return $(`${this.currentLocator} div  a`);
    }

    get accountDropDown() {
        //need to replace it by corresponding drop-down component
        return $(`${this.currentLocator} button.dropdown-toggle `)
    }
}