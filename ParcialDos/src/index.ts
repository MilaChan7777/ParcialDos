import "./components/export"
import { getCats } from './components/data/getCats';
import Cat, { AttributeCat } from './components/Cats/Cats';

class AppContainer extends HTMLElement {
    FavoriteCats: any[] = [];
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    async connectedCallback() {
        const catData = await getCats(Cat);
        this.render(catData);
    }

    render(catData: any) {
        if (!catData) {
            console.error("No data provided.");
            return;
        }

        const catSection = this.ownerDocument.createElement('section');
        const catFavoriteSection = this.ownerDocument.createElement('section');
        catFavoriteSection.setAttribute('id', 'cat-favorite-section');

        const cardCat = this.ownerDocument.createElement('cat-card') as Cat;
        cardCat.setAttribute(AttributeCat.img, catData.image);
        cardCat.setAttribute(AttributeCat.tittle, catData.title);
        cardCat.setAttribute(AttributeCat.description, catData.description);

        const button = this.ownerDocument.createElement('button');
        button.className = 'favorite-kitten-button';
        button.textContent = 'Add your Favorite kitty';

        button.addEventListener('click', () => {
            const favoriteKitten = this.ownerDocument.createElement('cat-card') as Cat;
            favoriteKitten.setAttribute(AttributeCat.img, catData.image);
            favoriteKitten.setAttribute(AttributeCat.tittle, catData.title);
            favoriteKitten.setAttribute(AttributeCat.description, catData.description);
            catFavoriteSection.appendChild(favoriteKitten);
        });

        const catContainer = this.ownerDocument.createElement('div');
        catContainer.appendChild(cardCat);
        catContainer.appendChild(button);
        catSection.appendChild(catContainer);

        const favoriteKitty = this.ownerDocument.createElement('h1');
        favoriteKitty.textContent = 'Favorite Kitty';
        this.shadowRoot?.appendChild(favoriteKitty);
        this.shadowRoot?.appendChild(catFavoriteSection);
        this.shadowRoot?.appendChild(catSection);
    }
}

customElements.define('app-container', AppContainer);

