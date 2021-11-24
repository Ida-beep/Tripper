import react from "react";

function TableHeader(props){
    return(
        <th>{props.theader}</th>
    )
}
function TableRowData(props){
    return(
        <td>{props.tdata[props.h]}</td>
    )
}

function TableData(props){
    const tDataItem = props.theader.map(header => <TableRowData tdata={props.tdata} h={header}/>)
    return(
        <tr>
            {tDataItem}
        </tr>
    )
}

function TableScaffold(props){
    const tableHeaders = props.theaders.map(tableheader => <TableHeader theader={tableheader} />)
    const tableData = props.tdata.map(tdata => <TableData theader={props.tkey} tdata={tdata}/>)
    
    return(
        <table>
            <thead>
                <tr>
                    {tableHeaders}
                </tr>
            </thead>
            <tbody>
                    {tableData} 
            </tbody>
        </table>
    )
}

export default TableScaffold