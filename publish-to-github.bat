@echo off
echo ========================================
echo Publishing Hercai AI MakeCode Extension
echo ========================================

echo Step 1: Authenticate with GitHub
gh auth login

echo Step 2: Create GitHub repository
gh repo create hercai-ai-makecode-extension --public --description "AI-powered blocks for Minecraft Education Edition using Hercai AI"

echo Step 3: Add GitHub remote
git remote add origin https://github.com/%USERNAME%/hercai-ai-makecode-extension.git

echo Step 4: Push to GitHub
git branch -M main
git push -u origin main

echo ========================================
echo Repository published successfully!
echo Your extension is now available at:
echo https://github.com/%USERNAME%/hercai-ai-makecode-extension
echo ========================================

echo To use in MakeCode:
echo 1. Go to MakeCode for Minecraft Education Edition
echo 2. Click Extensions
echo 3. Paste your GitHub URL
echo 4. Import the extension

pause