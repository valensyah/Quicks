export default {
  setList (state, data) {
    state.listChat = data
  },
  setGroupTitle (state, data) {
    state.listChat.map((item) => {
      if (item.GroupID === data) {
        state.detailTitle = item
      }
      return state.detailTitle
    })
  },
  setGroup (state, data) {
    state.detail = []
    state.listMessage.map((item) => {
      if (item.GroupID === data) {
        state.detail.push(item)
      }
      return state.detail
    })
  },
  setMessage (state, data) {
    let count = 0
    if (state.listMessage.length > 0) {
      state.listMessage.map((item) => {
        if (this.$moment(item.Date).format('DD/MM/YYYY') === this.$moment(data.Date).format('DD/MM/YYYY')) {
          item.Data.push(data.Data[0])
        } else {
          count += 1
        }
        return item
      })
    } else {
      state.listMessage.push(data)
    }
    if (count <= 0) {
      state.listMessage.push(data)
    }
    state.detail = state.listMessage
  },
  setMessageStat (state, data) {
    state.messageOpen = data
  },
  setMessageStatClose (state) {
    state.messageOpen = false
  }
}
