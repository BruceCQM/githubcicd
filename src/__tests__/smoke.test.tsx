// 导入测试工具
// render: 用于将 React 组件渲染到测试环境中
// screen: 提供查询渲染后 DOM 元素的方法
import { render, screen } from '@testing-library/react'

// 导入测试框架函数
// test: 定义测试用例
// expect: 用于创建断言
import { test, expect } from 'vitest';

// 定义测试用的 React 组件
// 这是一个简单的函数组件，返回一个包含文本的 h1 标题
function Hello() {
  return <h1>Hello Vite + React</h1>
}

// 定义测试用例
// 测试名称: 'renders' - 测试组件是否能正确渲染
test('renders', () => {
  // 执行阶段：渲染 Hello 组件到测试环境
  render(<Hello />)
  
  // 断言阶段：验证组件是否正确渲染
  // 1. screen.getByRole('heading', { name: 'Hello Vite + React' })
  //    - 通过 ARIA 角色 'heading' (标题) 查找文本内容为 'Hello Vite + React' 的元素
  // 2. .toBeInTheDocument()
  //    - 验证找到的元素是否存在于 DOM 中
  expect(screen.getByRole('heading', { name: 'Hello Vite + React' })).toBeInTheDocument()
})