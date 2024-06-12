export default class ModalContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
    this.shadowRoot.innerHTML = `

        <style>

            :host {
            font-family: "Roboto", sans-serif;
            font-weight: 400;
            color: #3C4043;
            }

            .text-content{
                font-size: 20px;
                font-weight: bold;
            }
            .modal-cotenedor {
                display: flex;
                background-color: rgb(122, 121, 121);
                align-items: center;
                justify-content: center;
                position: fixed;
                pointer-events: none;
                opacity: 0;
                top: 0;
                left: 0;
                height: 100vh;
                width: 100vw;
                transition: opacity 0.4s ease-in-out; /* Añade la transición de opacidad */
            }
            
            
            
            .modal {
                background-color: white;
                width: 600px;
                max-width: 100%;
                padding: 30px 50px;
                border-radius: 5px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                transition: transform 0.4s ease-in-out; /* Añade la transición de transformación */
                transform: translateY(-50px);
                text-align: center;
                margin: 0 7px;
            }
            
            .modal h1{
                margin: 0;
            }
            
            .modal p{
                opacity: 1;
                font-size: 1.1rem;
            }
            
            .visibility {
                pointer-events: auto;
                opacity: 1;
                transform: translateY(0); /* Aplica transformación cuando se hace visible */
            }

            #close {
                background-color:#00807a;
                border: 0;
                box-shadow: 0 2px 4px black;
                color: white;
                cursor: pointer;
                width: 30%;
                padding: .5rem;
                text-align: center;
                border-radius: 5px;
                text-transform: uppercase;
                font-weight: bold;
                margin-top: 10px;
            }
            
            #close:hover {
              background-color: #00ab7d;
            }

        </style>

        <div class="modal-cotenedor" id="modal-cotenedor">
            <div class="modal">
                <div class="text-content"></div>
                <button id="close">Salir</button>
            </div>   
        </div>

        `;
    }
}