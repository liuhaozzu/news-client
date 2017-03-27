/**
 * Created by Administrator on 2017/3/26 0026 22:16.
 */
export default{
    headerShow(state){
        //alert('getters:'+state.header);
        return state.header;
    },
    loading(state){
        console.log('loading getter:'+state.loading);
        return state.loading;
    }
};