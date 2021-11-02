import tableData from "./tableData.json";

function createTable(containerSelector: string, data: Record<string, any>[]) {
  if (data.length === 0) {
    throw new Error("No data to display");
  }

  const tableContainer = document.querySelector(containerSelector);

  if (tableContainer == null) {
    throw new Error("Table must have a container");
  }

  const table = document.createElement("table");
  const tableHeader = table.createTHead();
  const tableBody = table.createTBody();

  const dataKeys = Object.keys(data[0]);

  function createHeaderRow(key: string) {
    const headerRow = document.createElement("th");
    headerRow.textContent = key;

    return headerRow;
  }

  function createDataRow(rowData: (string | number)[]) {
    const dataRow = document.createElement("tr");

    return rowData.reduce((acc, rowItem) => {
      const td = document.createElement("td");
      td.textContent =
        typeof rowItem === "string" ? rowItem : JSON.stringify(rowItem);
      acc.append(td);

      return acc;
    }, dataRow);
  }

  const tableHeaderWithColumns = dataKeys.reduce((acc, key) => {
    acc.append(createHeaderRow(key));
    console.log(key);
    return acc;
  }, tableHeader);

  const tableBodyWithValues = data.reduce((acc, dataObject) => {
    const dataValues = Object.values(dataObject);
    acc.append(createDataRow(dataValues));
    return acc;
  }, tableBody);

  tableContainer.append(table);
}

createTable(".dynamic-table", tableData);
