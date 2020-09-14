<template>
  <div id="message" class="text-left">
    <div class="header grid grid-cols-3 absolute font-semibold">
      <div class="text-left" v-on:click="goBack">Back</div>
      <div></div>
      <div class="text-right" v-on:click="create()">Post</div>
    </div>

    <div class="post p-6">
      <div class="mb-2">
        <div class="mb-2" v-if="$route.params.username">
          Replying to {{$route.params.username}}
        </div>
        <textarea class="w-full" placeholder="What would you like to say?"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Message',
    components: {
    },
    data: function () {
      return {
        message: '',
      }
    },
    created: function () {
      this.profileItem = (window.profileList && window.profileList.name) ? window.profileList : {
        name: 'Darrius'
      };
      console.log(window.profileList, 'pl')
    },
    methods: {
      goBack: function() {
        return this.$router.go(-1)
      },
      create: function() {
        window.notify = {
          open: true,
          post: "Message Created"
        }
        setTimeout(() => {
          this.goBack()
        }, 2000)
      }
    }
  }
</script>

<style lang="scss">
  #message {
    height: calc(813px - 149px);
    overflow: scroll;
    margin-top: 50px;
    background: #fff;
    color: #000;
    font-size: 18px;

    .header {
      background: #fff;
      top: 0px;
      color: #000;
      padding: 15px 15px;
      width: 100%;
    }

    .addtolist {
      margin-top: 0px;
    }

    .scan-qr-btn {
      padding: 6px;
      margin: 0 auto;
      width: 150px;
      text-align: center;
      border: 1px solid #bbb;
      border-radius: 4px;

      &:active {
        background: #eee;
      }
    }
  
  }
</style>