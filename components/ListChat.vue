<!-- eslint-disable vue/html-self-closing -->
<template>
  <div class="w-full h-full overflow-y-scroll">
    <div v-for="(item, i) in groupchat" :key="i" class="flex border-b border-solid pb-7 pt-6">
      <div class="profile-img w-2/12 relative">
        <img src="../assets/icon/user-profile.png" class="absolute z-30 left-4" alt="">
        <img src="../assets/icon/user-profile-2.png" class="absolute z-20" alt="">
      </div>
      <a href="javascript:void(0)" class="message w-8/12" @click="openMessage(item.GroupID)">
        <div class="message-info flex gap-3">
          <p class="message-title text-xs font-bold">
            {{ item.GroupName }}
          </p>
          <p class="text-xs">
            {{ $moment(item.LastModified).format('MMMM d, YYYY h:mm') }}
          </p>
        </div>
        <div class="message-text">
          <p class="text-xs font-bold">
            {{ item.Username }}:
          </p>
          <p class="text-xs">
            {{ item.Message }}
          </p>
        </div>
      </a>
      <div class="message-stat w-2/12 flex justify-end items-center">
        <div class="dot"></div>
      </div>
    </div>
    <!-- <div class="flex border-b border-solid pb-7 pt-6">
      <div class="profile-img w-2/12 relative">
        <img src="../assets/icon/user-profile.png" class="absolute z-30 left-4" alt="">
        <img src="../assets/icon/user-profile-2.png" class="absolute z-20" alt="">
      </div>
      <a href="javascript:void(0)" class="message w-8/12" @click="openMessage">
        <div class="message-info flex gap-3">
          <p class="message-title text-xs font-bold">
            Jeannette Moraima Guaman Chamba (Hutto I-589) [ Hutto Follow Up - Brief Service ]
          </p>
          <p class="text-xs">
            02/06/2021 10:45
          </p>
        </div>
        <div class="message-text">
          <p class="text-xs font-bold">
            Ellen:
          </p>
          <p class="text-xs">
            Hey, please read.
          </p>
        </div>
      </a>
      <div class="message-stat w-2/12 flex justify-end items-center">
        <div class="dot"></div>
      </div>
    </div> -->
    <div class="flex pb-7 pt-6">
      <div class="profile-img w-2/12 relative">
        <img src="../assets/icon/user-profile.png" class="absolute z-30 left-4" alt="">
        <img src="../assets/icon/user-profile-2.png" class="absolute z-20" alt="">
      </div>
      <a href="javascript:void(0)" class="message w-8/12" @click="openMessage">
        <div class="message-info flex gap-3">
          <p class="message-title text-xs font-bold">
            FastVisa Support
          </p>
          <p class="text-xs">
            01/06/2021 12:19
          </p>
        </div>
        <div class="message-text">
          <p class="text-xs">
            Hey there! Welcome to your inbox.
          </p>
        </div>
      </a>
      <div class="message-stat w-2/12 flex justify-end items-center">
        <div class="dot"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ListChat',
  computed: {
    groupchat () {
      return this.$store.state.message.listChat
    }
  },
  methods: {
    openMessage (id) {
      this.$store.dispatch('message/openMessage', true)
      this.$store.dispatch('message/getGroupTitle', id)
      this.$store.dispatch('message/getGroupData', id)
    }
  }
}
</script>
<style scoped>
.dot {
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background: #EB5757;
}
.message-title {
    color: #2F80ED;
}
</style>
