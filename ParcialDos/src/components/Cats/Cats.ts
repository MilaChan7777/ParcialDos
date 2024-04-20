import { getCats } from '../data/getCats';
import stylesCat from './Cats.css';

export enum AttributeCat{
	'tittle' = 'tittle',
    'img' = 'img',
	'description' = 'description',
}

class Cat extends HTMLElement {
	tittle?: string;
    img?: string;
	description?: string;
	
    constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

    connectedCallback() {
		this.mount();
	}

	mount() {
		this.render();
	}

    static get observedAttributes() {
		const attrs: Record<AttributeCat, null> = {
			tittle: null,
			img: null,
			description: null,
		};
		return Object.keys(attrs);
	}
    attributeChangedCallback(propName: AttributeCat, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName) {
			default:
				this[propName] = newValue;
				break;
		}
		this.render();

    }

	render() {
    if (this.shadowRoot) {
        this.shadowRoot.innerHTML = `
        //<h1>${this.tittle}</h1>
        //<img src=${this.img} alt=""/>
        //<p>${this.description}</p>
        `;
    }

    const catSection = this.ownerDocument.createElement('section');
			catSection.className = 'cat-section';

			const title = this.ownerDocument.createElement('h1');
			title.textContent = this.tittle || 'No hay Title';
			catSection.appendChild(title);

			const image = this.ownerDocument.createElement('img');
			image.src = this.img || '';
			image.alt = 'Cat Image';
			catSection.appendChild(image);

            const description = this.ownerDocument.createElement('p');
			description.textContent = this.description || 'No hay descripción';
			catSection.appendChild(title);

    const button = this.ownerDocument.createElement('button');
			button.textContent = 'Frases de gatos';
            button.addEventListener('click', async () => {
				if (this.img) {
					const catData = await getCats(this.img);
					const tittle = this.ownerDocument.createElement('h1');
					description.textContent = catData.description;
					this.shadowRoot?.appendChild(tittle);
				}
			});

			catSection.appendChild(button);
			this.shadowRoot?.appendChild(catSection);
        }
    }
            
export default Cat;
customElements.define('cat-card', Cat);
