#!/bin/bash

# @raycast.author asantos00
# @authorURL https://github.com/asantos00
# @description Evaluates a deno script and shows the result
# @raycast.schemaVersion 1
# @raycast.title deno - eval
# @raycast.mode silent
# @raycast.packageName asantos00

# @raycast.argument1 { "type": "text", "placeholder": "Deno code to execute" }

deno eval "$1"
