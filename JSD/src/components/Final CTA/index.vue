<template>
  <div class="component-container">
    <div class="content">
      <ol>
          <li>一次错误的补货决策，损失的可能就是几万甚至几十万。而今天，只需一笔小小的投资，就能拥有一个永不疲倦的AI决策大脑。</li>
          <li>天使合伙人席位即将售罄，价格马上上涨。立即行动，锁定骨折优惠！</li>
      </ol>
    </div>
    <a href="#core-conversion" class="button">立即抢占最后席位，告别采购赌博！</a>
  </div>
</template>
<script setup lang="ts">
  
</script>
<style scoped lang="scss">
.component-container {
  background: linear-gradient(135deg, #fff8f0 0%, #fff0e0 100%);
  position: relative;
  overflow: hidden;
  max-width: 1400px;  /* 统一最大宽度 */
  margin: 0 auto;     /* 水平居中 */
  padding: 4rem 2rem; /* 统一内边距 */
  border-radius: 0; /* 移除所有圆角 */
  text-align: center; /* 添加文本居中 */
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

.content {
  position: relative;
  z-index: 1;
  max-width: 800px; /* 内容区最大宽度与上一组件统一 */
  margin: 0 auto;  /* 内容区居中 */
}

.content ol {
  list-style-type: none;
  padding-left: 0;
}

.content li {
  font-size: 1.2rem;
  line-height: 1.8;
  padding: 1.2rem 0;
  padding-left: 2.5rem;
  position: relative;
  font-weight: bold;
  color: #333;
  text-shadow: 0 1px 3px rgba(0,0,0,0.05);
  border-bottom: 1px dashed rgba(255, 126, 64, 0.1);
}

.content li:last-child {
  border-bottom: none;
}

.content li::before {
  content: '•';
  color: #ff5e14;
  font-weight: bold;
  position: absolute;
  left: 0;
  top: 1rem;
  font-size: 1.8rem;
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
  margin-top: 2rem;
  /* 移除可能存在的左右margin */
  margin-left: auto;
  margin-right: auto;
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
  .component-container {
    width: 90%; /* 与上一组件平板宽度一致 */
    max-width: none;
  }
}

/* 手机设备 (<= 767px) */
@media (max-width: 767px) {
  .component-container {
    width: 95%; /* 与上一组件手机宽度一致 */
    padding: 2rem 1rem;
    border-radius: 0; /* 移除手机端圆角 */
  }
  .content li {
    font-size: 1rem;
    padding-left: 2rem;
  }
}

/* 大型桌面设备 (>= 1440px) */
@media (min-width: 1440px) {
  .component-container {
    max-width: 1400px;
    width: 100%;
  }
}
</style>
