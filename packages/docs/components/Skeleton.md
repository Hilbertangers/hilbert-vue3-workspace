# `Skeleton` 骨架屏

Skeleton，一个轻量级的骨架屏组件，用于在内容加载时提供视觉反馈。支持自定义颜色、尺寸、形状、动画等。

## 基础用法

<demo vue="../demo/Skeleton/basic.vue" />

## 多骨架屏

<demo vue="../demo/Skeleton/count.vue" />

## 不同形状和尺寸

<demo vue="../demo/Skeleton/shape.vue" />

## 自定义颜色

<demo vue="../demo/Skeleton/custom-color.vue" />

## 动画控制

<demo vue="../demo/Skeleton/animation.vue" />

## 行内模式

<demo vue="../demo/Skeleton/inline.vue" />

## 实际场景示例

### 📱 电商App首页

模拟完整的电商App首页骨架屏，包含状态栏、搜索栏、分类导航、轮播图、限时抢购、商品列表等元素。

<demo vue="../demo/Skeleton/ecommerce.vue" />

### 📄 文章/博客加载

模拟博客文章、新闻资讯的内容加载，包含作者信息、标题、正文、标签等元素。

<demo vue="../demo/Skeleton/article.vue" />

### 👤 用户资料卡片

模拟用户列表、成员展示、社交资料卡片的骨架屏，适用于团队管理、社交媒体等场景。

<demo vue="../demo/Skeleton/cards.vue" />

### 🖼️ 图片/媒体列表

模拟图库、相册、媒体中心的加载占位，使用瀑布流布局展示不同高度的图片占位。

<demo vue="../demo/Skeleton/gallery.vue" />

### 📊 数据仪表板

模拟后台管理系统、数据大屏、统计报表的骨架屏，包含统计卡片、图表占位等元素。

<demo vue="../demo/Skeleton/dashboard.vue" />

## API

### Props

| 参数              | 说明                     | 类型                  | 可选值 | 默认值        |
| ----------------- | ------------------------ | --------------------- | ------ | ------------- |
| count             | 骨架屏数量               | `number`              | -      | `1`           |
| baseColor         | 基础颜色                 | `string`              | -      | `'#e6e8eb'`   |
| highlightColor    | 高亮颜色                 | `string`              | -      | `'#f1f3f5'`   |
| width             | 宽度                     | `string \| number`    | -      | `'100%'`      |
| height            | 高度                     | `string \| number`    | -      | `16px`        |
| borderRadius      | 圆角                     | `string \| number`    | -      | `'4px'`       |
| circle            | 是否圆形（覆盖 borderRadius） | `boolean`         | -      | `false`       |
| inline            | 是否行内模式             | `boolean`             | -      | `false`       |
| duration          | 动画持续时间（秒）       | `number`              | -      | `1.5`         |
| enableAnimation   | 是否启用动画             | `boolean`             | -      | `true`        |
| direction         | 动画方向                 | `string`              | `ltr`、`rtl` | `'ltr'`       |
| wrapperClassName  | 容器自定义类名           | `string`              | -      | `''`          |
| className         | 骨架屏自定义类名         | `string`              | -      | `''`          |

### 特性

- **响应式设计**：支持所有 CSS 单位（`px`、`%`、`rem` 等）和数字值
- **灵活布局**：支持行内模式和块级模式
- **动画控制**：可以自定义动画持续时间、方向，或完全禁用
- **自定义样式**：支持通过 props 自定义颜色、尺寸、圆角等
- **类型安全**：完整的 TypeScript 类型定义
