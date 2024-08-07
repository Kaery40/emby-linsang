#!/bin/bash

# 创建emby-crx目录并下载所需文件
echo "正在创建emby-crx目录并下载所需文件..."
rm -rf emby-crx
mkdir -p emby-crx
wget -q https://raw.githubusercontent.com/kaery40/emby-css/master/style.css -P emby-crx/
wget -q https://raw.githubusercontent.com/kaery40/emby-css/master/main.js -P emby-crx/
wget -q https://raw.githubusercontent.com/kaery40/emby-css/master/manuallogin.html -P startup/
wget -q https://raw.githubusercontent.com/kaery40/emby-css/master/manuallogin.js -P startup/
wget -q https://raw.githubusercontent.com/kaery40/emby-css/master/common-utils.js -P emby-crx/
wget -q https://raw.githubusercontent.com/Nolovenodie/emby-crx/master/static/js/jquery-3.6.0.min.js -P emby-crx/
wget -q https://raw.githubusercontent.com/Nolovenodie/emby-crx/master/static/js/md5.min.js -P emby-crx/

echo "文件下载成功。"

# 读取index.html文件内容
echo "正在读取index.html内容..."
content=$(cat index.html)

# 检查index.html是否包含emby-crx
if grep -q "emby-crx" index.html; then
    echo "Index.html已包含emby-crx，跳过插入步骤。"
else
    echo "Index.html不包含emby-crx，正在插入代码..."

    # 定义要插入的代码
    code='<link rel="stylesheet" id="theme-css" href="emby-crx/style.css" type="text/css" media="all" />\n<script src="emby-crx/common-utils.js"></script>\n<script src="emby-crx/jquery-3.6.0.min.js"></script>\n<script src="emby-crx/md5.min.js"></script>\n<script src="emby-crx/main.js"></script>\n<script type="text/javascript" src="https://danmaku.movie.kg/ext.js"></script>\n<link rel="stylesheet" href="https://danmaku.movie.kg/ext.css"/>'

    # 在</head>之前插入代码
    new_content=$(echo -e "${content/<\/head>/$code<\/head>}")

    # 将新内容写入index.html文件
    echo -e "$new_content" > index.html
    echo "代码插入成功。"
fi

echo "脚本执行完成。"
