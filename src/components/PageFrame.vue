<script setup>

</script>


<template>
   <div class="page-container">
        <div class="title-container">
            <span></span>标题<span></span>
        </div>
        <div class="toolbar-container"></div>
            <div class="toolbar-left">
            </div>
            <div class="toolbar-right">
            </div>
        <div class="content-container"></div>
   </div>
</template>



<style scoped>
    .page-container{
        height: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        >.title-container{
            height: 50px;
            font-size: 20px;
            font-weight: bold;
            background-color: antiquewhite;
            margin: 5px;
            display: flex;
            justify-content: space-between;
        }
        >.toolbar-container{
            height: 50px;
            background-color: aliceblue;
            margin: 5px;
            display: flex;
            justify-content: space-between;
            >.toolbar-left{
                margin: 10px 145px 5px 30px;
            }
            >.toolbar-right{
                margin: 10px 30px 5px 145px;
            }
        }
        >.content-container{
            flex: 1;
            overflow: auto;
            margin: 5px;
            background-color: darkgray;
        }
    }
</style>