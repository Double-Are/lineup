<template>
  <div id="listBox">
    <div v-for="(category, index) in categories" :key="category.id" class="mb-6">
      <div v-if="category.checked">
        <router-link :to="{
        path: '/detaillist/' + category.id, 
        params: { category: category, listofUsers }}">
          <div class="text-xl font-semibold">{{category.name}} {{category.numUsers}}/20</div>
        

        <div v-if="listofUsers.length">
          <div class="grid grid-cols-4 gap-1 round-edges">
            <div class="fixed-list-box-height">
              <div class="list-image top mb-1"
                v-bind:style="{ backgroundImage: 'url(' + listofUsers[1*(index+1)].picture.large + ')' }">
              </div>
              <div class="list-image bottom"
                v-bind:style="{ backgroundImage: 'url(' +  listofUsers[2*(index+1)].picture.large + ')' }">
              </div>
            </div>

            <div class="fixed-list-box-height">
              <div class="list-image middle mb-1"
                v-bind:style="{ backgroundImage: 'url(' + listofUsers[3*(index+1)].picture.large + ')' }">
              </div>
              <div class="list-image middle"
                v-bind:style="{ backgroundImage: 'url(' +  listofUsers[4*(index+1)].picture.large + ')' }">
              </div>
            </div>

            <div class="fixed-list-box-height">
              <div class="list-image top mb-1"
                v-bind:style="{ backgroundImage: 'url(' + listofUsers[5*(index+1)].picture.large + ')' }">
              </div>
              <div class="list-image bottom"
                v-bind:style="{ backgroundImage: 'url(' +  listofUsers[6*(index+1)].picture.large + ')' }">
              </div>
            </div>

            <div class="fixed-list-box-height">
              <div class="list-image bottom mb-1"
                v-bind:style="{ backgroundImage: 'url(' + listofUsers[7*(index+1)].picture.large + ')' }">
              </div>
              <div class="list-image top"
                v-bind:style="{ backgroundImage: 'url(' +  listofUsers[8*(index+1)].picture.large + ')' }">
              </div>
            </div>
          </div>
        </div>
        </router-link>
      </div>

    </div>

    <div class="mb-6">
        <router-link :to="{path: '/createlist'}">
        <div class="text-xl font-semibold">Create A List</div>
        

        <div v-if="listofUsers.length">
          <div class="grid grid-cols-4 gap-1 round-edges">
            <div class="fixed-list-box-height">
              <div class="list-image top mb-1"
                v-bind:style="{ background: '#eee' }">
              </div>
              <div class="list-image bottom"
                v-bind:style="{ background: '#eee' }">
              </div>
            </div>

            <div class="fixed-list-box-height">
              <div class="list-image middle mb-1"
                v-bind:style="{ background: '#eee' }">
              </div>
              <div class="list-image middle"
                v-bind:style="{ background: '#eee' }">
              </div>
            </div>

            <div class="fixed-list-box-height">
              <div class="list-image top mb-1"
                v-bind:style="{ background: '#eee' }">
              </div>
              <div class="list-image bottom"
                v-bind:style="{ background: '#eee' }">
              </div>
            </div>

            <div class="fixed-list-box-height">
              <div class="list-image bottom mb-1"
                v-bind:style="{ background: '#eee' }">
              </div>
              <div class="list-image top"
                v-bind:style="{ background: '#eee' }">
              </div>
            </div>
          </div>
        </div>
        </router-link>
      </div>

  </div>
</template>

<script>
  export default {
    name: 'ListBox',
    components: {},
    data: function () {
      return {
        listofUsers: window.listofUsers || [],
        imageClass: ['top', 'middle', 'top', 'bottom', 'bottom', 'middle', 'bottom', 'top'],
        categories: window.categories,
        lastCategories: window.lastCategories
      }
    },
    created: function () {
      window.categories.map(category => {
        category.numUsers = (Math.round(Math.random() * 12) + 8)
        return category;
      })

      setInterval(() => {
        this.categories = window.categories;
        this.listofUsers = window.listofUsers || this.listofUsers;
        this.$forceUpdate()
      }, 4000);
    },
  }
</script>

<style lang="scss">
  #listBox {
    .fixed-list-box-height {
      height: 200px;
    }

    .round-edges {
      border-radius: 8px;
      overflow: hidden;
    }

    .list-image {
      background-size: cover;
      background-position: 50% 50%;
      // height: 100%;
      // width: 100%;
    }

    .top {
      height: 70%;

      img {
        height: 100%;
      }
    }

    .bottom {
      height: 30%;

      img {
        height: 100%;
      }
    }

    .middle {
      height: 50%;

      img {
        height: 100%;
      }
    }
  }
</style>