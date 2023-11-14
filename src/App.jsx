import { useState } from "react";
import "./App.css";
import { Header, Table } from "./components";

const App = () => {
    const [columns, setColumns] = useState(["Column 1"]);
    const [rows, setRows] = useState([]);

    const addColumn = () => {
        if (columns.length < 9) {
            setColumns((prevColumns) => [
                ...prevColumns,
                `Column ${prevColumns.length + 1}`,
            ]);
            if (rows.length > 0){
                setRows((prevRows) => prevRows.map((row) => [...row, ""]));
            }
        } 
        else alert("Maximum of 9 Columns are Allowed.");
    };

    const addRow = () => {
        setRows((prevRows) => [
            ...prevRows, 
            columns.map((col) => ""),
        ]);
        
        
    };

    return (
        <div className="container-fluid">
        <Header
            columns = {columns}
            rows = {rows}
            addRow = {addRow}
            addColumn = {addColumn}
        />
        <Table
            columns = {columns}
            rows = {rows}
            addColumn = {addColumn}
            setColumns = {setColumns}
            addRow = {addRow}
            setRows = {setRows}
        />
        </div>
    );
    };

export default App;
