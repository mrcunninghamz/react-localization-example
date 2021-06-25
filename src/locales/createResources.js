const fs = require('fs');
const xliff = require('xliff')

function writeFileCallback(err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
}

function writeTranslationFile(dir, content){

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, {
      recursive: true
    });
  }
  fs.writeFile(`${dir}/translation.json`, JSON.stringify(content), writeFileCallback);
}

function createResources() {
  console.log(`Getting XLF file from directory ${process.cwd()}`);
  let xml_string = fs.readFileSync("./src/locales/raw/example.fr.xlf", "utf8")
  console.log(xml_string);

  console.log("Converting xml to js")
  xliff.xliff2js(xml_string, (err, res) => {
    console.log("Converted xml to js")
    console.log(JSON.stringify(res))

    const en = xliff.sourceOfjs(res)
    const fr = xliff.targetOfjs(res);

    console.log("writing files")
    writeTranslationFile("./public/locales/en", en);
    writeTranslationFile("./public/locales/fr", fr);
  });
}

createResources();