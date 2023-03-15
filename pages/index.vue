<!-- eslint-disable vue/html-self-closing -->
<template>
  <div v-if="isActive" class="bg-cover w-full h-screen flex justify-center items-center">
    <div class="h-fit text-cover">
      <p class="text-[190px] font-black text-white m-0 leading-none">
        Simple
      </p>
      <p class="text-[190px] font-black text-white ease-in m-0 leading-none">
        Quicks
      </p>
    </div>
  </div>
  <div v-else class="w-full bg-stone-800 h-screen">
    <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
      <span class="sr-only">Open sidebar</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z" />
      </svg>
    </button>

    <aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
      <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <ul class="space-y-2">
          <li>
            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <svg aria-hidden="true" class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" /><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" /></svg>
              <span class="ml-3">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
              <span class="flex-1 ml-3 whitespace-nowrap">Kanban</span>
              <span class="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z" /><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" /></svg>
              <span class="flex-1 ml-3 whitespace-nowrap">Inbox</span>
              <span class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" /></svg>
              <span class="flex-1 ml-3 whitespace-nowrap">Users</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd" /></svg>
              <span class="flex-1 ml-3 whitespace-nowrap">Products</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd" /></svg>
              <span class="flex-1 ml-3 whitespace-nowrap">Sign In</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd" /></svg>
              <span class="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>

    <div class="p-4 sm:ml-64 relative">
      <ChatMenu />
      <form class="mb-3">
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
          <input id="default-search" type="search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required>
          <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Search
          </button>
        </div>
      </form>
      <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
        <!-- <div class="grid grid-cols-3 gap-4 mb-4">
          <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
              +
            </p>
          </div>
          <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
              +
            </p>
          </div>
          <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
              +
            </p>
          </div>
        </div>
        <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
          <p class="text-2xl text-gray-400 dark:text-gray-500">
            +
          </p>
        </div>
        <div class="grid grid-cols-2 gap-4 mb-4">
          <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
              +
            </p>
          </div>
          <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
              +
            </p>
          </div>
          <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
              +
            </p>
          </div>
          <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
              +
            </p>
          </div>
        </div>
        <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
          <p class="text-2xl text-gray-400 dark:text-gray-500">
            +
          </p>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
              +
            </p>
          </div>
          <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
              +
            </p>
          </div>
          <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
              +
            </p>
          </div>
          <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
              +
            </p>
          </div>
        </div>
      </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      // isOpen: false,
      // isInbox: false,
      // isTask: false,
      // isSubMenu: false
    }
  },
  computed: {
    isActive () {
      return this.$store.state.home.isActive
    }
    // messageOpen () {
    //   return this.$store.state.home.messageOpen
    // }
  },
  created () {
    setTimeout(() => {
      this.$store.dispatch('home/splashscreen', false)
    }, 4000)
  }
}
</script>
<style scoped>
.bg-cover {
  animation-name: fadeInCover;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
}

.text-cover {
  animation-name: fadeInText;
  animation-delay: 1s;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
  opacity: 0;
}

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
