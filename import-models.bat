@echo off
echo 正在运行模型数据导入脚本...
node lib/import-models.js
echo.
echo 如果没有错误信息，说明脚本已成功运行
echo 请检查lib目录下的models-data-complete.ts文件
echo.
pause 