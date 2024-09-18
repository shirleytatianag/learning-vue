<!-- <template>
  <el-table :data="filterTableData" style="width: 100%">
    <el-table-column v-for="colum in  props.nameColumns" :key="colum" :label="colum" :prop="colum" />
    <el-table-column align="right">
      <template #header>
        <el-input v-model="search" size="small" placeholder="Type to search" />
      </template>
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">
          Edit
        </el-button>
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
        >
          Delete
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import { computed, ref } from 'vue';

// Definir props
const props = defineProps({
  tableData: {
    type: Array,
    required: true,
  },
  nameColumns:{
    type: Array,
    required: true
  }
});

// Estado reactivo para la búsqueda
const search = ref('');

// Computar los datos filtrados en función de la búsqueda
const filterTableData = computed(() =>
  props.tableData.filter(
    (data) =>
      !search.value || data.name.toLowerCase().includes(search.value.toLowerCase())
  )
);



// Funciones para editar y eliminar
const handleEdit = (index, row) => {
  console.log('Editar', index, row);
};

const handleDelete = (index, row) => {
  console.log('Eliminar', index, row);
};
</script> -->

<template>
  <el-table :data="filterTableData" style="width: 100%">
    <el-table-column
      v-for="colum in nameColumns"
      :key="colum"
      :label="colum"
      :prop="colum"
    />
    <el-table-column align="right">
      <template #header>
        <el-input v-model="search" size="small" placeholder="Type to search" />
      </template>
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">
          Edit
        </el-button>
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
        >
          Delete
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <!-- <el-drawer v-model="visible" :show-close="false">
    <template #header="{ close, titleId, titleClass }">
      <h4 :id="titleId" :class="titleClass">Edita tu producto</h4>
      <el-button type="danger" @click="close">
        <el-icon class="el-icon--left"><CircleCloseFilled /></el-icon>
        Close
      </el-button>
    </template>
    This is drawer content.
  </el-drawer> -->
</template>

<script>
import { CircleCloseFilled } from '@element-plus/icons-vue'

export default {
  components: {
    CircleCloseFilled,
  },
  props: {
    tableData: {
      type: Array,
      required: true,
    },
    nameColumns: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      search: '',
      visible: false
    };
  },
  computed: {
    filterTableData() {
      return this.tableData.filter((data) =>
        !this.search || data.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
  methods: {
    handleEdit(index, row) {
      console.log('Editar', index, row);
      // this.visible = true;
      this.$emit('emitEdit', {visible: true, index: index, row: row})
    },
    handleDelete(index, row) {
      console.log('Eliminar', index, row);
    },
  },
};
</script>
