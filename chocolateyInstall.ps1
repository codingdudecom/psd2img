$packageName= 'psd2img'
$toolsDir   = "$(Split-Path -parent $MyInvocation.MyCommand.Definition)"
$url        = 'https://github.com/codingdudecom/psd2img/raw/main/psd2img.exe'
$url64      = 'https://github.com/codingdudecom/psd2img/raw/main/psd2img.exe'

$nodeModulesPath = Join-Path $toolsDir 'node_modules'
$installPath = Join-Path $env:ProgramFiles $packageName

$packageArgs = @{
  packageName   = $packageName
  fileType      = 'exe'
  url           = $url
  url64bit      = $url64

  softwareName  = 'PSD2Img*'

  checksum      = 'A95CCD639A389C083F64B54ECEB46051B820B4E81B9F5E656920AF00D4F0EC89'
  checksumType  = 'sha256'
  checksum64    = 'A95CCD639A389C083F64B54ECEB46051B820B4E81B9F5E656920AF00D4F0EC89'
  checksumType64= 'sha256'

  silentArgs    = "/qn /norestart"
  validExitCodes= @(0, 3010, 1641)
}

Copy-Item "$nodeModulesPath\*" "$installPath\node_modules" -Recurse

#Install-ChocolateyPackage @packageArgs
