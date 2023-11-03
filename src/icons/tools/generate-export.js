/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");

// 정의된 경로 확인
const defaultPath = path.join(__dirname, "../");
const generatedDir = path.join(defaultPath, "generated");

const renameFilesWithIcon = () => {
  const iconFiles = fs
    .readdirSync(generatedDir)
    .filter((file) => file.endsWith(".tsx"));

  iconFiles.forEach((iconFile) => {
    const oldPath = path.join(generatedDir, iconFile);
    let fileNameWithoutExt = path.basename(iconFile, ".tsx");

    // If the filename already ends with 'Icon', remove it.
    if (fileNameWithoutExt.endsWith("Icon")) {
      fileNameWithoutExt = fileNameWithoutExt.slice(0, -4);
    }

    const newPath = path.join(generatedDir, `${fileNameWithoutExt}Icon.tsx`);
    fs.renameSync(oldPath, newPath);
  });
};

// Reset the generated.ts file
fs.writeFileSync(path.join(defaultPath, "generated.ts"), "", "utf8");

// 기존 generated.ts 파일에서 export 문을 추출하여 existingExports Set에 저장
const existingExportContent = fs.readFileSync(
  path.join(defaultPath, "generated.ts"),
  "utf8",
);
const existingExports = new Set();
existingExportContent.split("\n").forEach((line) => {
  const match = line.match(/export \{ (.+?) \}/);
  if (match) {
    existingExports.add(match[1]);
  }
});

const generateExportCode = () => {
  const iconFiles = fs
    .readdirSync(generatedDir)
    .filter((file) => file.endsWith(".tsx"));

  return iconFiles
    .map((iconFile) => {
      const fileName = path.basename(iconFile, ".tsx");
      const normalizedFileName = fileName.endsWith("Icon")
        ? fileName
        : `${fileName}Icon`;

      // 이미 existingExports에 존재하면 skip
      if (existingExports.has(normalizedFileName)) {
        return null;
      }

      return `export { ${normalizedFileName} } from './generated/${normalizedFileName}';`;
    })
    .filter(Boolean) // null 값을 제거
    .join("\n");
};

// 실제 파일 이름 변경
renameFilesWithIcon();

// 새로운 export 코드 생성
const newExportCode = generateExportCode();

if (newExportCode) {
  // 기존 파일 내용 읽기
  const existingContent = fs.readFileSync(
    path.join(defaultPath, "generated.ts"),
    "utf8",
  );

  // 새로운 export 코드 추가
  const updatedContent = existingContent
    ? existingContent + "\n" + newExportCode // 기존 내용이 있으면 줄바꿈 후 추가
    : newExportCode; // 기존 내용이 없으면 그대로 새로운 코드 추가

  // 전체 내용 덮어쓰기
  fs.writeFileSync(
    path.join(defaultPath, "generated.ts"),
    updatedContent,
    (error) => {
      if (error) {
        console.error("An error occurred:", error);
        throw error;
      }
      console.log("generated.ts has been updated!");
    },
  );
}
