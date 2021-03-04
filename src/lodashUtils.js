// import _ from 'lodash' // webpack5 已经配置好了 _ 变量,目前不需要手动配置 ProviderPlugin
function createString(){
  console.log($)
  return _.join(['a', 'b', 'c'], '&*&*&*&');
}
export default createString;