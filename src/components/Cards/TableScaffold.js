/**
 * TableScaffold formats input to fit to Card.js.
 *      theaders    =   [pass an array of strings containing the headers to Display]
        tdata       =   {pass an object}
        tkey        =   [pass an array of the keys the tdata should display] - should match the headers
 */

function TableScaffold({ theaders, tkey, tdata, onSelection }) {
  //Maps through the array of objects passed as props (tdata)
  const tableData = tdata.map((object) => {
    // Maps through the array of keys passed as props (tkey) - Returns <td> of each key passed to object
    const data = tkey.map((key, index) => (
      <td key={index}>
        {Array.isArray(object[key]) ? object[key].join(", ") : object[key]}
      </td>
    ));

    return (
      <tr className="trow" key={object.id} onClick={() => onSelection(object)}>
        {data}
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          {theaders.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>{tableData}</tbody>
    </table>
  );
}

export default TableScaffold;
