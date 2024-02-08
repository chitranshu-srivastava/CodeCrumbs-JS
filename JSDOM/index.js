// Define a basic Node class
class Node {
  constructor(tagName) {
    this.tagName = tagName;
    this.children = [];
    this.textContent = "";
  }

  appendChild(childNode) {
    this.children.push(childNode);
  }
}

// Define a DOM class
class SimpleDOM {
  constructor() {
    this.root = new Node("html");
  }

  createElement(tagName) {
    return new Node(tagName);
  }

  createTextNode(textContent) {
    const textNode = new Node("p");
    textNode.textContent = textContent;
    return textNode;
  }

  appendChild(parentNode, childNode) {
    parentNode.appendChild(childNode);
  }

  render(node = this.root, depth = 0) {
    // Print the opening tag with indentation
    console.log(`${" ".repeat(depth * 2)}<${node.tagName}>`);

    // Print text content if available
    if (node.textContent) {
      console.log(`${" ".repeat((depth + 1) * 2)}${node.textContent}`);
    }

    // Recursively render child nodes
    for (const child of node.children) {
      this.render(child, depth + 1);
    }

    // Print the closing tag with indentation
    console.log(`${" ".repeat(depth * 2)}</${node.tagName}>`);
  }
}

// Example usage
const myDOM = new SimpleDOM();

const divElement = myDOM.createElement("div");
const pElement = myDOM.createElement("p");
const textNode = myDOM.createTextNode("Hello, World!");

myDOM.appendChild(myDOM.root, divElement);
myDOM.appendChild(divElement, textNode);

myDOM.render();