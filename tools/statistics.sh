#!/bin/bash

tokei articles/ src/

printf "\n"
printf "Total Words Written: "
find articles/ -type f -exec wc -w {} + | awk '/total/{print $1}' | paste -sd+ | bc

exit 0
