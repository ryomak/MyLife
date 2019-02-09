<template>
	<div class="side">
			<el-menu>
				<el-menu-item index="top" >
					<router-link to="/">TOP</router-link>
				</el-menu-item>
				<el-submenu index="1">
					<template slot="title">
	          <i class="el-icon-location"></i>
	          <span>メモ魔</span>
        	</template>
					<el-menu-item-group title="メモ魔">
	          <el-menu-item index="1-1">
	          	<router-link to="/magical-memo/new">new</router-link>
	          </el-menu-item>
	          <el-menu-item index="1-2">
	          	<router-link to="/magical-memo">メモ一覧</router-link>	
	        	</el-menu-item>
	        </el-menu-item-group>
	      </el-submenu>
			</el-menu>
	</div>
</template>

<script>
	export default{
		name: 'side-bar',
		data(){
			return{
			}
		}
	}
</script>
<style lang="scss">


</style>