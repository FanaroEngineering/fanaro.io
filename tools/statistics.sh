#!/bin/bash

tokei articles/ src/

find articles/ -type f -exec wc -w {} + | awk '/total/{print $1}' | paste -sd+ | bc
find src/ -type f -exec wc -w {} + | awk '/total/{print $1}' | paste -sd+ | bc

exit 0
