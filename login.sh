#!/bin/bash

# 容器ID或名称
CONTAINER_ID="emby"

# 下载URL
URL="https://raw.githubusercontent.com/kaery40/emby-css/master/manuallogin.js"

# 目标路径
TARGET_PATH="/system/dashboard-ui/startup/manuallogin.js"

# 临时文件路径
TEMP_FILE="/tmp/manuallogin.js"

# 下载文件
echo "正在从 $URL 下载 manuallogin.js..."
curl -o $TEMP_FILE $URL
if [ $? -ne 0 ]; then
    echo "下载文件失败。退出。"
    exit 1
fi

# 检查容器是否存在
docker inspect $CONTAINER_ID > /dev/null 2>&1
if [ $? -ne 0 ]; then
    echo "容器 $CONTAINER_ID 不存在。退出。"
    exit 1
fi

# 复制文件到容器内
echo "正在将 manuallogin.js 复制到容器 $CONTAINER_ID..."
docker cp $TEMP_FILE $CONTAINER_ID:$TARGET_PATH
if [ $? -ne 0 ]; then
    echo "复制文件到容器失败。退出。"
    exit 1
fi

# 验证替换是否成功
echo "正在验证替换..."
docker exec -it $CONTAINER_ID /bin/bash -c "cat $TARGET_PATH"

# 清理临时文件
rm $TEMP_FILE

echo "manuallogin.js 已成功替换到容器 $CONTAINER_ID 中。"
