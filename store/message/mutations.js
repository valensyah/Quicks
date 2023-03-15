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
        if (item.Date === data.Date) {
          item.Data.push(data.Data[0])
        } else {
          count += 1
        }
        return item
      })
    } else {
      state.listMessage.push(data)
    }

    if (count === state.listMessage.length) {
      state.listMessage.push(data)
    }
    state.detail = state.listMessage
  },
  setMessageStat (state, data) {
    state.messageOpen = data
  },
  setMessageStatClose (state) {
    state.messageOpen = false
  },
  editMessage (state, data) {
    state.listMessage.map((item) => {
      if (item.GroupID === data.GroupID) {
        item.Data.map((val) => {
          if (val.id === data.id) {
            item.Message = data.Message
          }
          return item
        })
      }
      return state.listMessage
    })
    state.detail = state.listMessage
  },
  deleteMessage (state, data) {
    state.listMessage.map((item, i) => {
      if (item.GroupID === data.GroupID) {
        item.Data.map((val, i) => {
          if (val.id === data.id) {
            if (state.listMessage.length > 0) {
              val.splice(i, i + 1)
            } else {
              item.splice(i, i + 1)
            }
          }
          return item
        })
      }
      return state.listMessage
    })
    state.detail = state.listMessage
  }
}
