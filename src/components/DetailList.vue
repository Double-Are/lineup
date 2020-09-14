<template>
  <div id="detaillist">
    <div class="header grid grid-cols-3 absolute font-semibold">
      <div class="text-left" v-on:click="goBack">Back</div>
      <div class="text-center">{{selectCategory[0].name}}</div>
      <div></div>
    </div>

    <div class="column-wrapper text-left" v-if="listofUsers">
      <div v-for="(user, index) in listofUsers.slice(0, 8)" :key="user.id + index.toString()" class="item">
        <div v-on:click="setProfile({user, backgroundPic: 'https://picsum.photos/id/10' + (index*7) + '/200/300)', description: descriptions[index]})" class="background" v-bind:style="{ backgroundImage: 'url(https://picsum.photos/id/10' + (index*7) + '/200/300)' }">
          <div class="detail-card-profile-picture"><img :src="user.picture.large" /></div>
        </div>
        <div class="user-description" v-on:click="setProfile({user, backgroundPic: 'https://picsum.photos/id/10' + (index*7) + '/200/300)', description: descriptions[index]})">
          <div class="font-semibold text-lg">{{user.name.first}} {{user.name.last}}</div>
          <div class="mb-2">{{user.location.state}}, {{user.location.country}}</div>
          <div class="text-xs text-gray-800 mb-2">{{descriptions[index]}}</div>
        </div>
        <div class="px-2 pb-2 text-black">
          <router-link :to="'/message/' + user.name.first + ' ' + user.name.last" class="w-full">
            <div class="btn-background text-center">
              <div class="py-1 px-2 bg-white text-sm">Message</div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { categories } from './../assets/data/frontend-list.js'
import { descriptions } from './../assets/data/description-list.js'

export default {
  name: 'DetailList',
  data: function() {
    return {
      categories,
      selectCategory: [],
      listofUsers: [],
      descriptions
    }
  },
  components: {},
  created: function() {
    console.log(this.props, 'route');
    console.log(this.$route.params, 'params')
    console.log(categories, 'params')

    console.log(categories.filter(category => (parseInt(this.$route.params.id) === category.id) ? true : false))
    this.selectCategory = categories.filter(category => (parseInt(this.$route.params.id) === category.id) ? true : false)

    this.listofUsers = window.listofUsers;
    
    if (!window.listofUsers) {
      fetch("https://randomuser.me/api/?results=40&noinfo")
          .then(response => response.json())
          .then(data => {
            console.log(this, 'this')
            console.log(data, data.results, this.listofUsers, 'data')
            this.listofUsers = data.results

            this.listofUsers = data.results;
          });
    }
  },
  methods: {
    goBack: function() {
      return this.$router.go(-1)
    },
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

#detaillist {
  height: calc(813px - 149px);
  overflow: scroll;
  margin-top: 50px;

  .header {
    background: #fff;
    top: 0px;
    color: #000;
    padding: 15px 15px;
    width: 100%;
  }

  .btn-background {
    background: #a879ad;
    background: linear-gradient(180deg, #a879ad 0%, #6058c3);
    padding: 2px;
  }

  .column-wrapper {
    margin-top: 15px;
    column-count: 2;
    column-gap: 1em;
    padding: 10px 15px;

    .item {
      background-color: #eee;
      display: inline-block;
      margin: 0 0 1em;
      width: 100%;
      border-radius: 4px;

      .background {
        border-radius: 4px 4px 0 0;

        .detail-card-profile-picture {
          height: 100px; 
          position: relative; 
          width: 100%;
          border-radius: 4px 4px 0 0;
          img {
            height: 45px;
            width: auto;
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;
            position: absolute;
            bottom: -11.5px;
            border-radius: 50%;
            border: 2px solid #000;
          }
        }
      }
    }
  }

  .user-description {
    color: black;
    font-size: 14px;
    padding: 8px;
    margin-top: 11.5px;
  }
}
</style>
