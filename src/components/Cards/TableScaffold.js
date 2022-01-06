/**
 * TableScaffold formats input to fit to Card.js.
 *      theaders    =   [pass an array of strings containing the headers to Display]
        tdata       =   {pass an object}
        tkey        =   [pass an array of the keys the tdata should display] - should match the headers
 */


// Creates random key for children in scaffold - This is Bad practice - but for now it removes the "missing key" warning.  
function createKey(){
  const randomKey = Math.random()
  return randomKey
}

function TableScaffold(props) {
  const rowHeaders = props.theaders.map((header) => {
    return <th key={createKey()}>{header}</th>;
  });
  const rowData = props.tdata.map((tdata) => {
    const rowDataValue = props.tkey.map((header) => {
      if (tdata[header].constructor === Array) {
        let tableDatalist = "";
        for (let i = 0; i < tdata[header].length; i++) {
          tableDatalist += tdata[header][i] + " ";
        }
        return <td key={createKey()}>{tableDatalist}</td>;
      }
      return <td key={createKey()}>{tdata[header]}</td>;
    });
    return (
      <tr
        className="trow"
        onClick={() => props.onSelection(tdata)}
        key={createKey()}
      >
        {rowDataValue}
      </tr>
    );
  });

  return (
    <table >
      <thead> 
        <tr>{rowHeaders}</tr>
      </thead>
      <tbody >{rowData}</tbody>
    </table>
  );
}

export default TableScaffold;
