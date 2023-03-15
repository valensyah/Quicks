<template>
  <div v-if="messages.length > 0" class="w-full h-5/6 overflow-y-scroll relative mb-3">
    <div v-for="(items, i) in messages" :key="i">
      <div v-if="$moment(items.Date).format('DD/MM/YYYY') == $moment().format('DD/MM/YYYY')" class="w-full flex gap-4 items-center mt-4">
        <hr class="w-full border-t border-solid" style="border-color: #4F4F4F">
        <p class="w-full text-center text-xs font-bold" style="color: #4F4F4F">
          {{ $moment().calendar() }}
        </p>
        <hr class="w-full border-t border-solid border-solid" style="border-color: #4F4F4F">
      </div>
      <div v-else-if="$moment(items.Date).format('DD/MM/YYYY') > $moment().format('DD/MM/YYYY') && i != messages.length - 1" class="w-full flex gap-4 items-center mt-4">
        <hr class="w-full border-t border-solid" style="border-color: #4F4F4F">
        <p class="w-full text-center text-xs font-bold" style="color: #4F4F4F">
          {{ $moment(items.Date).format('DD/MM/YYYY h:mm') }}
        </p>
        <hr class="w-full border-t border-solid border-solid" style="border-color: #4F4F4F">
      </div>
      <div v-else-if="$moment(items.Date).format('DD/MM/YYYY') < $moment().format('DD/MM/YYYY') && i > 0" class="w-full flex gap-4 items-center mt-4">
        <hr class="w-full border-t border-solid" style="border-color: #4F4F4F">
        <p class="w-full text-center text-xs font-bold" style="color: #4F4F4F">
          {{ $moment(items.Date).format('DD/MM/YYYY h:mm') }}
        </p>
        <hr class="w-full border-t border-solid border-solid" style="border-color: #4F4F4F">
      </div>
      <div v-for="(item, j) in items.Data" :key="j" :class="`chat-box flex flex-col ${item.Username === 'Saya' ? 'place-items-end' : 'place-items-start'} mt-4`">
        <p>{{ item.Username === 'Saya' ? 'You' : item.Username }}</p>
        <div :class="`flex gap-1 ${item.Username === 'Saya' ? 'flex-row-reverse' : 'flex-row'}`">
          <div :class="`w-fit h-fit rounded-md text-start ${item.BgChat} p-3`">
            <p class="text-gray-700 w-80">
              {{ item.Message }}
            </p>
            <p class="text-gray-700">
              {{ $moment(item.Time).format('h:mm') }}
            </p>
          </div>
          <a id="dropdownBottomButton" data-dropdown-toggle="dropdownBottom" data-dropdown-placement="bottom" href="javascript:void(0)" class="mt-1">
            <img src="../assets/icon/option-dot.png" class="h-fit" alt="">
          </a>
          <!-- Dropdown menu -->
          <div id="dropdownBottom" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownBottomButton">
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="chat-box flex flex-col place-items-start mt-4">
      <p>Mary Hilda</p>
      <div class="w-fit h-fit rounded-md text-start p-3" style="background: #FCEED3">
        <p class="text-gray-700 w-80">
          Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks.
        </p>
        <p class="text-gray-700">
          19:32
        </p>
      </div>
    </div>
    <div class="chat-box flex flex-col place-items-start mt-4">
      <p>Mary Hilda</p>
      <div class="w-fit h-fit rounded-md text-start p-3" style="background: #FCEED3">
        <p class="text-gray-700 w-80">
          Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks.
        </p>
        <p class="text-gray-700">
          19:32
        </p>
      </div>
    </div> -->
  </div>
  <div v-else class="w-full h-5/6 flex justify-center items-center">
    <p>Belum ada chat</p>
  </div>
</template>
<script>
export default {
  name: 'ChatRoom',
  computed: {
    messages () {
      return this.$store.state.message.detail
    }
  },
  mounted () {},
  methods: {
    bgChat () {
      const months = ['bg-green-100', 'bg-orange-100']

      const random = Math.floor(Math.random() * months.length)

      return months[random]
    }
  }
}
</script>
