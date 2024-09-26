#!/bin/bash
# This script tells you the size of the body when a request is made to a page
curl -s "$1" | wc -c
