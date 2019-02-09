const memoType ={
  title: '',
  fact: '',
  abstraction: '',
  diversion: '',
  created_at:null,
}

const state = {
  memos:[],
}

const getters = {
  memos:(state)=>(title)=>{return state}
}

const mutations = {
  Set(state ,payload){
    state = payload
  },
  APPEND_MAGICAL_MEMO(state,payload) {
    state.memos.push(payload)
  }
}

const actions = {
  newMemo(ctx,payload) {
    console.log(ctx)
    console.log(payload)
    // do something async
    ctx.commit('APPEND_MAGICAL_MEMO',payload)
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
