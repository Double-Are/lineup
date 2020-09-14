<template>
  <div id="profile">
    <div class="header-title px-6 pt-4 text-left">Darrius Taylor</div>
    <div class="profile">
      <div class="background relative"
        v-bind:style="{ backgroundImage: 'url(https://pbs.twimg.com/profile_banners/16073810/1521493170/1500x500)' }">
      </div>
    </div>
    <div class="profile-description">
      <div class="profile-offset relative bg-white p-6 text-left">
        <div class="profile-picture absolute"><img
            src="https://pbs.twimg.com/profile_images/1055433774622760960/xDlEQc9V_400x400.jpg" /></div>
        <div class="mb-4">Alexandria, VA</div>
        <div class="mb-4 text-blue-400">
          <a href="https://darriustaylor.com">darriustaylor.com</a>
        </div>
        <div class="mb-10">Creative Technologist & UX Designer for @capitalone. Currently D.C. living. My apartment stays at
          80 degs because I miss the south.</div>
        <div class="scan-qr-btn">Logout</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'profile',
    components: {}
  }
</script>

<style lang="scss">
  #profile {
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

    .profile {
      margin-top: 72px;
    }

    .background {
      background-size: cover;
      height: 150px;
    }

    .profile-offset {
      top: -40px;
      border-radius: 8px;
      border: 1px solid #bbb;
    }

    .profile-picture {
      width: 55px;
      top: -20px;
      right: 20px;
      margin: 0 auto;

      img {
        border: 1px solid #fff;
        border-radius: 50%;
      }
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

    .profile-description {
      background: white;
      padding: 20px;
    }
  }
</style>