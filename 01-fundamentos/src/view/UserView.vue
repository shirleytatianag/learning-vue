<script setup>
import Table from '@/components/Table.vue';

    const data = [
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
    },
  ]

  const nameColumns= ['date', 'name',  'lastname']
</script>

<template>
    <span class="title-component">Administra tus Usuarios</span>
    <Table :tableData="data" :nameColumns="nameColumns" />
</template>