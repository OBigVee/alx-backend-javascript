/// <reference path="crud.d.ts" />
import { RowId } from "./interface.js";
import { RowElement } from "./interface.js";

import { CRUD } from "./crud.js";
import { deleteRow } from "./crud";

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