const footerTemplate = document.createElement('template');

               //Reemplaza el html por el nuevo
footerTemplate.innerHTML = `
<style>

    footer {
    height: 60px;
    padding: 0 10px;
    list-style: none;
      display: flex;
      flex-shrink: 0;
      justify-content: space-between;
      align-items: center;
      background-color: #dfdfe2;
    }

    ul {
      padding: 0;
    }
    
    ul li {
      list-style: none;
      display: inline;
    }
    
    a {
      margin: 0 15px;
      color: inherit;
      text-decoration: none;
    }
    
    a:hover {
      padding-bottom: 5px;
      box-shadow: inset 0 -2px 0 0 #333;
    }
    
    .social-row {
      font-size: 20px;
    }
    
    .social-row li a {
      margin: 0 15px;
    }
  </style>
  <footer>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <h4 class="text-center w-100">© 2022 Copyright: JhoanesVD</h4>
  </footer>
`;
//Definimos un elemento personalizado
class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // Query the main DOM for FA
    const fontAwesome = document.querySelector('link[href*="font-awesome"]');
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    // Conditionally load FA to the component
    if (fontAwesome) {
      shadowRoot.appendChild(fontAwesome.cloneNode());
    }

    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('footer-component', Footer);

