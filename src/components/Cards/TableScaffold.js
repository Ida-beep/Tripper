/**
 * @public TableScaffold formats input to fit to Card.js.
 *      theaders    =   [pass an array of strings containing the headers to Display]
        tdata       =   {pass an object}
        tkey        =   [pass an array of the keys the tdata should display] - should match the headers
 */
function TableScaffold(props) {
  const rowHeaders = props.theaders.map((header) => {
    return <th key={header.id}>{header}</th>;
  });
  const rowData = props.tdata.map((tdata) => {
    const rowDataValue = props.tkey.map((header) => {
      if (tdata[header].constructor === Array) {
        let tableDatalist = "";
        for (let i = 0; i < tdata[header].length; i++) {
          tableDatalist += tdata[header][i] + " ";
        }
        return <td key={"tableDataList"}>{tableDatalist}</td>;
      }
      return <td key={tdata[header].id}>{tdata[header]}</td>;
    });
    return (
      <tr
        className="trow"
        onClick={() => props.onSelection(tdata)}
        key={props.tdata.id}
      >
        {rowDataValue}
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>{rowHeaders}</tr>
      </thead>
      <tbody>{rowData}</tbody>
    </table>
  );
}

export default TableScaffold;
