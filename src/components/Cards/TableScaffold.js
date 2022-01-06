/**
 * TableScaffold formats input to fit to Card.js.
 *      theaders    =   [pass an array of strings containing the headers to Display]
        tdata       =   {pass an object}
        tkey        =   [pass an array of the keys the tdata should display] - should match the headers
 */

function TableScaffold(props) {
  const rowHeaders = props.theaders.map((header) => {
    return <th key={header}>{header}</th>;
  });
  const rowData = props.tdata.map((tdata) => {
    const rowDataValue = props.tkey.map((header, index) => {
      if (tdata[header].constructor === Array) {
        let tableDatalist = "";
        for (let i = 0; i < tdata[header].length; i++) {
          tableDatalist += tdata[header][i] + " ";
        }
        return <td key={tdata.id}>{tableDatalist}</td>;
      }
      return <td key={index}>{tdata[header]}</td>;
    });
    return (
      <tr
        className="trow"
        onClick={() => props.onSelection(tdata)}
        key={props.tdata}
      >
        {rowDataValue}
      </tr>
    );
  });

  return (
    <table key={props.tTableKey}>
      <thead key={props.tHeadKey}> 
        <tr>{rowHeaders}</tr>
      </thead>
      <tbody key={props.tBodyKey}>{rowData}</tbody>
    </table>
  );
}

export default TableScaffold;
