<template>
  <div id="searchlist">
    <div class="header-title">
      <div class="search-bar-container">
        <input class="text-sm px-4 py-2" type="text" autofocus placeholder="Search username or title."
          v-on:keydown="(e) => search(e.target.value, mentionsArr)" />
      </div>
    </div>
    <div class="search-list">
      <div v-for="(mention, index) in filteredArr" :key="index + 'filter'" class="p-4">
        <div class="flex flex-1" v-if="mention">
          <div class="mr-4" v-on:click="setProfile({user: { name: { first: mention.name }, picture: { large: mention.profile_image_url_https }}, backgroundPic: 'https://picsum.photos/id/10' + (index*7) + '/200/300)', description: descriptions[index]})">
            <img class="profile-picture" :src="mention.profile_image_url" />
          </div>
          <div class="flex-1 items-start text-left mr-4" v-on:click="setProfile({user: { name: { first: mention.name }, picture: { large: mention.profile_image_url_https }}, backgroundPic: 'https://picsum.photos/id/10' + (index*7) + '/200/300)', description: descriptions[index]})">
            <div class="font-semibold">
              {{mention.name}}
            </div>
            <div class="text-xs">{{mention.description}}</div>
          </div>
          <div class="self-center">
            <div v-on:click="(e) => { setProfileList(mention); e.preventDefault() }">
              <svg class="add-list" width="30" height="30" viewBox="0 0 30 30" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15 0C6.72 0 0 6.72 0 15C0 23.28 6.72 30 15 30C23.28 30 30 23.28 30 15C30 6.72 23.28 0 15 0ZM15 28.02C7.8 28.02 1.98 22.2 1.98 15C1.98 7.8 7.8 1.98 15 1.98C22.2 1.98 28.02 7.8 28.02 15C28.02 22.2 22.2 28.02 15 28.02Z"
                  fill="black" />
                <path
                  d="M20.4 14.22H9.78001C9.24001 14.22 8.76001 14.64 8.76001 15.24C8.76001 15.84 9.18001 16.26 9.78001 16.26H20.4C20.94 16.26 21.42 15.84 21.42 15.24C21.42 14.64 20.94 14.22 20.4 14.22Z"
                  fill="black" />
                <path
                  d="M20.4 8.94H9.78001C9.24001 8.94 8.76001 9.36 8.76001 9.96C8.76001 10.56 9.18001 10.98 9.78001 10.98H20.4C20.94 10.98 21.42 10.56 21.42 9.96C21.42 9.36 20.94 8.94 20.4 8.94Z"
                  fill="black" />
                <path
                  d="M20.4 18.96H16.44C15.9 18.96 15.42 19.38 15.42 19.98C15.42 20.58 15.84 21 16.44 21H20.4C20.94 21 21.42 20.58 21.42 19.98C21.42 19.38 20.94 18.96 20.4 18.96Z"
                  fill="black" />
                <path
                  d="M13.08 20.34H11.4V18.84C11.4 18.3 10.98 17.82 10.38 17.82C9.78 17.82 9.36 18.24 9.36 18.84V20.34H7.68C7.14 20.34 6.66 20.76 6.66 21.36C6.66 21.96 7.08 22.38 7.68 22.38H9.36V24.24C9.36 24.78 9.78 25.26 10.38 25.26C10.98 25.26 11.4 24.84 11.4 24.24V22.38H13.08C13.62 22.38 14.1 21.96 14.1 21.36C14.1 20.76 13.62 20.34 13.08 20.34Z"
                  fill="black" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import mentions from './../assets/data/mention.json';
  import AddList from './../assets/AddList.svg';
  import {
    descriptions
  } from './../assets/data/description-list.js'

  export default {
    name: 'SearchList',
    components: {},
    data: function () {
      return {
        mentions,
        mentionsArr: [],
        filteredArr: [],
        AddList,
        descriptions
      }
    },
    created: function () {
      this.mentionsArr = Object.keys(mentions.globalObjects.users).map(mention => {
        return mentions.globalObjects.users[mention]
      })
      console.log(this.mentionsArr, 'mA')
    },
    methods: {
      setProfileList: function (user) {
        console.log(user)
        window.profileList = user;
        this.$router.push('addtolist')
      },
      setProfile: function (user) {
        console.log('setProfile')
        window.profileChange = {
          user,
          expanded: true
        }
      },
      search: function (nameKey, myArray) {
        console.log(nameKey, myArray)
        this.filteredArr = [];
        if (nameKey.length) {
          myArray.filter(my => {
            if (my.name.toLowerCase().indexOf(nameKey.toLowerCase()) > -1) {
              this.filteredArr.push(my)
              this.$forceUpdate()
              return my;
            }
          })
        }
      }
    }
  }
</script>

<style lang="scss">
  #searchlist {
    background: #fff;
    height: calc(813px - 149px);
    overflow: scroll;
    color: #000;
    position: relative;

    .profile-picture {
      border-radius: 50%;
    }

    .search-bar-container {
      width: 100%;

      input {
        width: inherit;
      }
    }

    .header-title {
      font-size: 32px;
      font-weight: bold;
      position: fixed;
      background: #fff;
      width: 382px;
    }

    .add-list {
      path {
        fill: #a879ad
      }
    }

    .search-list {
      margin-top: 50px;
    }
  }
</style>