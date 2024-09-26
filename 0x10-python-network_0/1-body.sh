#!/usr/bin/env bash
# Get the HTTP status code and store it in 'response'
response=$(curl -s -o /dev/null -w "%{http_code}" "$1"); [ "$response" -eq 200 ] && curl -s "$1"
