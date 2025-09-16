#!/bin/bash
cd ~/promptunivers-site/prompts || exit
for f in *.txt; do
  [ -f "$f" ] || continue
  base=$(basename "$f" .txt)
  cp "$f" "$base.csv"
  cp "$f" "$base.docx"
done
rclone sync ~/promptunivers-site/prompts pu_drive:PromptUnivers/packs --create-empty-src-dirs
