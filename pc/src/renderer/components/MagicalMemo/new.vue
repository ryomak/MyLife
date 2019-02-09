<template>
  <div>
    <el-button @click="newMemo(memo)">new</el-button>
  </div>
</template>

<script>
	import { mapState, mapActions, mapMutations, mapGetters } from 'vuex';
  export default {
    name: 'magical-memo-new',
    data(){
    	return{
    		memo:{
	    		title: 'a',
				  fact: '',
				  abstraction: '',
				  diversion: '',
				  created_at:null
				}
    	}
    },
    methods: {
    	newMemo(str){
    		this.$store.dispatch('MagicalMemo/newMemo',str)
    	}
   		//...mapActions(['newMemo'])
    }
  }
</script>

<style lang="scss">

</style>
