<template>
  <div id="search" class="text-left">
    <div class="header-title p-6">
      Search
      <router-link to="/searchlist">
        <div class="search-bar-container">
          <input class="text-sm" type="text" placeholder="Search username or title." />
        </div>
      </router-link>
    </div>
    <div class="search">
      <div class="qr-container">
        <div class="text-lg font-semibold px-6 text-center text-white">
          Your Business Card 
        </div>
        <div class="text-center m-auto">
          <img class="qr" :src="EasterEgg" />
        </div>
        <div class="btn scan-qr-btn bg-white">Scan QR Code</div>
      </div>
      <div class="p-6">
        <div class="text-lg font-semibold">
          GEOLOCATION 
          <div class="geolocation py-5">
            <div class="mb-6 text-base mb-4">Meetups in Virgina - 25 miles</div>
            <ul class="meetups-list mb-6">
              <li class="text-sm mb-4"><a href="https://www.meetup.com/qc-flutter/events/272507827/" target="_blank">Flutter meetup <span class="font-normal text-sm">(Hosted by Carl Z.) - By MeetUp</span></a></li>
              <li class="text-sm mb-4"><a href="https://www.meetup.com/Flutter-Fare/events/273116137/" target="_blank">Working with Flutter Layouts, Containers, and Themes <span class="font-normal text-sm">(Hosted by Jack F.) - By MeetUp</span></a></li>
              <li class="text-sm"><a href="https://www.meetup.com/nova-ux/events/272632141/" target="_blank">Inclusive Design - Advocating For Inclusive Design On Your Design Team <span class="font-normal text-sm">(Hosted by Jody T. and 2 others) - By MeetUp</span></a></li>
            </ul>
            <div>
              <div class="text-base mb-4">Developers, Designers in Virgina - 25 miles</div>
              <div class="flex" v-for="(mention, index) in Object.keys(mentions.globalObjects.tweets).slice(0, 10)" :key="mention" v-on:click="setProfile({user: { name: { first: mentions.globalObjects.users[mentions.globalObjects.tweets[mention].user_id_str].name }, picture: { large: mentions.globalObjects.users[mentions.globalObjects.tweets[mention].user_id_str].profile_image_url_https }}, backgroundPic: 'https://picsum.photos/id/10' + (index*7) + '/200/300)', description: descriptions[index]})">
                <div class="user-profile-pic-container mr-4" v-if="mentions.globalObjects.users[mentions.globalObjects.tweets[mention].user_id_str]">
                  <img class="user-profile-pic" :src="mentions.globalObjects.users[mentions.globalObjects.tweets[mention].user_id_str].profile_image_url_https" />
                </div>
                <div>
                  <div>
                    <span class="font-bold mr-2" v-if="mentions.globalObjects.users[mentions.globalObjects.tweets[mention].user_id_str]">{{mentions.globalObjects.users[mentions.globalObjects.tweets[mention].user_id_str].name}}</span> 
                    <div class="font-normal text-sm text-gray-800">{{location[Math.floor(Math.random() * location.length)]}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
        
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EasterEgg from './../assets/EasterEgg.svg'
import mentions from './../assets/data/mention.json';
import { descriptions } from './../assets/data/description-list.js'


export default {
  name: 'Search',
  components: {},
  data: function() {
    return {
      EasterEgg,
      mentions,
      location: ['Fairfax, VA', 'Arlington, VA', 'Alexandria, VA', 'Falls Church, VA', 'Loudoun, VA'],
      descriptions
   }
  },
  methods: {
    setProfile: function(user) {
      console.log('setProfile')
      window.profileChange = {
        user,
        expanded: true
      }
    }
  }
}
</script>

<style lang="scss">

#search {
  background: #fff; 
  height: calc(813px - 146px);
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

  .meetups-list {
      border: 1px solid #bbb;
      padding: 20px;
      border-radius: 4px;

      li:not(:last-child) {
        border-bottom: 1px solid #eee;
        padding-bottom: 16px;
      }
  }

  .geolocation {
    .flex {
      padding: 6px;
      border-radius: 4px;
      &:active {
        background: #eee;
      }
    }
  }

  .user-profile-pic {
    min-width: 45px !important;
    height: 45px;
    border-radius: 50%;
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
  
  .qr-container {
    margin: 14px;
    padding: 15px;
    border-radius: 8px;
    background: linear-gradient(180deg, #a879ad 0%, #6058c3 100%);
  }

  .qr { 
    margin: 20px auto;
    border-radius: 4px;
  }

  .search {
    margin-top: 145px;
  }
  .search-bar-container  {
    margin-top: -10px;
    input {
      width: 100%;
      // border: 1px solid #888;
      padding: 10px 15px;
      border-radius: 50px;
      background: #eee;
    }
  }
}
</style>
