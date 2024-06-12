const mainContainer = document.querySelector("#root");

function customRender(reactElement, container) {
  const DomElement = document.createElement(reactElement.type);
  DomElement.innerHTML = reactElement.Text;

  // DomElement.setAttribute('href', reactElement.props.href)
  // DomElement.setAttribute('target', reactElement.props.target)
  // DomElement.setAttribute('style', reactElement.props.style)

  for (const prop in reactElement.props) {
    DomElement.setAttribute(prop, reactElement.props[prop]);
  }

  container.appendChild(DomElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
    style: "color:white;",
  },
  Text: "Click me to visit google",
};

customRender(reactElement, mainContainer);
