<script >
import Table from '@/components/Table.vue';
import { CircleCloseFilled } from '@element-plus/icons-vue'

  export default{
    data(){
      return{
        data : [
        {
          date: '2016-05-03',
          name: 'Shirley',
          lastname: 'García',
        },
        {
          date: '2016-05-02',
          name: 'Sebas',
          lastname: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-04',
          name: 'Karen',
          lastname: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-01',
          name: 'Brayan',
          lastname: 'No. 189, Grove St, Los Angeles',
        }
        ],
        nameColumns: ['date', 'name',  'lastname'],
        dataForEdit: {
          visible: false, index: null, row: null
        }
      }
    },
    components: {
      Table,
      CircleCloseFilled,
    },
    methods:{
      dataEdit(data){
        this.dataForEdit = data
        console.log(this.dataForEdit);
        console.log(this.dataForEdit.visible);
        
      }
    }
  }

</script>

<template>
    <span class="title-component">Administra tus usuarios</span>
    <Table :tableData="data" :nameColumns="nameColumns" @emitEdit="dataEdit"/>
    <el-drawer v-model="dataForEdit.visible" :show-close="false">
    <template #header="{ close, titleId, titleClass }">
      <h4 :id="titleId" :class="titleClass">Edita tus usuarios</h4>
      <el-button type="danger" @click="close">
        <el-icon class="el-icon--left"><CircleCloseFilled /></el-icon>
        Close
      </el-button>
    </template>
    This is drawer content.
  </el-drawer>
    <!-- <Drawer v-if="this.dataForEdit.visible" ></Drawer> -->
    <!-- <Drawer :visible="dataForEdit.visible" @update:visible="dataForEdit.visible = $event" /> -->
</template>