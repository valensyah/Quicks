export default {
  async splashscreen ({ commit }, data) {
    await commit('setSplash', data)
  }
}
