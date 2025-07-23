<template>
  <div class="hero-container">
    <h1 class="Headline">告别采购赌博，你的亚马逊专属AI决策大脑</h1>
    <h2 class="Sub-headline">
      ——我们的AI决策大脑可以帮助你在亚马逊上自动完成采购、库存管理、订单处理等任务，提高效率，减少成本。
    </h2>
    <div class="Visual">
      <video src="../../assets/video.mp4" alt="Visual" />
    </div>
    <div class="Call-to-action">
      <a href="#core-conversion" class="button">立即查看「限时团购」方案</a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hero-container {
  max-width: 100%; /* 修改为100%以允许百分比宽度生效 */
  width: 100%;
  margin: 0 auto;
  background: linear-gradient(135deg, #fff8f0 0%, #fff0e0 100%);
  position: relative;
  overflow: hidden;
  padding: 4rem 2rem;
  border-radius: 0 0 50% 50% / 20px;
}

.hero-container::before {
  content: '';
  position: absolute;
  top: -50px;
  right: -50px;
  width: 200px;
  height: 200px;
  background-color: rgba(255, 126, 64, 0.05);
  border-radius: 50%;
  z-index: 0;
}

.hero-container::after {
  content: '';
  position: absolute;
  bottom: -80px;
  left: -30px;
  width: 250px;
  height: 250px;
  background-color: rgba(255, 126, 64, 0.07);
  border-radius: 50%;
  z-index: 0;
}

// 确保内容在背景之上
.hero-container > * {
  position: relative;
  z-index: 1;
}

.Headline {
  font-size: 3.5rem;
  font-weight: 800;
  color: #ff3e00;
  text-align: center;
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 10px rgba(255, 62, 0, 0.3);
  animation: pulse 2s infinite;
  line-height: 1.2;
}

.Sub-headline {
  font-size: 1.3rem;
  color: #333;
  text-align: center;
  line-height: 1.6;
  max-width: 900px;
  margin: 0 auto 3rem;
  white-space: nowrap;
}

.Visual {
  text-align: center;
  margin-bottom: 3rem;
}

.Call-to-action {
  margin-top: 2rem;
  text-align: center;
}

.button {
  display: inline-block;
  background-color: #ff3e00;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  padding: 1rem 2.5rem;
  border-radius: 8px;
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(255, 0, 21, 0.3);
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}

.button:hover {
  background-color: #e03600;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(255, 62, 0, 0.4);
}

.button:active {
  transform: translateY(0);
  box-shadow: 0 2px 8px rgba(255, 62, 0, 0.3);
}

// 响应式调整
@media (max-width: 767px) {
  .button {
    font-size: 1rem;
    padding: 0.8rem 1.5rem;
    width: 90%;
  }
}
/* 平板设备 (768px - 1024px) */
@media (max-width: 1024px) and (min-width: 768px) {
  .Headline {
    font-size: 2.8rem;
    margin-bottom: 1.2rem;
  }
  .Sub-headline {
    font-size: 1.2rem;
    max-width: 85%;
  }
  .hero-container {
    padding: 3rem 2rem;
    width: 90%; /* 与Pain Point组件平板宽度一致 */
    max-width: none;
  }
}

/* 手机设备 (<= 767px) */
@media (max-width: 767px) {
  .Headline {
    font-size: 2rem;
    margin-bottom: 1rem;
    animation: pulse 2.5s infinite;
  }
  .Sub-headline {
    font-size: 1rem;
    padding: 0 0.5rem;
  }
  .hero-container {
    padding: 2rem 1rem;
    width: 95%; /* 与Pain Point组件手机宽度一致 */
    max-width: none;
    border-radius: 0 0 50% 50% / 10px;
  }
  .Call-to-action .button {
    width: 90%;
    text-align: center;
  }
}

/* 大型桌面设备 (>= 1440px) */
@media (min-width: 1440px) {
  .hero-container {
    max-width: 1400px;
    width: 100%;
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.03);
  }
}
</style>
