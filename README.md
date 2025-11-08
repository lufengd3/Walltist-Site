# App Landing Page

一个现代化的应用介绍网站，使用纯 HTML、CSS 和 JavaScript 构建，通过 GitHub Pages 部署。

## 特性

- 📱 完全响应式设计，支持所有设备
- ⚡ 优化的性能和快速加载
- ♿ 符合 WCAG 标准的可访问性
- 🎨 现代化的 UI 设计
- 🔍 SEO 友好
- 🚀 自动部署到 GitHub Pages

## 项目结构

```
/
├── index.html              # 主页面
├── css/
│   └── style.css          # 样式文件
├── js/
│   └── main.js            # JavaScript 文件
├── images/                # 图片资源
│   ├── hero-image.png
│   ├── feature-*.svg
│   └── screenshots/
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions 部署配置
└── README.md              # 项目说明
```

## 本地开发

### 方法 1：使用 Python 简单服务器

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

然后在浏览器中访问 `http://localhost:8000`

### 方法 2：使用 Node.js 服务器

```bash
# 安装 http-server
npm install -g http-server

# 运行服务器
http-server -p 8000
```

### 方法 3：使用 VS Code Live Server

1. 安装 Live Server 扩展
2. 右键点击 `index.html`
3. 选择 "Open with Live Server"

## 部署到 GitHub Pages

### 自动部署（推荐）

1. 将代码推送到 GitHub 仓库
2. 进入仓库的 Settings > Pages
3. 在 "Source" 下选择 "GitHub Actions"
4. 推送到 `main` 分支时会自动触发部署

### 手动部署

1. 进入仓库的 Settings > Pages
2. 在 "Source" 下选择 `main` 分支
3. 选择根目录 `/` 或 `/docs` 文件夹
4. 点击 Save

网站将在几分钟内部署到 `https://[username].github.io/[repository-name]/`

## 自定义内容

### 修改文本内容

编辑 `index.html` 文件中的以下部分：

- **应用名称**：修改 `<title>` 和 `.logo-text` 中的文本
- **Hero 标题**：修改 `.hero-title` 中的文本
- **功能描述**：修改 `.feature-card` 中的内容

### 修改样式

编辑 `css/style.css` 文件中的 CSS 变量：

```css
:root {
  --primary-color: #007bff;    /* 主色调 */
  --secondary-color: #6c757d;  /* 次要色调 */
  --accent-color: #28a745;     /* 强调色 */
  /* ... 其他颜色 */
}
```

### 添加图片

1. 将图片放入 `images/` 目录
2. 更新 `index.html` 中的图片路径
3. 确保所有图片都有描述性的 `alt` 属性

### 修改 SEO 信息

编辑 `index.html` 的 `<head>` 部分：

```html
<meta name="description" content="你的应用描述">
<meta name="keywords" content="关键词1, 关键词2">
<meta property="og:title" content="你的应用名称">
<!-- ... 其他 meta 标签 */
```

## 性能优化建议

1. **图片优化**
   - 使用 WebP 格式
   - 压缩图片大小
   - 为不同屏幕尺寸准备多个版本

2. **CSS 优化**
   - 使用 CSS 压缩工具（如 cssnano）
   - 移除未使用的样式

3. **JavaScript 优化**
   - 使用代码压缩工具（如 Terser）
   - 考虑代码分割

## 浏览器支持

- Chrome（最新版本）
- Firefox（最新版本）
- Safari（最新版本）
- Edge（最新版本）
- 移动端浏览器

## 技术栈

- HTML5
- CSS3（Flexbox、Grid、CSS Variables）
- Vanilla JavaScript
- GitHub Pages
- GitHub Actions

## 许可证

MIT License

## 贡献

欢迎提交 Issue 和 Pull Request！

## 联系方式

- Twitter: [@yourapp](https://twitter.com/yourapp)
- GitHub: [yourapp](https://github.com/yourapp)
