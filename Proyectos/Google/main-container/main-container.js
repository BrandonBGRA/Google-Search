export default class MainContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    render(){

        const array = ["img/amazon.png","img/youtube.png","img/Drive.png","img/Facebook.png","img/WS.png","img/instagram.png","img/linkedin.png","img/Twitter.png"];
        const arreglo = ["Amazon","Youtube","Google Drive","Facebook","WhatsApp","Instagram","Linkedin","Twitter"];

        const html = array.map((name, index) => {
            return `
                <div class="moduls-aplication">
                <a href="">
                    <img src="${name}" alt="Foto perfil">
                </a>
                <span>${arreglo[index]}</span>
                </div>
            `;
        }).join("");


        this.shadowRoot.innerHTML = `

        <style>

            :host {
                margin-top: 10rem;
                text-align: center;
            }
            
            .menu-logo{
                width: 530px;
                margin: 35px auto;
            }
            
            .menu-input {
                width: 35rem;
                margin: 0 auto;
                margin-bottom: 2rem;
            }
            
            .menu-input-container {
                width: 100%;
                border-radius: 9rem;
                border: 1px solid white;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: white;
            }
            
            .menu-input-container:hover {
                box-shadow: 0 1px 6px 0 #20212447;
            }
            
            .menu-input input {
                width: 85%;
                height: 1.9rem;
                border: none;
                outline: none;
                border-radius: 9rem;
                padding: .3rem .5rem;
                font-size: 1rem;
            }
            
            .img-search {
                width: 1.2rem;
                height: 1.2rem;
                padding-left: .4rem;
                padding-top: .1rem;
            }
            
            .menu-logo img {
                width: 19rem;
            }
            
            .section-grid {
                display: grid;
                grid-template-columns: repeat(4,1fr);
                width:45%;
                margin: auto;
            }


            .moduls-aplication {
                display: flex;
                flex-direction: column;
                margin-bottom: 3rem;
                padding: 3px;
            }
            .moduls-aplication:hover{
                opacity: 0.5;
            }

            .moduls-aplication a {
                padding-bottom: 1rem;
            }

            .moduls-aplication a img{
                width: 2.3rem;
                height: 2.3rem;
            }

            .moduls-aplication span {
                color: white;
                font-weight:200;
            }

            .img-padding{
                padding:  0 10px;
            }

            
        </style>

        <section class="menu-logo">
            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png" alt="">
        </section>

        <section class="menu-input">
            <div class="menu-input-container">
                <a href="#">
                    <img src="img/lupa.png" class="img-search">
                </a>
                <input type="text" placeholder="Busca en google o escribe una URL" id="input" >
                <a href="#">
                    <img src="img/microfono.png" class="img-search">
                </a>
                <a href="#">
                    <img src="img/busqueda.png" class="img-search img-padding">
                </a>
            </div>
        </section>

        <section class="section-grid">
        ${html}
        </section>



        `;
    
    }
}