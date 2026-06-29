$utf8 = [System.Text.Encoding]::UTF8
[Console]::OutputEncoding = $utf8

$port = 8080
$root = $PSScriptRoot
if (-not $root) { $root = (Get-Location).Path }

$listener = New-Object System.Net.HttpListener
$url = "http://localhost:$port/"
$listener.Prefixes.Add($url)

try {
    $listener.Start()
} catch {
    $port = 8085
    $url = "http://localhost:$port/"
    $listener = New-Object System.Net.HttpListener
    $listener.Prefixes.Add($url)
    $listener.Start()
}

Write-Host ""
Write-Host "=========================================================" -ForegroundColor Green
Write-Host "  🚀 GenCore 웹사이트 로컬 서버가 실행되었습니다!" -ForegroundColor Yellow
Write-Host "  🌐 브라우저 주소: $url" -ForegroundColor Cyan
Write-Host "  ⚠️ 안내: 이 검은색 창을 닫으면 서버가 종료됩니다." -ForegroundColor White
Write-Host "=========================================================" -ForegroundColor Green
Write-Host ""

Start-Process $url

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        $localPath = [System.Net.WebUtility]::UrlDecode($request.Url.LocalPath.TrimStart('/'))
        if (-not $localPath -or $localPath -eq "") { $localPath = "index.html" }
        
        $filePath = Join-Path $root $localPath
        if ((Test-Path $filePath) -and (Get-Item $filePath).PSIsContainer) {
            $filePath = Join-Path $filePath "index.html"
        }
        
        if (Test-Path $filePath -PathType Leaf) {
            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $contentType = "application/octet-stream"
            switch ($ext) {
                ".html" { $contentType = "text/html; charset=utf-8" }
                ".css"  { $contentType = "text/css; charset=utf-8" }
                ".js"   { $contentType = "application/javascript; charset=utf-8" }
                ".png"  { $contentType = "image/png" }
                ".jpg"  { $contentType = "image/jpeg" }
                ".jpeg" { $contentType = "image/jpeg" }
                ".webp" { $contentType = "image/webp" }
                ".gif"  { $contentType = "image/gif" }
                ".svg"  { $contentType = "image/svg+xml" }
                ".json" { $contentType = "application/json; charset=utf-8" }
                ".woff" { $contentType = "font/woff" }
                ".woff2" { $contentType = "font/woff2" }
            }
            $response.ContentType = $contentType
            $response.ContentLength64 = $bytes.Length
            $response.StatusCode = 200
            try { $response.OutputStream.Write($bytes, 0, $bytes.Length) } catch {}
        } else {
            $response.StatusCode = 404
            $msg = $utf8.GetBytes("404 Not Found: $localPath")
            try { $response.OutputStream.Write($msg, 0, $msg.Length) } catch {}
        }
        $response.OutputStream.Close()
    } catch {}
}
