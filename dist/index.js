import { NodeLine } from "./node-line.main.js";

const divA = document.getElementById("divA");
const divB = document.getElementById("divB");
const divC = document.getElementById("divC");

const body = document.body;

const ligue = new NodeLine(divA, divB, body);
ligue.createNode();

const ligue2 = new NodeLine(divA,divC,body);
ligue2.createNode();

const ligue3 = new NodeLine(divC,divB,body);
ligue3.createNode();