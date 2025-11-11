# NPM 发布指南

本指南说明如何将 `hilbert-vue3-ui` 发布到 npm。

## 准备工作

### 1. 注册 npm 账号

如果还没有 npm 账号，请前往 [npmjs.com](https://www.npmjs.com/) 注册。

### 2. 登录 npm

```bash
npm login
```

按提示输入用户名、密码和邮箱。

### 3. 验证登录状态

```bash
npm whoami
```

## 发布前检查

### 1. 更新包信息

编辑 `packages/components/package.json`，更新以下字段：

- `author`: 你的名字
- `repository.url`: 你的 GitHub 仓库地址
- `version`: 版本号（遵循语义化版本规范）

### 2. 构建项目

```bash
pnpm build:components
```

确保构建成功，生成 `lib` 和 `es` 目录。

### 3. 检查包内容

```bash
cd packages/components
npm pack --dry-run
```

这会显示将要发布到 npm 的文件列表，确认包含：
- `lib/` - CommonJS 构建产物
- `es/` - ES Module 构建产物
- `README.md` - 文档
- `package.json` - 包配置

## 发布到 npm

### 1. 进入组件目录

```bash
cd packages/components
```

### 2. 发布包

```bash
npm publish
```

如果包名已被占用，你需要修改 `package.json` 中的 `name` 字段。

### 3. 使用作用域包（推荐）

如果想使用自己的作用域（避免命名冲突），可以将包名改为：

```json
{
  "name": "@yourusername/hilbert-vue3-ui"
}
```

然后发布为公开包：

```bash
npm publish --access public
```

## 版本管理

### 更新版本号

使用 npm version 命令更新版本：

```bash
# 补丁版本（bug 修复）
npm version patch

# 次版本（新功能）
npm version minor

# 主版本（破坏性变更）
npm version major
```

然后重新构建和发布：

```bash
cd ../../
pnpm build:components
cd packages/components
npm publish
```

## 使用 changeset（推荐）

项目已配置 changeset，可以使用它来管理版本和发布：

### 1. 创建变更集

```bash
pnpm changeset
```

按提示选择要更新的包和版本类型，并描述更改内容。

### 2. 更新版本

```bash
pnpm version-packages
```

这会根据变更集自动更新版本号和 CHANGELOG。

### 3. 发布

```bash
pnpm release
```

这会构建所有包并发布到 npm。

## 验证发布

发布成功后，可以通过以下方式验证：

### 1. 在 npm 网站查看

访问 `https://www.npmjs.com/package/hilbert-vue3-ui`

### 2. 创建测试项目

```bash
mkdir test-hilbert-ui
cd test-hilbert-ui
npm init -y
npm install hilbert-vue3-ui
```

### 3. 测试引入

```js
import { Button, Input } from 'hilbert-vue3-ui'
console.log(Button, Input)
```

## 常见问题

### 1. 包名已存在

如果提示包名已存在，需要更改包名或使用作用域包。

### 2. 权限错误

确保已登录正确的 npm 账号：

```bash
npm logout
npm login
```

### 3. 需要双因素认证

如果账号启用了 2FA，需要在密码后附加 OTP 码：

```bash
npm publish --otp=123456
```

### 4. 发布到私有仓库

如果使用私有 npm 仓库（如 Verdaccio），需要配置 registry：

```bash
npm config set registry http://your-registry-url
```

## 最佳实践

1. **始终先测试构建**：发布前确保 `pnpm build:components` 成功
2. **语义化版本**：遵循 SemVer 规范管理版本号
3. **编写 CHANGELOG**：记录每个版本的变更
4. **标记 git tag**：为每个发布版本创建 git tag
5. **测试安装**：在干净的环境中测试包的安装和使用

## 相关命令速查

```bash
# 构建
pnpm build:components

# 发布（在 packages/components 目录下）
npm publish

# 发布公开作用域包
npm publish --access public

# 查看当前登录用户
npm whoami

# 登录/登出
npm login
npm logout

# 查看包信息
npm view hilbert-vue3-ui

# 撤销发布（发布后24小时内）
npm unpublish hilbert-vue3-ui@0.1.0
```
