import { Table } from "@/Interface/Table";
import { ChangeEvent } from "react";

export type ITableProps = {
    onSelectionChange?:(selectIds:string[])=> void;
    data:Table
} 