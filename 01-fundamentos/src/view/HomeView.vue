<template>
    <div class="common-layout">
      <el-container>
        <el-header class="header">
            <div>
            </div>
        </el-header>
        <el-container>
          <el-aside class="aside" width="65px">
            <div class="menu">
              <el-tooltip  effect="light" content="Usuarios" placement="right">
                <RouterLink class="option" active-class="active" to="user" >
                   <em class="icon-user"></em>
                </RouterLink>
               </el-tooltip>
               <el-tooltip  effect="light" content="Productos" placement="right">
                <RouterLink to="product" class="option" active-class="active">
                    <em class="icon-clipboard"></em>
                </RouterLink>
               </el-tooltip>
            </div>
          </el-aside>
          <el-main class="main">
              <RouterView></RouterView>
          </el-main>
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
        border: 1px solid #eeeeee;
    }

    .aside{
        border-left: 1px solid rgb(177, 177, 177);
        background-color: #786ee1;
    }

    .main{
      display: flex;
      flex-direction: column;
      gap: 10px;
      background-color: #f6f8fa;
    }

    .menu{
      margin: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px;
      gap: 8px;
    }

    .option{
      height: 24px;
      width: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 8px;
      border-radius: 50%;
      cursor: pointer;
      text-decoration: none;

      &:hover{
        background-color: #ffffff5c;
        color: #786ee1;
      }
    }

    .option em{
      font-size: 20px;
      font-weight: 500;
      color: white;
    }

    .active{
      background-color: #ffffff5c;
      color: #786ee1;
    }

</style>