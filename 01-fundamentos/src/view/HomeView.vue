<template>
    <div class="common-layout">
      <el-container>
        <el-header class="header">
            
        </el-header>
        <el-container>
          <el-aside class="aside" width="200px">Aside = 0</el-aside>
          <el-main class="main">Main</el-main>
        </el-container>
      </el-container>
    </div>
</template>

<style scoped>

    .common-layout{
        display: flex;
        height: 100vh;
    }         
    .header{
        background-color: rgb(255, 230, 230);
    }

    .aside{
        background-color: aqua;
    }

    .main{
        background-color: rgb(119, 0, 255);
    }
</style>