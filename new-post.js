const fs = require("fs");
const path = require("path");

function parseDate(date, delimeter = "-") {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  return `${year}${delimeter}${month}${delimeter}${day}`;
}

function main(argv) {
  if (argv.length < 3) {
    console.log("Error: Please enter blog title");
    process.exit(1);
  }
  let title = argv[2];
  let postsDir = path.join(__dirname, `src`, `posts`);

  let date = parseDate(new Date());

  let newPostDir = path.join(postsDir, `${date}-${title}`);

  if (fs.existsSync(newPostDir)) {
    console.log(`Directory exists at ${newPostDir}`);
    process.exit(1);
  }
  fs.mkdirSync(newPostDir);
  console.log(`Made Directory at ${newPostDir}`);

  let newPostPath = `${path.join(newPostDir, `index`)}.md`;

  fs.writeFile(
    newPostPath,
    `---
title: ${title}
---
`,
    err => {
      console.log("Error writing to file");
      console.log(err);
    }
  );
}

main(process.argv);

