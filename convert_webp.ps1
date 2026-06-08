$dir = "images\sec-mf-Tutorials"
$files = Get-ChildItem -Path $dir -Filter "*.png"
foreach ($f in $files) {
    $out = [System.IO.Path]::ChangeExtension($f.FullName, ".webp")
    cmd.exe /c "npx -y cwebp-bin `"$($f.FullName)`" -o `"$out`""
    if (Test-Path $out) {
        Remove-Item $f.FullName -Force
    }
}
Write-Host "Done"
