<template>
  <div v-html="htmlContent"></div>
</template>

<script>
import htmlContent from './projects.html'; // 导入HTML文件

export default {
  data() {
    return {
      htmlContent
    };
  }
};
</script>
