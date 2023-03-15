export default {
  async getListChat ({ commit }, data) {
    await commit('setList', data)
  },
  async getGroupData ({ commit }, data) {
    await commit('setGroup', data)
  },
  async getGroupTitle ({ commit }, data) {
    await commit('setGroupTitle', data)
  },
  async send ({ commit }, data) {
    await commit('setMessage', data)
  },
  async openMessage ({ commit }, data) {
    await commit('setMessageStat', data)
  },
  async closeMessage ({ commit }) {
    await commit('setMessageStatClose')
  },
  async editMessage ({ commit }, data) {
    await commit('editMessage', data)
  },
  async deleteMessage ({ commit }, data) {
    await commit('deleteMessage', data)
  }
}
