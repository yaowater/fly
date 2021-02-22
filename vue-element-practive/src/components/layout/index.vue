<template>
<div class="qf-layout">
    <el-container>
        <el-aside width="175px">
            <QfAside />
        </el-aside>
        <el-container>
            <el-header>
                <QfHeader />
            </el-header>
            <el-main>
                <QfMain />
            </el-main>
        </el-container>
    </el-container> 
</div>
  
</template>

<script>
import QfAside from './QfAside.vue'
import QfHeader from './QfHeader.vue'
import QfMain from './QfMain.vue'
export default {
    components: {
        QfMain,
        QfHeader,
        QfAside
    }
    
}
</script>

<style lang='scss' scoped>
.qf-layout {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: height;
    background: rgba(247, 248, 250, 1);
}
.el-container {
    height: 100%;
}
.qf-aside {
    background-color: #545c64;
    height: 100%;
    color: #eee;
    padding-top: 30px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 175px;
    overflow: auto;
}
.qf-header {
    border-bottom: 1px solid #eee;
    height: 100%;
    line-height: 60px;
    background: white;
    padding: 0 25px;
}
.el-header {
    padding-left: 0;
    padding-right: 0;
}
.qf-main {
    height: 100%;
    position: absolute;
    top: 80px;
    bottom: 0;
    left: 175px;
    right: 0;
    overflow: auto;
    box-sizing: border-box;
    
    margin-left: 20px;
    padding: 25px;
    background: white;
    min-width: 900px;
}
</style>