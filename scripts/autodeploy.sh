#!/bin/bash
cd ~/promptunivers-site || exit
git add .
git commit -m "Auto deploy $(date +%F_%T)"
git push origin main
