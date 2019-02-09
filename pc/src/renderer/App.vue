<template>
  <div id="app">
  	<el-container>
  	  <sidebar />
      <router-view></router-view>
	</el-container>
  </div>
</template>

<script>
  import Sidebar from '@/components/Layout/Sidebar'
  export default {
    name: 'pc',
    components:{
    	Sidebar
    }
  }
</script>

<style>
  /* CSS */
</style>
