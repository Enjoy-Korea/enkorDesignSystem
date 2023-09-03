/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");

// 정의된 경로 확인
const defaultPath = path.join(__dirname, "../");
const generatedDir = path.join(defaultPath, "generated");

// .tsx 확장자를 가진 파일만 필터링
const iconFiles = fs
  .readdirSync(generatedDir)
  .filter((file) => file.endsWith(".tsx"));

const generateExportCode = (fileName) =>
  `export { default as ${fileName}Icon } from './generated/${fileName}';`;

const generatedCodes = iconFiles
  .map((iconFile) => {
    const fileName = path.basename(iconFile, ".tsx");
    return generateExportCode(fileName, `${fileName}Icon`);
  })
  .join("\n");

// 파일 쓰기: 오류가 발생하면 콘솔에 출력
fs.writeFile(
  path.join(defaultPath, "export.generated.ts"),
  generatedCodes,
  (error) => {
    if (error) {
      console.error("An error occurred:", error);
      throw error;
    }
    console.log("export.generated.ts has been saved!");
  }
);
