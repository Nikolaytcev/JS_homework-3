class navigatorTabs {
    constructor(container) {
        this.container = container;
        this.tabs = Array.from(this.container.querySelectorAll('.tab'));
        this.tabsContent = Array.from(this.container.querySelectorAll('.tab__content'));
        this.switchTabs()
    };

    clearActive() {
        for (let i = 0; i< this.tabs.length; i++) {
            this.tabs[i].classList = 'tab';
            this.tabsContent[i].classList = 'tab__content';
        };
    };

    getActiveIndex() {
        return this.tabs.indexOf(this.container.querySelector('.tab_active'))
    };

    switchTabs() {
        this.tabs.forEach((e) => {
            e.onclick = () => {
                this.clearActive();
                e.classList.add('tab_active');
                this.tabsContent[this.getActiveIndex()].classList.add('tab__content_active');
            }
        });
    };

};

new navigatorTabs(document.getElementById('tabs1'));