Write-Host "========================================" -ForegroundColor Green
Write-Host "Publishing Hercai AI MakeCode Extension" -ForegroundColor Green  
Write-Host "========================================" -ForegroundColor Green

Write-Host "`nStep 1: Authenticate with GitHub" -ForegroundColor Yellow
gh auth login

Write-Host "`nStep 2: Create GitHub repository" -ForegroundColor Yellow
gh repo create hercai-ai-makecode-extension --public --description "AI-powered blocks for Minecraft Education Edition using Hercai AI"

Write-Host "`nStep 3: Add GitHub remote" -ForegroundColor Yellow
& "C:\Program Files\Git\bin\git.exe" remote add origin "https://github.com/$env:USERNAME/hercai-ai-makecode-extension.git"

Write-Host "`nStep 4: Push to GitHub" -ForegroundColor Yellow
& "C:\Program Files\Git\bin\git.exe" branch -M main
& "C:\Program Files\Git\bin\git.exe" push -u origin main

Write-Host "`n========================================" -ForegroundColor Green
Write-Host "Repository published successfully!" -ForegroundColor Green
Write-Host "Your extension is now available at:" -ForegroundColor Green
Write-Host "https://github.com/$env:USERNAME/hercai-ai-makecode-extension" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Green

Write-Host "`nTo use in MakeCode:" -ForegroundColor Yellow
Write-Host "1. Go to MakeCode for Minecraft Education Edition" -ForegroundColor White
Write-Host "2. Click Extensions" -ForegroundColor White
Write-Host "3. Paste your GitHub URL" -ForegroundColor White
Write-Host "4. Import the extension" -ForegroundColor White

Read-Host "`nPress Enter to continue"