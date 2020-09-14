<template>
  <div id="lists" class="text-left">
    <div class="header-title px-6 pt-4 mb-4">Favorites 
      <div class="header-description text-xs text-gray-800 font-normal"><span>Check lists to add to toggle decks on homescreen</span></div>
    </div>
    <div class="lists py-5 px-6">
      <div v-for="(category, index) in categories" :key="category.id" class="mb-3 list-item">
        <div v-if="category.checked" class="pretty p-icon p-round p-smooth" v-on:click="() => checkMe(index, false)">
          <input class="mr-6" type="checkbox" :checked="category.checked"/>
          <div class="state p-success">
            <i class="icon mdi mdi-check"></i>
            <label class="text-lg">{{category.name}}</label>
          </div>
        </div>
      </div>

      <hr class="mb-4"/>

      <div v-for="(category, index) in categories" :key="category.id + 'unchecked'" class="mb-3 list-item">
        <div v-if="!category.checked" class="pretty p-icon p-round p-smooth" v-on:click="() => checkMe(index, true)">
          <input class="mr-6" type="checkbox" :checked="category.checked"/>
          <div class="state p-success">
            <i class="icon mdi mdi-check"></i>
            <label class="text-lg">{{category.name}}</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { categories } from './../assets/data/frontend-list.js'

export default {
  name: 'Lists',
  components: {},
  data: function () {
    return {
      categories: window.categories || categories
    }
  },
  created: function() {
  },
  methods: {
    checkMe: function(id, condition) {
      this.categories[id].checked = condition
      console.log(this.categories, 'c')
      this.$forceUpdate();
    }
  }
}
</script>

<style lang="scss">

#lists {
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
  .header-description {
    margin-top: -5px;
  }

  .lists {
    margin-top: 70px;

    .list-item label {
      font-weight: 600;
    }
  }
}
</style>
