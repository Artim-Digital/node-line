export class NodeLine {
    constructor(elementA, elementB, elementRender) {
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  
      const nodeDotA = document.createElement("div");
      const nodeDotB = document.createElement("div");
  
      const RullerLeftRange = document.getElementById("RullerLeftRange");
  
      const nodeDotStyle = `
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border: 1px solid rgb(48,48,48);
        background: #00BF58;
        z-index: 100; 
      `;
  
      nodeDotA.style.cssText = nodeDotStyle;
      nodeDotB.style.cssText = nodeDotStyle;
  
      svg.setAttribute("width", "100%");
      svg.setAttribute("height", "100%");
      svg.style.position = "absolute";
      svg.style.top = 0;
      svg.style.left = 0;
      svg.style.zIndex = "1";
  
      path.setAttribute("d", "M 0 0 L 0 0");
      path.setAttribute("stroke", "#DCDCDC");
      path.setAttribute("stroke-width", "3");
      path.setAttribute("fill", "transparent");
  
      function createNode() {
        elementRender.appendChild(svg);
        svg.appendChild(path);
        elementA.appendChild(nodeDotA);
        elementB.appendChild(nodeDotB)
      }
  
      function settings(line,dot){
        nodeDotA.style.backgroundColor = dot.color;
        nodeDotA.style.width = dot.scale + "px";
        nodeDotA.style.height = dot.scale + "px";
        nodeDotA.style.display = dot.visible;
        if (dot.visible == true){nodeDotA.style.display = "flex"}
        else if (dot.visible == false ){nodeDotA.style.display = "none"}
        path.setAttribute("stroke-width", `${line.scale}`);
        path.setAttribute("stroke", `${line.color}`);
      }
  
      function updatePath() {
        const rect1 = elementA.getBoundingClientRect();
        const rect2 = elementB.getBoundingClientRect();
  
        nodeDotA.style.right = "-15px";
        nodeDotB.style.left = "-15px";
        nodeDotB.style.top = rect2.height / 2 - 7 + "px";
        nodeDotA.style.top = rect2.height / 2 - 7 + "px";
  
        let x1 = rect1.left + rect1.width + 7;
        const y1 = rect1.top + rect1.height / 2;
        let x2 = rect2.left - 7;
        const y2 = rect2.top + rect2.height / 2;
  
        if (rect1.left > rect2.left + rect2.width / 2) {
          x2 = rect2.width + rect2.left + rect2.width - rect2.width + 7;
          x1 = rect1.left - 7;
  
          nodeDotA.style.left = "-15px";
          nodeDotA.style.right = "auto";
  
          nodeDotB.style.right = "-15px";
          nodeDotB.style.left = "auto";
  
        }
  
        if (rect1.left < rect2.left + rect2.width / 2) {
  
          nodeDotA.style.right = "-15px";
          nodeDotA.style.left = "auto";
  
          nodeDotB.style.left = "-15px";
          nodeDotB.style.right = "auto";
  
        }
  
        const xm = (x1 + x2) / 2;
  
        path.setAttribute("d", `M ${x1} ${y1} C ${xm} ${y1}, ${xm} ${y2}, ${x2} ${y2}`);
      }
      
      function removeNode() {
        svg.remove();
        nodeDotA.remove();
        nodeDotB.remove();
        window.removeEventListener("resize", updatePath);
      }
  
      window.addEventListener("resize", updatePath);
  
      updatePath();
  
      this.createNode = createNode;
      this.removeNode = removeNode;
      this.settings = settings;
    }
  }
  