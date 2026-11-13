# THE BOYZ · GitHub Pages 公开玩家版

这是从已经确认能运行的 `THE_BOYZ_STORY_STARTED_FIXED_index.html` **原样拆分**的静态网站。没有重写人物选择、关卡、剧情或音频逻辑。

## 发布到原 GitHub 仓库

1. 解压 ZIP，进入 `THE_BOYZ_GITHUB_SPLIT_READY` 文件夹。
2. 打开原 GitHub 仓库，在仓库根目录使用 **Add file → Upload files**。
3. 将 `index.html`、`style.css`、五个 `.js` 文件及 `assets` 文件夹一起拖入上传区。**不要直接上传 ZIP**。
4. 检查 `index.html` 位于仓库根目录，`assets/cover-mobile.jpg` 等图片在 `assets/` 文件夹内；点击 **Commit changes**。
5. 等 GitHub Pages 发布完成，用原来的链接刷新访问。若原仓库已经启用 Pages，通常不需要再次进入 Settings → Pages。

注意：不能只上传 `index.html`；其余文件缺失会造成页面无法加载。旧仓库若有其他同名文件，按需覆盖；不建议删除不确定用途的文件。学习进度仍由原版 JavaScript 在浏览器本地保存；同一域名与路径下正常更新不会主动清除进度。不要清理网站数据。

## 本地预览

可以先双击 `index.html` 检查。若浏览器限制本地文件加载，可在 VS Code 使用 Live Server 打开整个文件夹。请确认九人选择、题目、剧情和音频后再发布。

## 文件说明

- `index.html`：页面结构及三个封面的响应式引用
- `style.css`：原有完整样式
- `content-data.js`：最新备份中的语音、字幕、题目、照片等内嵌数据；这是单个较大的文件，但低于 GitHub 网页 25 MiB 上传限制
- `stories-main.js`、`stories-extra.js`：原有剧情脚本
- `player.js`：关卡、人物、进度与剧情逻辑
- `entrance.js`：ENTER 入口与页面切换
- `assets/`：三张原始封面图片

内容更新后，需要重新导出并更新相关文件；本项目没有自动把管理员浏览器里的新素材同步到 GitHub 的功能。
