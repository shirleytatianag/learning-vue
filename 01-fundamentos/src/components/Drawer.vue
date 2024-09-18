<template>
      <el-drawer :model-value="visible" :show-close="false" @close="cerrarDrawer">
    <template #header="{  titleId, titleClass }">
      <h4 :id="titleId" :class="titleClass">Edita tu producto</h4>
      <el-button type="danger" @click="cerrarDrawer">
        <el-icon class="el-icon--left"><CircleCloseFilled /></el-icon>
        Close
      </el-button>
    </template>
    This is drawer content.
  </el-drawer>
</template>

<script>
import { CircleCloseFilled } from '@element-plus/icons-vue'

export default {
    props: {
        visible: {
        type: Boolean,
        required: true,
    },
  },
  components: {
    CircleCloseFilled,
  },
  methods: {
    cerrarDrawer() {
      this.$emit('update:visible', false);
    },
  },
}
</script>