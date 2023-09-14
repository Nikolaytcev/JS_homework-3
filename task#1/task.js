
class dropDown {
    constructor(container) {
        this.container = container;
        
        this.links = Array.from(this.container.querySelectorAll('.dropdown__item'));
        this.list = container.querySelector('.dropdown__list');
        this.value = container.querySelector('.dropdown__value');
        this.value.onclick = () => {this.getLink()}
    };

    getLink() {
        this.list.classList.add('dropdown__list_active');
        this.links.forEach((e) => {
            e.addEventListener('click', (event) => {
                event.preventDefault();
                this.value.textContent = e.textContent;
                this.list.classList = 'dropdown__list';
            });
        });
    };

}

new dropDown(document.querySelector('.dropdown'))