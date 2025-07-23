<template>
  <div class="component-container">
    <h1 class="head">是时候改变了！隆重介绍：“决胜单”——您的AI采购决策顾问</h1>
    <div class="content">
      <ol>
          <li>价值1: 100%数据驱动 - 告别直觉，让每一个采购决策都有据可依。</li>
          <li>价值2: 24/7智能支持 - 您的采购决策顾问随时可用，随时服务。</li>
          <li>价值3: 成本透明化 - 您可以清楚地知道每一个采购决策的成本。</li>
      </ol>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

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

.content ol {
  padding-left: 1.5rem;
}

.content li {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.2rem;
  padding: 0.8rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.content li:hover {
  background-color: rgba(255, 255, 255, 0.7);
  transform: translateX(5px);
}

.content li::marker {
  color: #ff5e14;
  font-weight: bold;
  font-size: 1.3rem;
}

@media (max-width: 767px) {
  .head {
    font-size: 2rem;
  }

  .content li {
    font-size: 1rem;
    padding: 0.6rem 0.8rem;
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
