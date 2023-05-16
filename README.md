![NodeLine](https://ik.imagekit.io/artim/Frame_1__3_.png?updatedAt=1684202947925)


# NodeLine

NodeLine is a JavaScript library for creating dynamic connections between graphical elements.

## Description

The NodeLine library offers a simple and flexible way to add connection functionalities between elements in JavaScript projects. With this library, you can create dynamic visual lines to connect different elements, enabling an interactive and intuitive experience for users.

## Resources

- Rendering a line between selected elements.
- Support for different types of elements such as text boxes, images, and custom shapes.

## Installation 

#### Manual installation. :

Import the library into your project/file.js

```javascript 
import { NodeLine } from "node-line.main.js";
```
#### Installation NPM. :

```bash
npm install node-line
```

## Use 

When importing the library into your project, instantiate the NodeLine class, and you can assign each instance to a constant : 

```javascript
const myNode = new NodeLine()
```
After doing that, you should pass the required arguments :
 
  ```javascript
const myNode = new NodeLine(elementA,elementB,elementRender);
```
 
 - elementA ( The element where the starting point A of the line begins. )
 - elementB ( The element where the ending point B of the line terminates )
 - elementRender ( The container where the line should be rendered. ex: <body>... )
 
After doing that, you should invoke the function that creates the line :

 ```javascript
 myNode.createNode();
```

If you are assigning NodeLine to an element with dynamic proportion or displacement, such as [DnD](https://pt.wikipedia.org/wiki/Drag-and-drop), you should call the function that updates the line whenever there is any event. : 

 ```javascript
 myNode.updatePath();
```

## Example 

Create an 'index.html' file and an 'index.js' file, and then include the 'index.js' file in your 'index.html' file.
<br>
Afterward, add two elements, A and B, to your HTML : 

 ```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>NodeLine Example</title>
</head>
<body>
    <!-- ... -->
    
    <div id="my-element-a"></div>
    <div id="my-element-b"></div>
    
    <!-- ... -->
    
    <script type="module" src="index.js"></script>
</body>
</html>

```

In your 'index.js' file, import the 'NodeLine' library, add your HTML elements, and instantiate the 'NodeLine()' class with your arguments : 

 ```javascript
 import { NodeLine } from "node-line.main.js";
 
 const myElementA = document.getElementById("my-element-a");
 const myElementB = document.getElementById("my-element-b");
 
 const body = document.body;
 
 const myNode = new NodeLine(myElementA,myElementB,body)
```

In this example, we used <code>const body = document.body</code> to obtain a reference to the 'body' tag and add NodeLine to the body. However, you can use any other supported element as the container.

It is possible that your browser, due to security reasons, may require you to be on a server. If this happens, you can use a local server for this purpose, such as [Xampp](https://www.apachefriends.org/pt_br/download.html)
 or if you are using Visual Studio Code, you can use the extension [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

Read more about [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)

## Roadmap 

- Detach NodeLine from the element and reconnect it to another supported element
- NodeLine and DotLine configurations
- ~~Function to update NodeLine~~ ( Completed )

## Contribute 

To contribute to the NodeLine project, you can clone the repository and create a pull request with your changes. You will be very welcome as a contributor to the project.

<code>https://github.com/Artim-Digital/node-line.git</code>

## Licença - MIT

Copyright 2023 Artim Software and All Contributors.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


-- 

Development with ❤️ in Brazil.
