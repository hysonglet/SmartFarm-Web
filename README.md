# SmartFarm Web（示例落地页）

基于你 `images/` 目录下的图片素材生成的静态网页，页面结构与风格参考 `https://ag.dji.com/smartfarm-web` 的“产品落地页”类型。

## 本地预览

在项目目录执行：

```bash
python3 -m http.server 5173
```

然后在浏览器打开：

- `http://localhost:5173/`

## 文件说明

- `index.html`: 页面结构
- `styles.css`: 样式（深色科技风）
- `script.js`: 动态挂载图片/卡片、案例弹窗、Tab、表单校验
- `images/`: 你的图片素材（中文文件名已在脚本中通过 `encodeURI` 兼容）

