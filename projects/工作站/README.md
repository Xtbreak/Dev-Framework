# 工作站

工作站开发项目，当前为中文平台基础框架，尚未加入业务功能。

## 当前范围

保留侧边导航、顶部栏、首页路由、主题与布局设置、移动端布局和错误兜底。示例业务、模拟数据、登录注册及 Clerk 集成已移除。当前没有后端、模型 API、账号系统或线上服务。

## 启动

在仓库根目录执行：

```bash
cd projects/工作站/frontend
pnpm install --frozen-lockfile
pnpm dev --host 127.0.0.1
```

使用 Node.js 22.12+ 或兼容的新版本，以及 pnpm。打开终端显示的地址，默认 http://127.0.0.1:5173/；端口被占用时以实际输出为准。无需环境变量或密钥。

## 验证

在 `frontend/` 中执行：

```bash
pnpm exec tsc -p tsconfig.app.json --noEmit
pnpm exec vitest run src/components/config-drawer.test.tsx --browser.headless
```

浏览器测试需要本机已有匹配的 Playwright Chromium。迁入前该测试因浏览器可执行文件缺失而未能运行，不代表测试通过。本次为现有代码迁入与上传，不重复运行完整测试或构建。

## 来源

来自本地精简并中文化的 Shadcn Admin，原仓库为 https://github.com/satnaing/shadcn-admin，上游基线提交 `e16c87f`。当前源代码快照包含此后的本地修改，不是原仓库原样副本。保留 `frontend/LICENSE` 中的 MIT 许可及原作者声明。

## 目录

- `frontend/`：可运行的前端框架及工程配置。
- `docs/项目状态.md`：当前范围、已确认决定和验证限制。
- `docs/PRD/`：后续业务需求。
- `docs/设计参考/`：后续设计材料。
- `docs/阶段文档/`：后续开发阶段文档。
- `docs/evidence/`：后续验证证据。
