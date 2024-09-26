#!/usr/bin/env bash

# Check if a URL is provided
if [ -z "$1" ]; then
  echo "Usage: $0 <URL>"
  exit 1
fi

# Send a request to the URL and get the size of the response body
curl -s "$1" | wc -c
