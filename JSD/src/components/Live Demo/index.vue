<template>
  <div class="component-container">
    <h1 class="head">眼见为实：一份真实的“决胜单”分析报告</h1>
    <div class="content">
      <img src="../../assets/pic1.jpg" alt="">
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

.content {
  max-width: 800px;
  margin: 0 auto;
}

.content img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

@media (max-width: 767px) {
  .head {
    font-size: 2rem;
  }
  .component-container {
    width: 95%;
    padding: 2rem 1rem;
    border-radius: 0 0 50% 50% / 10px;
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
