/// <reference path="crud.d.ts" />
import { RowId } from "./interface.ts";
import { RowElement } from "./interface.ts";

import {CRUD}  from "./crud.js";
import {deleteRow} from "./crud.js";

let row:RowElement = {
    firstName:"Guillame",
    lastName:"Salva",
}

const newRowID:RowId = CRUD.insertRow;

const updateRow:RowElement = {
    firstName:"Guillame",
    lastName:"Salva",
    age:23,
}

CRUD.updateRow(newRowID, updateRow);
CRUD.deleteRow(newRowID);

const obj = {firstName: "Guillaume", lastName:"Salva"};
CRUD.insertRow(obj)

const updateDRow:RowElement = {firstName:"Guillaume", lastName:"Salva", age:23};

CRUD.updateDRow(newRowID,updateDRow);

CRUD.deleteRow(125);