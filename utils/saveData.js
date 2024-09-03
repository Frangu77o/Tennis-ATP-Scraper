const xlsx = require('xlsx');
const path = require('path');
const fs = require('fs');

function saveData(data, fileName) {
    const worksheet = xlsx.utils.json_to_sheet(data);

    worksheet['!autofilter'] = { ref: "A1:C4" };

    const workbook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(workbook, worksheet, 'Foglio1');

    const dirPath = path.resolve(__dirname, '..', 'data');
    const filePath = path.join(dirPath, fileName + '.xlsx');

    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }

    xlsx.writeFile(workbook, filePath);

    console.log('File Excel creato con successo');
}


module.exports = saveData;