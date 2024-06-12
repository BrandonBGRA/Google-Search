export default class Header extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `

        <style>

            :host {
                width: 100%;
            }
            
            nav {
                display: flex;
                justify-content: flex-end;
            }
            
            .nav-rigth {
                width: 250px;
                height: auto;
                display: flex;
                justify-content: center;
                align-items: center;
                list-style: none;
            }
            
            .nav-rigth a {
                margin-right: .9rem;
                color: white;
                text-decoration:none;
            }
            
            
            .nav-rigth img {
                border-radius: 50%;
                margin-left: .9rem;
                width: 2rem;
                height:2rem;
            }
        </style>

        <nav>
            <ul class="nav-rigth">
                <li>
                    <a href="#">Gmail</a>       
                </li>
                <li>
                    <a href="#">Imagenes</a>
                </li>
                <li class="menu-icon">
                    <img src="./img/app.svg">
                </li>
                <li>
                    <a href="#">
                        <img src="https://lh3.googleusercontent.com/ogw/AF2bZyignI8DD2NZKkXsRTtedU0pDlBfaZhMeDkQgkpb_976Rzjk=s64-c-mo" alt="Foto perfil">
                    </a>
                </li>
            </ul>
        </nav>

        `;
    }
}