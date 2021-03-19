#!/bin/bash

tokei articles/ src/

find articles/ -type f | xargs wc -w | grep total
find src/ -type f | xargs wc -w | grep total

exit 0
