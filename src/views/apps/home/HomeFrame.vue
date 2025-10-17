<script setup>
import LayoutMenu from './LayoutMenu.vue';
</script>
<template>
  <div class="page">
    <header>
      头部区域
    </header>
    <main>
      <div class="menu">
        <layout-menu></layout-menu>
      </div>
      <div class="client">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>
<style scoped>
  .page{
      height: 100%;
      overflow: hidden;
      flex-direction: column;
         
      background-color:blanchedalmond;
      margin: 10px;
      display: flex;
      >header{
          height: 60px;
          background-color: aquamarine;
          margin: 10px;
      }
      >main{
          flex: 1;
          margin: 10px;
          display: flex;
          flex-direction: row;
          >.menu{
            height: 100%; 
            overflow: auto; 
            background-color:aqua;  
            margin: 10px;   
          }
          >.client{
             flex: 1; 
             overflow: auto; 
             background-color: orange;
             margin: 10px;

          }
          
      }
  
  }
</style>