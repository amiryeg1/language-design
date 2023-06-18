const fs = require("fs").promises;

const Converter = async (inputFilePath, outputFilePath) => {
  let outputContent = [];
  let index = 0;
  const data = await fs.readFile(inputFilePath, "utf8");
  const lines = data.split("\n");

  for (const line of lines) {
    const trimmedLine = line.trim();
    const [type, valueStr] = trimmedLine.split(" ");
    const byte = type === "int" ? 2 : 1;
    const values = valueStr.replace(/;/g, "").split(",");

    for (const value of values) {
      const isArray = value.endsWith("]");
      if (isArray) {
        const datas = value.split(/\[(\d+)\]/g).filter(Boolean);
        const x = datas[2] ? datas[2] * byte : byte;
        const y = datas[2] && byte;
        const text = `${datas[0]} ${index} + ${x}X ${
          y ? "+ " + y + "Y" : ""
        }\n`;
        outputContent.push(text);
        let total = datas.slice(1).reduce((acc, val) => acc * val, 1);
        index += byte * total;
      } else {
        const text = `${value} ${index}\n`;
        outputContent.push(text);
        index += byte;
      }
    }
  }

  await fs.writeFile(outputFilePath, outputContent.join(""), "utf-8");
  console.log(`Output file created at ${outputFilePath}`);
};

const inputFilePath = "input.txt";
const outputFilePath = "output.txt";

Converter(inputFilePath, outputFilePath);
