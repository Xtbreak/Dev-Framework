# 平台基础框架

基于 [Shadcn Admin](https://github.com/satnaing/shadcn-admin) 精简，保留原有基础样式。

保留响应式侧边栏、顶部栏、首页导航、TanStack Router 文件路由、主题与布局切换，以及 404 和运行错误兜底。

- Dashboard：`/dashboard`，组件为 `frontend/src/features/dashboard/`。复用原版 Dashboard 布局，含概览、分析、统计卡片、图表与最近销售；中文界面、空数据状态，不接接口，下载禁用，报告与通知沿用原版禁用状态。

## 本地运行

使用 Node.js 22.12+ 或兼容的新版本，以及 pnpm。

```bash
pnpm install --frozen-lockfile
pnpm dev --host 127.0.0.1
```

访问终端显示的本地地址，默认是 http://127.0.0.1:5173/。

## 工程结构

- `src/routes/__root.tsx`：根路由与错误兜底。
- `src/routes/_app/`：平台布局路由和首页。
- `src/components/layout/`：布局、侧边栏和导航。
- `src/components/layout/data/sidebar-data.ts`：导航配置。
- `src/context/`：主题、布局、字体和文字方向。
- `src/styles/`：基础样式与主题。
- `src/routeTree.gen.ts`：路由插件生成，请勿手动编辑。

## 检查

```bash
pnpm exec tsc -p tsconfig.app.json --noEmit
```

保留基础组件已有的测试设施。浏览器测试需要另行准备 Playwright Chromium。

## 许可证

沿用原项目 MIT 许可证，详见 `LICENSE`。
