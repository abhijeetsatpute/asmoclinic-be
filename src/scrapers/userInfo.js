const extractDataFromTable = (table) => {
  const data = {};

  let currentGroup = "";

  const rows = table.querySelectorAll("tr");
  rows.forEach((row) => {
    const cells = row.querySelectorAll("td");
    if (cells.length === 1) {
      currentGroup = cells[0].textContent.trim();
      data[currentGroup] = [];
    } else if (cells.length === 2) {
      const headerText = cells[0].textContent.trim();
      const contentText = cells[1].textContent.trim();
      if (!data[currentGroup]) {
        data[currentGroup] = [];
      }
      if (headerText && contentText) {
        data[currentGroup].push({ [headerText]: contentText });
      } else if (contentText) {
        data[currentGroup].push(contentText);
      }
    }
  });

  return data;
};

const tables = document.querySelectorAll(".table");

const extractedData = Array.from(tables).map((table) =>
  extractDataFromTable(table)
);

console.log(extractedData);
