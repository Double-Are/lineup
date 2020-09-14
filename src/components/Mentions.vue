<template>
  <div id="mentions" class="text-left">
    <div class="header-title px-6 pt-4">Mentions</div>

    <div class="mentions py-5 px-6">
      <router-link :to="'/message/' + mentions.globalObjects.users[mentions.globalObjects.tweets[mention].user_id_str].name" class="flex mb-4" v-for="mention in Object.keys(mentions.globalObjects.tweets).reverse()" :key="mention">
        <div class="user-profile-pic-container mr-4" v-if="mentions.globalObjects.users[mentions.globalObjects.tweets[mention].user_id_str]">
          <img class="user-profile-pic" :src="mentions.globalObjects.users[mentions.globalObjects.tweets[mention].user_id_str].profile_image_url_https" />
        </div>
        <div>
          <div>
            <span class="font-bold mr-2" v-if="mentions.globalObjects.users[mentions.globalObjects.tweets[mention].user_id_str]">{{mentions.globalObjects.users[mentions.globalObjects.tweets[mention].user_id_str].name}}</span> 
            <span class="font-semibold time text-xs">{{moment(mentions.globalObjects.tweets[mention].created_at).format("ddd, hA")}}</span>
          </div>
          <div class="tweet text-sm text-gray-800">{{mentions.globalObjects.tweets[mention].full_text}}</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import mentions from './../assets/data/mention.json';
import moment from 'moment';

export default {
  name: 'Mentions',
  components: {},
  data: function() {
    return {
      mentions,
      moment
    }
  }
}
</script>

<style lang="scss">

#mentions {
  background: #fff; 
  height: calc(813px - 149px);
  overflow: scroll;
  color: #000;
  position: relative;

  .header-title {
    font-size: 32px;
    font-weight: bold;
    position: fixed;
    background: #fff;
    width: 382px;
  }

  .user-profile-pic {
    min-width: 45px !important;
    height: 45px;
    border-radius: 50%;
  }

  .mentions {
    margin-top: 70px;
  }
}
</style>
