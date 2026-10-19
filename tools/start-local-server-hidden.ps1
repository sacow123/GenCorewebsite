$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path -Parent $PSScriptRoot

# Keep the protected local entry on port 8080 and avoid duplicate servers.
if (Get-NetTCPConnection -LocalPort 8080 -State Listen -ErrorAction SilentlyContinue) {
    exit 0
}

$nodePath = (Get-Command node -ErrorAction Stop).Source
Start-Process -FilePath $nodePath -ArgumentList 'tools/local-server.js', '8080' -WorkingDirectory $projectRoot -WindowStyle Hidden
