/**
 * Created by Administrator on 2017/3/26 0026 22:13.
 */
import Vue  from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


import actions from './actions'
import mutations from './mutations'

export default new Vuex.Store({
    actions,
    modules:{
        mutations
    }
});