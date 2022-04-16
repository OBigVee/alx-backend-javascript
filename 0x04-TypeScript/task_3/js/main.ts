/// <reference path="crud.d.ts" />
import { RowID } from "./interface";
import { RowElement } from "./interface";
import * as dCRUD from "./crud"

let objRow:RowElement = {
    firstName: "Guillaume",
    lastName: "Salva"
}


const newRowID: RowID = dCRUD.insertRow(objRow);

const updatedRow: RowElement= {
    firstName: "Guillaume",
    lastName: "Salva",
    age:23
};

dCRUD.updatedRow(newRowID,updatedRow);
dCRUD.deleteRow(newRowID);
