function customRender(reactElement, container) {
  /*
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.target);
  container.appendChild(domElement);
  */

  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;

  for (const key in reactElement.props) {
    if (key === "children") continue;
    domElement.setAttribute(key, reactElement.props[key]);
  }

  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://goggle.com",
    target: "_blank",
  },
  children: "Click Me To Vist Google",
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
