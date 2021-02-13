#!/bin/bash

# @raycast.author asantos00
# @authorURL https://github.com/asantos00
# @description Creates and opens a sandbox at codesandbox.io with the sent template
# @raycast.schemaVersion 1
# @raycast.title codesandbox.io - open
# @raycast.mode silent
# @raycast.packageName asantos00
# @raycast.icon images/codesandbox.png

# @raycast.argument1 { "type": "text", "placeholder": "parcel, gatsby, nuxt, next, ember, node, etc" }

curl 'https://codesandbox.io/api/v1/sandboxes/define?json=1' -X POST -H "Content-Type: application/json" -H "Accept: application/json" --data-binary "{\"files\":{\"sandbox.config.json\":{\"content\":{\"template\":\"$1\"}},\"index.js\":{\"content\":\"console.log(\"Created with Raycast\")\"}}}\""


