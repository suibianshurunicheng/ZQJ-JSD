<template>
  <div class="container">
    <!--英雄首屏区-->
    <HeroSection />
    <!--痛点共鸣区-->
    <PainPoint />
    <!--解决方案区-->
    <Solution />
    <!--原理揭秘区-->
    <HowitWorks />
    <!--案例展示区-->
    <LiveDemo />
    <!--核心转化区-->
    <TheOffer @openPayDialog="(value) => showPay.visible = value" />
    <!--价值打包区-->
    <ValueStack />
    <!--信任背书区-->
    <SocialProof />
    <!--风险逆转区-->
    <RiskReversalAndFAQ />
    <!--最终号召区-->
    <FinalCTA />
    <!--支付区-->
    <Pay v-model:visible="showPay.visible"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Add this reactive variable
const showPay = ref({ visible: false });
</script>

<style scoped lang="scss">
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
