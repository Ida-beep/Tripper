import react from "react";
/* 
The TableScaffold function takes three props and returns a table based on a passed object.
    Props to pass
        theaders    =   [pass an array of strings containing the headers to Display]
        tdata       =   {pass an object}
        tkey        =   [pass an array of the keys the tdata should display] - should match the headers 
*/

function TableScaffold(props){
    
    // Takes props array and return as tableheaders
    const rowHeaders = props.theaders.map(header => {
        return(<th>{header}</th>)
    })
    
    // Takes props object and return as tabledata
    const rowData = props.tdata.map(tdata => {
        const rowDataValue = props.tkey.map(header => {
            return(
                <td>{tdata[header]}</td>
                )})
        
        return(
            <tr>{rowDataValue}</tr>
        )
    }
   )
    
    return(
        <table>
            <thead>
                <tr>
                    {rowHeaders}
                </tr>
            </thead>
            <tbody>
                    {rowData} 
            </tbody>
        </table>
    )
}

export default TableScaffold