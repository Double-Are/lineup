<template>
  <div id="addtolist" class="text-left">
    <div class="header grid grid-cols-3 absolute font-semibold">
      <div class="text-left" v-on:click="goBack">Back</div>
      <div class="text-center">Add To List</div>
      <div></div>
    </div>
    <div class="addtolist p-6">
      <div class="mb-6" v-if="!toggleCreate">
        <div>
          <vue-single-select :placeholder="'Add ' + profileItem.name + ' to Existing Deck'" v-model="deck" :options="categories.map(category => category.name)" :required="true">
          </vue-single-select>
          <div v-if="deck">{{profileItem.name}} will be added to {{deck}}</div>
        </div>
      </div>

      <div class="mb-6">
        <div class="flex">
          <toggle-button v-model="toggleCreate" />
          <div class="font-semibold text-base ml-4 mb-6">Create Deck</div>
        </div>
        <div v-if="toggleCreate">
          <div class="font-semibold text-base mb-6">
            <input type="text" placeholder="Name your Deck" class="w-full py-4" v-model="deck" /></div>
        </div>
      </div>
      <div>
        <div class="btn scan-qr-btn bg-white text-left"  v-on:click="create">
          <span v-if="!toggleCreate">Add To Deck</span>
          <span v-if="toggleCreate">Create Deck</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    categories
  } from './../assets/data/frontend-list.js'
  import VueSingleSelect from "vue-single-select";
  import {
    ToggleButton
  } from 'vue-js-toggle-button'


  export default {
    name: 'AddToList',
    components: {
      VueSingleSelect,
      ToggleButton
    },
    data: function () {
      return {
        createDeck: false,
        categories,
        selectDeck: '',
        deck: '',
        toggleCreate: false,
        profileItem: {
          name: 'Darrius'
        }
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
        window.categories.push({
          id: this.categories.length,
          name: this.deck.charAt(0).toUpperCase() + this.deck.slice(1),
          metadata: "",
          contacts: window.profileList
        })
        console.log(window.categories, 'wc')
      }
    }
  }
</script>

<style lang="scss">
  #addtolist {
    height: calc(813px - 149px);
    overflow: scroll;
    margin-top: 50px;
    background: #fff;
    color: #000;

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