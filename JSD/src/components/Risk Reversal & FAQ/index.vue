<template>
  <div class="component-container">
    <h1 class="head">零风险承诺与常见问题</h1>
    <div class="Risk Reversal">
      <p>我们郑重承诺：购买后30天内，若因我们的模板或指导问题导致您无法成功部署，我们将全额退款！</p>
    </div>
    <div class="content FAQ">
      <ol>
          <li>Q: 我是技术小白，能用吗？</li>
          <li>A: 当然！我们的视频教程是保姆级的，并且提供30天支持，保证您能用上。</li>
          <li>Q: 购买后还有其他费用吗？</li>
          <li>A: 本工具是一次性付费。但您需要自备N8N环境、OpenAI API Key等，这些第三方服务的费用需要您自行承担。</li>
          <li>Q: 我的数据安全吗？</li>
          <li>A: 绝对安全。整个工具部署在您自己的N8N服务器上，所有数据都在您本地处理，我们不触碰您的任何业务数据。</li>
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

.head, .Risk\ Reversal, .content {
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

// 风险承诺样式
.Risk\ Reversal {
  max-width: 800px;
  margin: 0 auto 3rem;
  padding: 1.5rem;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 8px;
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.6;
}

// 统一内容容器样式
.content {
  max-width: 800px;
  margin: 0 auto;
}

// FAQ列表样式美化
.FAQ ol {
  list-style-type: none;
  padding-left: 0;
}

.FAQ li {
  font-size: 1.1rem;
  line-height: 1.6;
  padding: 1rem 0;
  padding-left: 2.5rem;
  position: relative;
  border-bottom: 1px dashed rgba(255, 126, 64, 0.1);
}

.FAQ li:last-child {
  border-bottom: none;
}

// 区分Q和A的样式
.FAQ li:nth-child(odd) {
  font-weight: bold;
  color: #333;
}

.FAQ li:nth-child(even) {
  color: #666;
  padding-bottom: 1.5rem;
}

.FAQ li::before {
  content: 'Q:';
  color: #ff5e14;
  font-weight: bold;
  position: absolute;
  left: 0;
  top: 1rem;
  font-size: 1.2rem;
}

.FAQ li:nth-child(even)::before {
  content: 'A:';
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
  .Risk\ Reversal {
    font-size: 1rem;
    padding: 1rem;
  }
  .FAQ li {
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
