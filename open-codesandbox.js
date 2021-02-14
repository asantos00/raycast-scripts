#!/usr/bin/env node

// @raycast.author asantos00
// @authorURL https://github.com/asantos00
// @description Creates and opens a sandbox at codesandbox.io with the sent template
// @raycast.schemaVersion 1
// @raycast.title codesandbox.io - open
// @raycast.mode silent
// @raycast.packageName asantos00
// @raycast.icon images/codesandbox.png
// @raycast.argument1 { "type": "text", "placeholder": "gatsby, nuxt, next, parcel, static" }

const { exec } = require("child_process");

const CODE_SANDBOX_URL = "https://codesandbox.io/s/";
const [template] = process.argv.slice(2);

const sandboxConfig = template ? {
    "sandbox.config.json": {
      content: `{\"template\": \"${template}\"}`,
    },
} : null;

const parameters = JSON.stringify({
  files: {
    "src/index.js": {
      content: 'console.log("Created with Raycast")',
    },
    "package.json": {
      content: JSON.stringify({
        dependencies: {},
        name: "created-with-raycast",
      }),
    },
    ...sandboxConfig
  },
});

const command = `curl 'https://codesandbox.io/api/v1/sandboxes/define?json=1' -X POST -H "Content-Type: application/json" -H "Accept: application/json" --data-binary '${parameters}'`;
exec(command, (error, stdout) => {
  if (error) {
    console.log("An error happened", stdout);

    return;
  }

  const response = JSON.parse(stdout);

  if (response.errors) {
    console.error(response.errors);
    return;
  }

  const newSandboxURL = `${CODE_SANDBOX_URL}${response.sandbox_id}`;
  exec(`open ${newSandboxURL}`, (error, stdout) => {
    if (error) {
      console.log("An error happened", stdout);

      return;
    }
  });
});
