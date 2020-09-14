<template>
  <div id="home" class="text-left p-6" v-on:mouseover="home(true)" v-on:mouseout="home(false)">
    <div class="header grid grid-cols-2 mb-6 absolute">
      <div class="flex self-center align-center items-center">
        <img class="mr-1" :src="Cards" />
        <div class="font-semibold">LineUp</div>
      </div>
      <router-link to="/message" class="tweet-route">
        <div class="tweet-chat text-right self-center">
          <svg class="text-right" width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 31C29.9071 30.9999 29.8146 30.987 29.7251 30.9619L23.2563 29.1133C20.0859 30.8713 16.3871 31.4245 12.841 30.6712C9.295 29.9178 6.14058 27.9086 3.95875 25.0135C1.77691 22.1184 0.714593 18.5325 0.967455 14.9161C1.22032 11.2998 2.77133 7.89655 5.33482 5.33327C7.89832 2.77 11.3017 1.21928 14.918 0.966724C18.5344 0.714171 22.1202 1.77679 25.0151 3.95888C27.91 6.14096 29.919 9.29555 30.6721 12.8417C31.4251 16.3878 30.8716 20.0865 29.1133 23.2568L30.9614 29.7256C31.0039 29.8744 31.0112 30.031 30.9829 30.1831C30.9545 30.3352 30.8913 30.4787 30.7981 30.6022C30.7049 30.7257 30.5843 30.826 30.4458 30.895C30.3073 30.964 30.1547 30.9999 30 31ZM16 2.99998C13.998 2.99595 12.0221 3.45437 10.2263 4.33951C8.43057 5.22464 6.86353 6.51257 5.64736 8.10288C4.43119 9.69319 3.59876 11.5429 3.21496 13.5078C2.83116 15.4727 2.90637 17.4997 3.43472 19.4308C3.96308 21.3618 4.9303 23.1448 6.26097 24.6406C7.59165 26.1364 9.24983 27.3046 11.1062 28.0543C12.9626 28.8039 14.9671 29.1146 16.9633 28.9622C18.9595 28.8099 20.8936 28.1985 22.6147 27.1758C22.7321 27.1072 22.8621 27.0629 22.997 27.0455C23.1319 27.028 23.2689 27.0378 23.3999 27.0742L28.5439 28.5442L27.0739 23.3997C27.0365 23.2688 27.0261 23.1316 27.0436 22.9966C27.0611 22.8616 27.106 22.7316 27.1755 22.6146C28.3485 20.6427 28.9778 18.3951 28.9993 16.1007C29.0209 13.8064 28.4338 11.5474 27.298 9.55386C26.1621 7.56031 24.5181 5.90349 22.5335 4.7522C20.5488 3.6009 18.2944 2.9963 16 2.99998V2.99998Z" fill="black"/>
          </svg>
        </div>
      </router-link>
    </div>
    <listBox />
  </div>
</template>

<script>
import ListBox from './ListBox.vue'
import Cards from './../assets/Cards.svg'

export default {
  name: 'Home',
  components: {
    ListBox,
  },
  data: function() {
    return {
      Cards,
      hover: window.views
    }
  },
  created: function() {
    window.views = { home: false, list: false, search: false, mention: false, profile: false };
  },
  methods: {
    home: function(bool) {
       window.views.home = bool
    }
  }
}
</script>

<style lang="scss">

#home {
  height: calc(700px - 70px);
  overflow: scroll;
  margin-top: 50px;

  .tweet-route {
     justify-self: end;
     align-self: center;
  }

  .tweet-chat {
    svg {
      height: 25px !important;
    }
  }

  .header {
    background: #fff;
    top: 0px;
    left: 0;
    color: #000;
    padding: 10px 15px;
    width: 100%;
    font-size: 24px;

    img {
      height: 30px;
    }
  }

}
</style>
