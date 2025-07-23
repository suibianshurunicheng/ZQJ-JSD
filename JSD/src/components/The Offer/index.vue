<template>
  <div id="core-conversion" class="component-container">
    <h1 class="Headline">加入我们，成为第一批用AI优化库存的聪明卖家（仅限本微信群）</h1>
    <h2 class="Sub-headline">
        阶梯团购，越早越优惠，名额售罄价格立即上涨！
    </h2>
    <div class="time">**距早鸟价结束仅剩：{{time}}**</div>
    <div class="price">
        <div class="price-item1">
            <div class="price-item1-title">天使合伙人</div>
            <div class="price-item1-price">¥3999 - 原价 ¥12,999</div>
            <div class="price-item1-desc">剩余{{person}}席</div>
            <div class="price-item1-btn"><button @click="pay" :disabled="person <= 0">立即抢占</button></div>
        </div>
        <div class="price-item2">
            <div class="price-item2-title">早鸟先锋</div>
            <div class="price-item2-price">¥5999 - 原价 ¥12,999</div>
            <div class="price-item2-desc">剩余11席</div>
            <div class="price-item2-btn"><button @click="pay" :disabled="person > 0">排队预定</button></div>
        </div>
        <div class="price-item3">
            <div class="price-item3-title">标准团购</div>
            <div class="price-item3-price">¥7999 - 原价 ¥12,999</div>
            <div class="price-item3-desc">剩余15席</div>
            <div class="price-item3-btn"><button disabled>排队预定</button></div>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

// 添加defineEmits
const emit = defineEmits(['openPayDialog']);

const end = ref('2025-07-31T23:59:59');
const person = ref(300);
const time = ref(''); // 改为ref响应式变量
let persontime = null;
let timer: number | null = null;

const updateTime = () => {
  const now = new Date();
  const endDate = new Date(end.value);
  const timeLeft = endDate - now;

  // 处理倒计时结束情况
  if (timeLeft <= 0) {
    time.value = '优惠活动已结束';
    if (timer) clearInterval(timer);
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // 为个位数添加前导零，增强视觉效果
  time.value = `${days}天${String(hours).padStart(2, '0')}时${String(minutes).padStart(2, '0')}分${String(seconds).padStart(2, '0')}秒`;
};

const updatePersonCount = () => {
  persontime = setInterval(()=>{
    const reduceNum = Math.floor(Math.random() * 11);
    person.value = Math.max(person.value - reduceNum, 0);
    if (person.value <= 0) {
      clearInterval(persontime);
    }
  },3000)
}; 

const pay = () =>{
  // 修改为触发事件而非直接修改
  emit('openPayDialog', true);
}
onMounted(() => {
  updateTime(); // 立即执行一次
  timer = window.setInterval(updateTime, 1000); // 设置每秒更新
  updatePersonCount(); // 立即执行一次
});

onUnmounted(() => {
  if (timer) clearInterval(timer); // 组件卸载时清除定时器
  if(persontime) clearInterval(persontime);
});
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

// 确保所有内容在背景之上
#core-conversion > * {
  position: relative;
  z-index: 1;
}

.Headline {
  font-size: 2.8rem;
  font-weight: 800;
  color: #ff5e14;
  text-align: center;
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 10px rgba(255, 94, 20, 0.3);
  animation: pulse 2s infinite ease-in-out;
}

.Sub-headline {
  font-size: 1.3rem;
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 500;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.time {
  text-align: center;
  font-size: 1.2rem;
  color: #e53e3e;
  font-weight: bold;
  margin-bottom: 3rem;
  padding: 0.8rem;
  animation: urgencyPulse 1.5s infinite;
  border-radius: 4px;
}

@keyframes urgencyPulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.02); }
}

.price {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
}

.price > div {
  flex: 1;
  min-width: 250px;
  background: white;
  border-radius: 12px;
  padding: 1.8rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
}

.price-item1-title, .price-item2-title, .price-item3-title {
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #333;
}

.price-item1-price, .price-item2-price, .price-item3-price {
  font-size: 1.8rem;
  font-weight: 800;
  color: #ff5e14;
  margin-bottom: 1rem;
}

.price-item1-desc, .price-item2-desc, .price-item3-desc {
  color: #666;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

.price button {
  width: 100%;
  padding: 0.8rem 1.2rem;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  font-size: 1rem;
}

.price button:not(:disabled) {
  background-color: #1a73e8;
  color: white;
}

.price button:not(:disabled):hover {
  background-color: #1557b0;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.price button:disabled {
  background-color: #e0e0e0;
  color: #9e9e9e;
  cursor: not-allowed;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.03); }
}

@media (max-width: 767px) {
  .Headline {
    font-size: 2rem;
  }
  .Sub-headline {
    font-size: 1.1rem;
  }
  .component-container {
    width: 95%;
    padding: 2rem 1rem;
    border-radius: 0 0 50% 50% / 10px;
  }
  .price {
    flex-direction: column;
    gap: 1rem;
  }
  .price > div {
    width: 100%;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .Headline {
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
