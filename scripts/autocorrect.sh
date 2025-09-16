#!/bin/bash
# Usage: ./autocorrect.sh "Ton texte ici"
echo "$1" | sed 's/  */ /g' | sed 's/\. *\././g'
