import Header from "../header/header.js";
import MainContainer from "../main-container/main-container.js";
import ModalContainer from "../modal-container/modal-container.js";

customElements.define('contenedor-header', Header);
customElements.define('main-container', MainContainer);
customElements.define('modal-container', ModalContainer);

export default class Contenedor extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.imprimirDatosModal();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    font-family: "Roboto", sans-serif;
                    font-weight: 400;
                    color: #3C4043;
                }
                section {
                    display: grid;
                    grid-template-columns: 20% 80%;
                }
            </style>
            <contenedor-header></contenedor-header> 
            <main-container></main-container>
            <modal-container></modal-container>
        `;

    }

    imprimirDatosModal() {
        const input = this.shadowRoot.querySelector('main-container').shadowRoot.getElementById('input');
        const close = this.shadowRoot.querySelector('modal-container').shadowRoot.getElementById('close');
        const modal = this.shadowRoot.querySelector('modal-container').shadowRoot.getElementById('modal-cotenedor');
        const contenidoModal = this.shadowRoot.querySelector('modal-container').shadowRoot.querySelector('.text-content');
        const arregloDatos = ["Hola", "Mundo"];
        
        console.log(contenidoModal);
        console.log(modal);
    
        input.addEventListener('keypress', (event) => {
            const contenido = input.value;
    
            if (event.key === 'Enter') {
                if (arregloDatos.includes(contenido)) {
                    console.log("Se presionó Enter");
                    modal.classList.add('visibility');
                    contenidoModal.textContent = "Tu Contenido si se encuentra disponible";
                } else {
                    modal.classList.add('visibility');
                    contenidoModal.textContent = "Error 404: Pagina no encontrada";
                }
            }
        });

        close.addEventListener('click', () => {
            modal.classList.remove('visibility');
            console.log(input.value);
            input.value = "";
            console.log(input.value);
        
        });
    }
    
    
}
