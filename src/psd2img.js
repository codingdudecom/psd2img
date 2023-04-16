var PSD = require('psd');
const fs = require('fs');

const psdPath = process.argv[2];

const args = process.argv.slice(2);
let inputFile;
let outputFile;
let exportLayers = false;
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--output' || args[i] === '-o') {
    outputFile = args[i + 1];
    i++; // skip the next argument, since it's the output file path
  } else if (args[i] === '--layers' || args[i] === "-l"){
    exportLayers = true;
  } else {
    inputFile = args[i];
  }
}

if (outputFile && !exportLayers && !outputFile.endsWith(".png")){
  console.error("ERROR: Only PNG output supported");
  return;
}


if (!inputFile || !inputFile.endsWith(".psd")){
  console.error("No input file provided.\n\nUsage:\n\n psd2img.exe PSD_FILE -o OUTPUT_FILE\n\n"+"psd2img.exe PSD_FILE -l -o OUTPUT_FOLDER");
  return;
}

console.log("Processing...");
// You can also use promises syntax for opening and parsing
PSD.open(inputFile).then(function (psd) {
  if (!exportLayers){
    if (!outputFile){
      outputFile = "./"+'./output.png';
    }
    return psd.image.saveAsPng(outputFile);
  } else {
    if (!outputFile){
      outputFile = "./";
    }
    if (!fs.existsSync(outputFile)) {
      fs.mkdirSync(outputFile);
    }
    outputFile = (outputFile +"/").replace("//","/");

     psd.tree().descendants().forEach(function (node) {
        if (node.isGroup()) return true;
        console.log(`Exporting "${outputFile + node.name + ".png"}"`);
        node.saveAsPng(outputFile + node.name + ".png").catch(function (err) {
          console.log(err.stack);
        });
      });
  }
}).then(function () {
  if (exportLayers){
    console.log(`Layers exported to ${outputFile == "./"?"current directory":outputFile}`);
  } else {
    console.log(`Output file created: ${outputFile}`);
  }

  console.log("\n");
});
