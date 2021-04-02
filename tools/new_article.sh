#!/bin/bash

# Use `tools/new_article.sh <article_name>` to create a new article.

# Be careful, because, right now, this script does not guarantee you won't 
# overwrite anything, although you can always get it back with Git.

ARTICLE_NAME=$1

cd articles || exit 1

[ ! -d "$ARTICLE_NAME" ] && mkdir "$ARTICLE_NAME"

cd "$ARTICLE_NAME" || exit 2

[ ! -f "$ARTICLE_NAME" ] && touch "$ARTICLE_NAME.html"

cd ../..

printf "\n<url><loc>https://fanaro.io/articles/$ARTICLE_NAME/$ARTICLE_NAME.html</loc></url>" >> sitemap.xml

exit 0
