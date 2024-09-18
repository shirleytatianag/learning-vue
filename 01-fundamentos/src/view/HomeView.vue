<template>
    <div class="common-layout">
      <el-container>
        <el-header class="header">
        </el-header>
        <el-container>
          <el-aside class="aside" width="65px">
            <div class="menu">
              <el-tooltip  effect="light" content="Usuarios" placement="right">
                <RouterLink class="option" active-class="active"  to="user">
                  <el-icon ><UserFilled /></el-icon>
                </RouterLink>
              </el-tooltip>
              <el-tooltip  effect="light" content="Productos" placement="right">
                <RouterLink to="product" class="option" active-class="active">
                  <em class="icon-clipboard-f"></em>
                </RouterLink>
              </el-tooltip>
            </div>
            <el-tooltip  effect="light" content="Cerrar sesión" placement="right">
              <RouterLink to="/login" class="option">
                <em class="icon-log-out"></em>
              </RouterLink>
            </el-tooltip>
          </el-aside>
          <el-main class="main">
              <RouterView></RouterView>
          </el-main>
        </el-container>
      </el-container>
    </div>
</template>

<script>
  import { User, UserFilled  } from '@element-plus/icons-vue'
  import { RouterLink } from 'vue-router'

  export default{
    components:{
      User, UserFilled 
    },
    methods:{
      handleIcon(link){
        console.log(link);
      }
    }
  }
</script>

<style scoped>
  .common-layout{
    display: flex;
    height: 100vh;
  }

  .header{
    border: 1px solid #eeeeee;
  }

  .aside{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
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
    justify-content: space-between;
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
    color: white;

    &:hover{
      background-color: #ffffff5c;
      color: #786ee1;
    }

    &:last-child{
      margin-bottom: 10px;
    }
  }

  em {
    font-size: 19px;
    font-weight: 500;
  }

  .active{
    background-color: #ffffff5c;
    color: #786ee1;
  }
</style>