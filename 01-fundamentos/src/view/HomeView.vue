<template>
    <div class="common-layout">
      <el-container>
        <el-header class="header">
            <div>
                
            </div>
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
        border: 1px solid rgb(177, 177, 177);
    }

    .aside{
        border-left: 1px solid rgb(177, 177, 177);

    }

    .main{
        background-color: rgb(233, 233, 233);
    }
</style>