<template>
  <div>
    <a href="javascript:void(0)" :class="`menu fixed ${isSubMenu ? 'z-20 iconFocusOut' : 'z-50'}`" @click="openMenu">
      <div class="relative">
        <img v-if="!isSubMenu" src="../assets/icon/menu.png" style="width: 68px; height: 68px" alt="">
        <img v-else src="../assets/icon/Ellipse.png">
      </div>
    </a>
    <a id="inbox" href="#" :class="`${isOpen ? 'block' : 'hidden'} slideInInbox fixed z-40`" @click="openSubMenu('inbox')">
      <div class="relative">
        <p :class="`absolute -top-7 text-center text-white w-full ${isSubMenu ? 'hidden' : 'block'}`">Inbox</p>
        <img :src="isInbox ? require(`../assets/icon/inbox-filled.png`) : require(`../assets/icon/inbox.png`)" :style="`${isInbox ? 'width: 62px; height: 62px' : 'width: 68px; height: 68px'}`" alt="">
      </div>
    </a>
    <a id="task" href="#" :class="`${isOpen ? 'block' : 'hidden'} slideInTask fixed z-30`" @click="openSubMenu('task')">
      <div class="relative">
        <p :class="`absolute -top-7 text-center text-white w-full ${isSubMenu ? 'hidden' : 'block'}`">Task</p>
        <img src="../assets/icon/task.png" style="width: 68px; height: 68px" alt="">
      </div>
    </a>
    <div :class="`inbox-modal absolute shadow-sm border-1 bg-white rounded-md ${isInbox ? 'block' : 'hidden'}`">
      <form v-if="!messageOpen">
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div class="relative">
          <div class="absolute inset-y-0 left-3/4 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
          <input id="default-search" type="search" class="block w-full h-2 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required>
        </div>
      </form>
      <div v-else class="w-full h-12 flex gap-3 items-center">
        <a href="javascript:void(0)" @click="closeMessage">
          <img src="../assets/icon/arrow_back.png" alt="">
        </a>
        <div class="goup-chat">
          <p
            style="font-size: 14px; color: #2F80ED;"
          >
            {{ detail.GroupName }}
          </p>
          <p class="text-gray-700" style="font-size: 12px;">
            3 participants
          </p>
        </div>
      </div>
      <div v-if="loading" class="w-full h-5/6 flex justify-center items-center">
        <div>
          <img class="animate-spin mx-auto" src="../assets/icon/load.png" alt="">
          <p class="w-full text-center">
            Loading chats...
          </p>
        </div>
      </div>
      <div v-else class="w-full h-5/6 relative">
        <ListChat v-if="!messageOpen" />
        <div v-else class="w-full h-full">
          <ChatRoom />
          <div class="flex items-center absolute w-full">
            <label for="voice-search" class="sr-only">Search</label>
            <div class="relative w-full">
              <!-- <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              </div> -->
              <input
                id="search"
                v-model="message"
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Mockups, Logos, Design Templates..."
                required
              >
              <input id="date" type="hidden" :value="$moment().format('YYYY-MM-DD h:mm')">
              <!-- <button type="button" class="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg aria-hidden="true" class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clip-rule="evenodd" /></svg>
              </button> -->
            </div>
            <button class="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" @click="sendMessage">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isOpen: false,
      isInbox: false,
      isTask: false,
      isSubMenu: false,
      message: '',
      date: ''
    }
  },
  computed: {
    isActive () {
      return this.$store.state.home.isActive
    },
    messageOpen () {
      return this.$store.state.message.messageOpen
    },
    detail () {
      return this.$store.state.message.detailTitle
    }
  },
  methods: {
    openMenu () {
      const inbox = document.getElementById('inbox')
      const task = document.getElementById('task')
      if (!this.isOpen) {
        this.isOpen = true
      } else {
        inbox.classList.remove('slideInInbox')
        inbox.classList.add('slideOutInbox')
        task.classList.remove('slideInTask')
        task.classList.add('slideOutTask')
        setTimeout(() => {
          this.isOpen = false
        }, 1000)
      }
    },
    openSubMenu (menu) {
      this.isSubMenu = true
      const inbox = document.getElementById('inbox')
      const task = document.getElementById('task')
      if (menu === 'inbox') {
        if (!this.isInbox) {
          inbox.classList.add('slideInboxAtClick')
          task.classList.add('slideTaskAtInboxClick')
          this.isInbox = true
        } else {
          setTimeout(() => {
            this.isInbox = false
            this.isSubMenu = false
          }, 1000)
        }
      }
    },
    closeMessage () {
      this.$store.dispatch('message/closeMessage')
    },
    sendMessage () {
      if (this.message !== '') {
        const data = {
          Date: document.getElementById('date').value,
          GroupID: this.detail.GroupID,
          Data: [
            {
              Username: 'Saya',
              Message: this.message,
              Time: document.getElementById('date').value,
              Read: true,
              BgChat: 'bg-purple-100'
            }
          ]
        }
        this.$store.dispatch('message/send', data)
      }
    }
  }
}
</script>
<style scoped>
.menu {
  top: 89%; left: 94%;
}

.slideInInbox {
  animation-name: slideInInbox;
  animation-duration: .6s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
  top: 89%;
  left: 94%;
  width: 68px;
  height: 68px
}

.slideInTask {
  animation-name: slideInTask;
  animation-duration: .8s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
  top: 89%;
  left: 94%;
  width: 68px;
  height: 68px
}

.slideOutInbox {
  animation-name: slideOutInbox;
  animation-duration: .6s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
  top: 89%;
  left: 88.5%;
  width: 68px;
  height: 68px
}

.slideOutTask {
  animation-name: slideOutTask;
  animation-duration: .6s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
  top: 89%;
  left: 83%;
  width: 68px;
  height: 68px
}

.slideInboxAtClick {
  animation-name: slideInboxAtClick;
  animation-duration: .5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
  top: 89%;
  left: 88.5%;
  width: 68px;
  height: 68px;
}

.slideTaskAtInboxClick {
  animation-name: slideTaskAtInboxClick;
  animation-duration: .5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
  top: 89%;
  left: 83%;
  width: 68px;
  height: 68px;
}

.iconFocusOut {
  animation-name: iconFocusOut;
  animation-duration: .5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
  top: 89%;
  left: 94%;
  background: #4F4F4F;
  border-radius: 100%;
  width: 62px;
  height: 62px;
}

.inbox-modal {
  width: 500px;
  height: 434px;
  left: 60%;
  top: 205px;
  padding: 20px 34px;
}

/* #task {
}

#inbox {
} */

/* .text-cover {
  animation-name: fadeOut;
  animation-delay: .8s;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
} */

@keyframes fadeInCover {
  0% {opacity: 0;}
  100% {opacity: 1; background: #0F8A69;}
}

@keyframes fadeInText {
  0% {opacity: 0;}
  100% {opacity: 1;}
}

@keyframes slideInInbox {
  0% {opacity: 0; left: 94%;}
  100% {opacity: 1; left: 88.5%;}
}

@keyframes slideInTask {
  0% {opacity: 0; left: 94%;}
  100% {opacity: 1; left: 83%;}
}

@keyframes slideOutInbox {
  0% {opacity: 1; left: 88.5%;}
  100% {opacity: 0; left: 94%;}
}

@keyframes slideOutTask {
  0% {opacity: 1; left: 83%;}
  100% {opacity: 0; left: 94%;}
}

@keyframes slideInboxAtClick {
  0% {left: 88.5%;}
  100% {left: 94%;}
}

@keyframes slideTaskAtInboxClick {
  0% {left: 83%;}
  100% {left: 88.5%;}
}

@keyframes iconFocusOut {
  0% {opacity: 0; left: 94%;}
  100% {opacity: 1; left: 93.2%;}
}

/* @keyframes fadeOut {
  0% {opacity: 1;}
  100% {opacity: 0}
} */
</style>
