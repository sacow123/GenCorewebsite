@echo off
setlocal
set "PROJECT_ROOT=%~dp0"

start "GenCore Local Server" /min cmd /c ""cd /d "%PROJECT_ROOT%" && node tools\local-server.js 8080""
timeout /t 2 /nobreak >nul
start "" "http://127.0.0.1:8080/"

endlocal
