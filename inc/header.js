const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
<header class="col-12 bg-success align-items-center">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<nav class="navbar navbar-expand-xl navbar-expand-lg navbar-expand-md p-3">
    <div class="container-fluid">

    <!--LOGO-->
        <a href="./index.html" class="navbar-brand">
            <span class="h3 text-warning">Formaweb IV</span>
        </a>

    <!--Menu -->
        <div class=" navbar-collapse flex-row-reverse" id="menu">
            <ul class="navbar-nav">
                <li class="nav-item d-flex me-xl-2 me-lg-2 me-md-2 flex-row-reverse">
                    <a href="./index.html" class="nav-link my-2 py-0 text-warning">Home</a>
                </li>
                    <hr class="my-1">
                <li class="nav-item d-flex me-xl-2 me-lg-2 me-md-2 flex-row-reverse">
                    <a href="./nosotros.html" class="nav-link my-2 py-0 text-warning">Nosotros</a>
                </li>
                    <hr class="my-1">
                <li class="nav-item d-flex flex-row-reverse">
                    <a href="./contacto.html" class="nav-link my-2 py-0 text-warning">Contacto</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
</header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);