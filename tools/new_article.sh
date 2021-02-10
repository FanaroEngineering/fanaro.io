#!/bin/bash

# Use `tools/new_article.sh <article_name>` to create a new article.

ARTICLE_NAME=$1

cd articles || exit

mkdir "$ARTICLE_NAME"

cd "$ARTICLE_NAME" || exit

touch "$ARTICLE_NAME.html"

exit 0
