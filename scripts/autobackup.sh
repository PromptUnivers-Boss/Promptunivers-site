#!/bin/bash
rclone sync ~/promptunivers-site pu_drive:PromptUnivers/backups/$(date +%F) --create-empty-src-dirs
