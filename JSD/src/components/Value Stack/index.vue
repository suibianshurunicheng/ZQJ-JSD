<template>
  <div class="component-container">
    <h1 class="head">今天下单，您将获得总价值超过 ¥15,000 的大礼包！</h1>
    <div class="content">
      <ol>
          <li>“决胜单”N8N Agent工作流模板 (价值 ¥12,999)</li>
          <li>超详细部署视频教程 (价值 ¥999)</li>
          <li>30天部署问题专属技术支持 (价值 ¥1,999)</li>
          <li>专属VIP用户交流群永久席位 (无价)</li>
          <li>**【天使合伙人专享】**1对1在线部署指导 (价值 ¥2,999)</li>
      </ol>
    </div>
  </div>
</template>

<style scoped lang="scss">
.component-container {
  background: linear-gradient(135deg, #fff8f0 0%, #fff0e0 100%);
  position: relative;
  overflow: hidden;
  padding: 4rem 2rem;
  border-radius: 0 0 50% 50% / 20px;
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
}

.component-container::before,
.component-container::after {
  content: '';
  position: absolute;
  background-color: rgba(255, 126, 64, 0.05);
  border-radius: 50%;
  z-index: 0;
}

.component-container::before {
  top: -50px;
  right: -50px;
  width: 200px;
  height: 200px;
}

.component-container::after {
  bottom: -80px;
  left: -30px;
  width: 250px;
  height: 250px;
}

.head, .content {
  position: relative;
  z-index: 1;
}

// 统一标题样式
.head {
  font-size: 2.8rem;
  font-weight: 800;
  color: #ff5e14;
  text-align: center;
  margin-bottom: 2.5rem;
  text-shadow: 0 2px 10px rgba(255, 94, 20, 0.3);
  animation: pulse 2s infinite ease-in-out;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.03); }
}

// 统一内容容器样式
.content {
  max-width: 800px;
  margin: 0 auto;
}

// 列表样式美化
.content ol {
  list-style-type: none;
  padding-left: 0;
}

.content li {
  font-size: 1.1rem;
  line-height: 1.6;
  padding: 0.8rem 0;
  padding-left: 2.5rem;
  position: relative;
  border-bottom: 1px dashed rgba(255, 126, 64, 0.1);
}

.content li:last-child {
  border-bottom: none;
}

.content li::before {
  content: '✓';
  color: #ff5e14;
  font-weight: bold;
  position: absolute;
  left: 0;
  top: 0.8rem;
  font-size: 1.2rem;
}

// 响应式调整
@media (max-width: 767px) {
  .head {
    font-size: 2rem;
  }
  .component-container {
    width: 95%;
    padding: 2rem 1rem;
    border-radius: 0 0 50% 50% / 10px;
  }
  .content li {
    font-size: 1rem;
    padding-left: 2rem;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .head {
    font-size: 2.4rem;
  }
  .component-container {
    width: 90%;
    max-width: none;
  }
}

@media (min-width: 1440px) {
  .component-container {
    max-width: 1400px;
    width: 100%;
  }
}
</style>
