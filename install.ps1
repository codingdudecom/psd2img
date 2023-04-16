$packageName = 'psd2img'
$installDir = "$(Split-Path -parent $MyInvocation.MyCommand.Definition)"
$fileLocation = Join-Path $installDir "psd2img.exe"

Write-Host "Copying $packageName files..."
Copy-Item $fileLocation -Destination "$($env:ChocolateyInstall)\lib\$($packageName)" -Force

Write-Host "Creating $packageName.bat..."
New-Item "$($env:ChocolateyInstall)\bin\$($packageName).bat" -ItemType "file" -Value "@echo off`n`" + "`"" + "$($env:ChocolateyInstall)\lib\$($packageName)\psd2img.exe`" + "`" `%*"

Write-Host "$packageName has been installed."
