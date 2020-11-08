import Papa from 'papaparse';
import Reader from "./Reader";

const fileInput = document.getElementById('inputFileUpload');
const target = document.getElementById('output');

const csvReader = new Reader(target);

fileInput.addEventListener('change', () => {
  Papa.parse(fileInput.files[0], {
    skipEmptyLines: true,
    
    complete: results => {
      csvReader.update(results.data);
    }
  });
});





