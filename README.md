## wails框架模版来源
```
https://github.com/xijaja/wails-template-solid-tailwindcss
```


## 启动调试

要求go版本: 1.20

要求node版本: 1.16

在工程目录中执行 `wails dev` 即可启动。

如果你想在浏览器中调试，请在另一个终端进入 `frontend` 目录，然后执行 `npm run dev` ，前端开发服务器将在 http://localhost:34115 上运行。

## 目前ui框架使用的是
```
https://preline.co/docs
```


## 也可以使用Tailwindcss

如果你需要使用 tailwindcss 和 postcss ，请进入 `frontend` 目录，
然后执行命令：

```bash
# 安装
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest

# 初始化 tailwind.config.cjs 和 postcss.config.cjs
npx tailwindcss init tailwind.config.cjs -p
```

创建 tailwind.css 文件并写入：

```css
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
```

最后，在 `frontend/src/index.tsx` 中引入：

```tsx
import "./tailwind.css";
```
