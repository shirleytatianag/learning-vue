<script setup>
import Table from '@/components/Table.vue';

const data = [
    {
      name: 'Tomate',
      description: 'No. 189, Grove St, Los Angeles',
    },
    {
      name: 'Celular',
      description: 'No. 189, Grove St, Los Angeles',
    },
    {
      name: 'Microno',
      description: 'No. 189, Grove St, Los Angeles',
    },
    {
      name: 'si',
      description: 'No. 189, Grove St, Los Angeles',
    },
  ]

const nameColumns= ['name', 'description']
</script>

<template>
    <span class="title-component" >Administra tus Productos</span>
    <Table :tableData="data" :nameColumns="nameColumns"  />
</template>