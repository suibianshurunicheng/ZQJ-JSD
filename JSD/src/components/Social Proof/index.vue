<template>
  <div class="component-container">
    <h1 class="head">我是谁？为什么你可以信任我？</h1>
    <div class="self">
      <img src="../../assets/pic2.jpg" alt="">
      <p>xxx，一个在深圳奋斗了8年的亚马逊老兵。我踩过你踩过的所有坑，也因此萌生了开发这款工具的想法...</p>
    </div>
    <div class="comment">
      <p>“这个工具太棒了，简直是我们采购部门的福音！” - 深圳Anker公司 产品经理</p>
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

.head, .self, .comment {
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

/* 响应式调整 */
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

.self {
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto 2rem;
  display: flex;
  align-items: center;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 126, 64, 0.1);
}

.self img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1.5rem;
  border: 3px solid white;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.self p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333;
  margin: 0;
}

.comment {
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 2rem auto 0;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
  font-style: italic;
  padding-top: 2rem;
  position: relative;
}

</style>
