#!/bin/bash

# Use `bash tools/new_component.sh <component_name>` to create a new component.

# Be careful, because, right now, this script does not guarantee you won't
# overwrite anything, although you can always get it back with Git.

# Don't forget to also define the element on the `src/infra/setup.ts` file.

COMPONENT_NAME=$1

cd src/components/ || exit 1

[ ! -f "$COMPONENT_NAME" ] && touch "$COMPONENT_NAME.ts"

exit 0
