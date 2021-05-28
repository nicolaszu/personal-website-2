<template>
  <div class="w-full flex relative group justify-center">
    <div class="relative flex p-3 h-128 w-64 phone-shadow rounded-3xl">
      <template v-if="appScreen === 0">
        <div
          class="w-full h-full bg-radial bg-cover rounded-2xl phone-grid p-4"
        >
          <div class="col-start-1 col-span-full flex justify-between">
            <p class="text-white text-sm">{{ time }}</p>
            <div class="flex space-x-2">
              <wifi-icon class="h-4 w-auto text-white" />
              <battery-icon class="h-4 w-4 text-white" />
            </div>
          </div>
          <img
            key="hand"
            class="object-contain self-center w-16 md:w-16 transform transition-all duration-300 ease-in-out animate-hand"
            src="/images/trailBee/White-in-jumper5.png"
            alt="hand"
            loading="lazy"
          />
          <div class="justify-center items-center flex flex-col row-start-2">
            <div
              class="w-auto h-full p-2 app-square-shadow rounded-xl"
              @click="appForward"
            >
              <img
                key="logo"
                class="object-contain img-opt w-full h-full"
                src="/images/trailBee/trailBeeLogo.png"
                alt="logo"
                loading="lazy"
              />
            </div>
          </div>
          <p
            class="justify-self-center row-start-3 text-white text-xs font-light tracking-wider"
          >
            TrailBee
          </p>
          <div
            class="p-3 grid grid-cols-4 gap-3 rounded-2xl col-span-full w-full h-14 self-end bg-white bg-opacity-50"
            :style="{ 'grid-row-start': '9' }"
          >
            <phone-icon class="w-full h-full" />
            <safari-icon class="w-full h-full" />
            <camera-icon class="w-full h-full" />
            <apple-store-icon class="w-full h-full" />
          </div>
        </div>
      </template>
      <template v-else>
        <div
          class="w-full h-full bg-cover rounded-2xl phone-grid-app gap-y-4 p-4"
          :class="{ 'bg-yellow-radial': appScreen === 2 }"
        >
          <div class="col-start-1 col-span-full flex justify-between">
            <p class="text-black text-sm">{{ time }}</p>
            <div class="flex space-x-2">
              <wifi-icon class="h-4 w-auto text-black" />
              <battery-icon class="h-4 w-4 text-black" />
            </div>
          </div>
          <template v-if="appScreen === 1">
            <img
              key="title"
              class="col-span-full row-start-2 row-span-2 object-contain img-opt w-full h-full"
              src="/images/trailBee/trailBeeLogoTitle.png"
              alt="trailbee logo title"
              loading="lazy"
            />
            <div class="col-span-full row-span-1">
              <p class="text-xs text-gray-400">Email</p>
              <div class="w-full p-1 rounded-md border border-gray-300">
                <p>me@trailbee.com</p>
              </div>
            </div>
            <div class="col-span-full row-span-1">
              <p class="text-xs text-gray-400">Password</p>
              <div class="w-full p-1 rounded-md border border-gray-300">
                <p>••••••••••••</p>
              </div>
            </div>
            <div class="row-start-7 col-span-full justify-center">
              <button
                class="shadow-none w-full text-white font-medium bg-yellow-400 rounded-md"
                @click="appForward"
              >
                Login
              </button>
            </div>
          </template>
          <template v-else>
            <div class="col-span-fulljustify-self-center self-center">
              <p class="text-lg font-bold text-black">Routes</p>
              <p class="text-xs text-black">March 11, 2021</p>
            </div>
            <img
              key="view"
              class="col-span-full rounded-lg row-start-3 row-span-4 object-contain img-opt w-full h-full"
              src="/images/trailBee/parentView.png"
              alt="view"
              loading="lazy"
            />

            <button class="text-black shadow-none" @click="appScreen = 0">
              Back
            </button>
          </template>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import batteryIcon from '@/assets/icons/phone/battery.svg'
import wifiIcon from '@/assets/icons/phone/wifi.svg'
import phoneIcon from '@/assets/icons/phone/phone.svg'
import safariIcon from '@/assets/icons/phone/safari.svg'
import cameraIcon from '@/assets/icons/phone/camera.svg'
import appleStoreIcon from '@/assets/icons/phone/apple-store.svg'
export default {
  components: {
    batteryIcon,
    wifiIcon,
    phoneIcon,
    safariIcon,
    cameraIcon,
    appleStoreIcon,
  },
  data() {
    return {
      appScreen: 0,
    }
  },
  computed: {
    time() {
      const current = new Date()
      return (
        current.getHours() +
        ':' +
        (current.getMinutes() < 10 ? '0' : '') +
        current.getMinutes()
      )
    },
  },
  methods: {
    appForward() {
      this.appScreen = this.appScreen + 1
    },
  },
}
</script>

<style lang="scss" scoped>
.phone-shadow {
  background: #f6f9fc;
  box-shadow: 0 50px 100px -20px rgb(50 50 93 / 25%),
    0 30px 60px -30px rgb(0 0 0 / 30%), inset 0 -2px 6px 0 rgb(10 37 64 / 35%);
  -webkit-user-select: none;
}
.bg-radial {
  background-image: url('~/static/images/trailBee/wallpaper.jpg');
}
.app-square-shadow {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  background: #efefef;
  transition: box-shadow 0.6s cubic-bezier(0.79, 0.21, 0.06, 0.81);
  @apply cursor-pointer;
  &:hover {
    background: rgb(236, 236, 236);
    -webkit-filter: brightness(90%);
    -webkit-transition: all 0.1s ease;
    -moz-transition: all 0.1s ease;
    -o-transition: all 0.1s ease;
    -ms-transition: all 0.1s ease;
    transition: all 0.1s ease;
  }
}
.phone-grid {
  @apply grid grid-cols-4;
  grid-template-rows: repeat(9, minmax(0, 1fr));
}

.phone-grid-app {
  @apply grid;
  grid-template-rows: repeat(8, minmax(0, 1fr));
}

@keyframes bounce {
  0%,
  100% {
    transform: translateX(25%);
    animationtimingfunction: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateX(0);
    animationtimingfunction: cubic-bezier(0, 0, 0.2, 1);
  }
}
.animate-hand {
  animation: bounce 1s infinite;
}
.bg-yellow-radial {
  background: radial-gradient(50% 50% at 50% 50%, #ff9900 0%, #ffc331 100%);
}
</style>
