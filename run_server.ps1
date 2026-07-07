$ErrorActionPreference = "Stop"

$port = 8080
$root = $PSScriptRoot
if (-not $root) { $root = (Get-Location).Path }

$node = Get-Command node -ErrorAction SilentlyContinue
if (-not $node) {
    Write-Host ""
    Write-Host "Node.js could not be found." -ForegroundColor Red
    Write-Host "Install Node.js or run this project from an environment where the 'node' command is available." -ForegroundColor Yellow
    Write-Host ""
    Read-Host "Press Enter to close"
    exit 1
}

$url = "http://127.0.0.1:$port/"
Write-Host ""
Write-Host "Opening GenCore local server..." -ForegroundColor Green
Write-Host "Browser URL: $url" -ForegroundColor Cyan
Write-Host ""

Start-Process $url
Set-Location $root
& node "tools/local-server.js" $port
