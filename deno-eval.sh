#!/bin/bash

# @raycast.author asantos00
# @authorURL https://github.com/asantos00
# @description Evaluates a deno script and shows the result
# @raycast.schemaVersion 1
# @raycast.title deno - eval
# @raycast.mode fullOutput
# @raycast.packageName asantos00
# @raycast.icon images/deno.png

# @raycast.argument1 { "type": "text", "placeholder": "Deno code to execute" }


NO_COLOR=true deno eval -q "console.log($1)"
