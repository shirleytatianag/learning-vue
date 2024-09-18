<script setup>
import Table from '@/components/Table.vue';
import { reactive, ref } from 'vue';
import { CircleCloseFilled } from '@element-plus/icons-vue';
import { ElMessage } from 'element-plus'

// Datos de ejemplo
const data = [
  { name: 'Tomate', description: 'No. 189, Grove St, Los Angeles' },
  { name: 'Celular', description: 'No. 189, Grove St, Los Angeles' },
  { name: 'Microno', description: 'No. 189, Grove St, Los Angeles' },
  { name: 'si', description: 'No. 189, Grove St, Los Angeles' }
];

// Definir columnas
const nameColumns = ['name', 'description'];

// Estado para gestionar la visibilidad del drawer y los datos de edición
const dataForEdit = ref({
  visible: false,
  index: null,
  row: null
});

// Formulario reactivo de edición
const editForm = reactive({
  name: '',
  description: ''
});

// Referencia al formulario
const editFormRef = ref(null);

// Reglas de validación del formulario
const rulesEditForm = reactive({
  name: [
    { required: true, message: 'Por favor escribe el nombre', trigger: 'blur' },
    { min: 3, message: 'El nombre debe tener mínimo 3 caracteres', trigger: 'blur' }
  ],
  description: [
    { required: true, message: 'Por favor escribe la descripción', trigger: 'blur' },
    { min: 3, message: 'La descripción debe tener mínimo 3 caracteres', trigger: 'blur' }
  ]
});

// Función para validar y enviar el formulario
const submitForm =  () => {
editFormRef.value.validate((valid) => {
    if (valid) {
      ElMessage.success('Formulario válido, enviando...')
      console.log('Formulario válido, enviando...');
      // Lógica para enviar el formulario
    } else {
      ElMessage.error('Hubo un error en la validación')
      console.log('Hubo un error en la validación');
    }
  });
};

// Función para editar los datos y mostrar el drawer
const dataEdit = (data) => {
  dataForEdit.value.visible = true;
  dataForEdit.value.index = data.index;
  dataForEdit.value.row = data.row;

  // Cargar los valores del formulario con los datos seleccionados
  editForm.name = data.row.name;
  editForm.description = data.row.description;
};
</script>

<template>
  <span class="title-component">Administra tus productos</span>

  <!-- Componente de tabla -->
  <Table :tableData="data" :nameColumns="nameColumns" @emitEdit="dataEdit" />

  <!-- Drawer para editar productos -->
  <el-drawer v-model="dataForEdit.visible" :show-close="false" title="Edita tus productos">
    <template #header="{ close, titleId, titleClass }">
      <h4 :id="titleId" :class="titleClass">Edita tus productos</h4>
      <el-button type="danger" @click="close">
        <el-icon class="el-icon--left"><CircleCloseFilled /></el-icon>
        Cerrar
      </el-button>
    </template>

    <!-- Formulario de edición -->
    <el-form
      label-width="auto"
      :model="editForm"
      :rules="rulesEditForm"
      ref="editFormRef"
      style="max-width: 600px"
    >
      <el-form-item prop="name" label="Nombre" label-position="top">
        <el-input v-model="editForm.name" />
      </el-form-item>

      <el-form-item  prop="description"  label="Descripción" label-position="top">
        <el-input v-model="editForm.description" />
      </el-form-item>

      <el-form-item>
        <el-button style="width: 100%;" type="primary" @click="submitForm()">
          Guardar
        </el-button>
      </el-form-item>
    </el-form>
  </el-drawer>
</template>