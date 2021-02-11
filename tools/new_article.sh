#!/bin/bash

# Use `tools/new_article.sh <article_name>` to create a new article.

# Be careful, because, right now, this script does not guarantee you won't 
# overwrite anything, although you can always get it back with Git.

ARTICLE_NAME=$1

cd articles || exit

mkdir "$ARTICLE_NAME"

cd "$ARTICLE_NAME" || exit

touch "$ARTICLE_NAME.html"

exit 0
