#!/bin/bash

# Usage: ./scraper.sh <urls_file>

URLS_FILE=$1

if [ -z "$URLS_FILE" ]; then
  echo "Usage: $0 <urls_file>"
  exit 1
fi

while IFS= read -r URL; do
  # Fetch the HTML content of the game page
  HTML_CONTENT=$(curl -s -L -A "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36" "$URL")

  # Extract the title, description, and image URL using pup
  TITLE=$(echo "$HTML_CONTENT" | pup 'title text{}' | sed -e 's/ - Play Now on CrazyGames//' | sed 's/"/\\"/g')
  DESCRIPTION=$(echo "$HTML_CONTENT" | pup 'meta[name="description"] attr{content}' | sed 's/"/\\"/g')
  IMAGE_URL=$(echo "$HTML_CONTENT" | pup 'meta[property="og:image"] attr{content}')

  # Extract the game slug from the URL for the embed URL
  SLUG=$(basename "$URL")

  # Generate the game object
  GAME_OBJECT="{ id: 0, title: \"$TITLE\", description: \"$DESCRIPTION\", image: \"$IMAGE_URL\", embedUrl: \"https://www.crazygames.com/embed/$SLUG\" },"

  echo "$GAME_OBJECT"
done < "$URLS_FILE"
