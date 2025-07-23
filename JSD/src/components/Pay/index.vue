<template>
  <!-- 将v-model拆分为:model-value和@update:model-value -->
  <el-dialog 
    :model-value="visible" 
    @update:model-value="(val) => emit('update:visible', val)"
    title="微信/支付宝支付" 
    width="800"
  >
    <img src="../../assets/pic1.jpg" alt="支付二维码" class="image"/>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="emit('update:visible', false)">取消</el-button>
        <el-button type="primary" @click="emit('update:visible', false)">确认</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
// 接收父组件传递的visible属性
const props = defineProps({
  visible: {
    type: Boolean,
    required: true
  }
})

// 声明更新事件
const emit = defineEmits(['update:visible'])
</script>

<style scoped lang="scss">
.image {
  width: 600px;
  height: 600px;
  display: block;
  margin: 0 auto;
}
</style>
