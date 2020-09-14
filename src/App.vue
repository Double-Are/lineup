<template>
  <div id="app" class="max-w-sm m-auto">
    <div class="relative">
        <router-view></router-view>

      <div class="notify" v-bind:class="{ animate__fadeInUpBig: popDown, animate__fadeOutDownBig: !popDown }" v-if="notify && notify.open">
        {{notify.post}}
      </div>

      <div class="profile-pop-up text-left animate__animated" v-bind:class="{ animate__fadeInUpBig: expanded, animate__fadeOutDownBig: !expanded }" v-if="profileChange && profileChange.user">
        <div class="relative">
          <div class="header-popup flex items-center">
            <div class="thumbnail flex flex-1 items-center">
              <img class="profile-picture" :src="profileChange.user.user.picture.large" />
              <div class="text-lg font-semibold ml-4">@{{profileChange.user.user.name.first.toLowerCase()}}</div>
            </div>
            <div class="text-right mr-5" v-on:click="collapse">Collapse</div>
          </div>
        </div>
        <div class="tweets p-5">
          <div class="mb-4" v-for="tweet in Object.keys(tweets.globalObjects.tweets)" :key="tweet">
            <div><span class="font-semibold">@{{profileChange.user.user.name.first.toLowerCase()}}</span> <span class="time text-xs">{{moment(tweets.globalObjects.tweets[tweet].created_at).format("ddd, hA")}}</span></div>
            <div class="tweet text-sm">{{tweets.globalObjects.tweets[tweet].full_text}}</div>
          </div>
        </div>
      </div>

      <div class="bottom-menu grid grid-cols-5 py-2 bg-white fixed">
        <router-link to="/" class="m-auto">
          <div class="angles"></div>
          <svg width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.1237 31.1H10.1238H19.616V31L19.616 31.1C21.0498 31.0991 22.4245 30.5293 23.4386 29.5157C24.4526 28.5021 25.023 27.1276 25.0246 25.6939V25.6938V18.6201H25.9886C27.2235 18.6201 28.0614 18.3505 28.6289 17.9929C29.1968 17.635 29.4871 17.1934 29.6338 16.8613C29.7836 16.5224 29.9154 15.9992 29.7898 15.3203C29.6643 14.6419 29.2832 13.8157 28.4204 12.8677L28.4204 12.8676L19.3759 2.93425C18.1829 1.62348 16.5826 0.9 14.8699 0.9C13.1572 0.9 11.5569 1.62347 10.3639 2.93424C10.3639 2.93424 10.3639 2.93425 10.3639 2.93425L1.31938 12.8676L1.31938 12.8676C0.456601 13.8155 0.0756489 14.642 -0.0498084 15.3207C-0.175337 15.9997 -0.0436293 16.5228 0.105914 16.8606C0.25265 17.1937 0.543306 17.6353 1.11131 17.993C1.67899 18.3504 2.51686 18.6195 3.75114 18.6195H4.7152L4.7152 25.6938L4.7152 25.6939C4.71678 27.1276 5.28719 28.5021 6.30121 29.5157C7.31523 30.5293 8.69 31.0991 10.1237 31.1ZM2.69769 14.1203L2.69775 14.1202L11.7393 4.18685C12.5781 3.26544 13.6897 2.76055 14.8699 2.76055C16.0501 2.76055 17.1616 3.26544 18.0004 4.18684L27.042 14.1202L27.0422 14.1204C27.418 14.5318 27.6881 14.9323 27.8391 15.2819C27.9918 15.6352 28.0151 15.918 27.93 16.1086L27.9298 16.109C27.8498 16.2899 27.6385 16.4541 27.2968 16.5731C26.9585 16.6908 26.5099 16.7578 25.9863 16.7578H23.2617H23.1617V16.8578V25.6936C23.1606 26.6337 22.7867 27.535 22.122 28.1997C21.4572 28.8645 20.556 29.2384 19.6159 29.2395H10.1239C9.18394 29.2382 8.28281 28.8643 7.61819 28.1995C6.95357 27.5348 6.57973 26.6336 6.57868 25.6936V16.8578V16.7578H6.47868H3.75407C3.23044 16.7578 2.7817 16.6907 2.4434 16.5729C2.10149 16.4538 1.89034 16.2896 1.81058 16.109L1.81048 16.1088C1.72608 15.919 1.74932 15.6365 1.90162 15.2831C2.05228 14.9335 2.32186 14.5326 2.69769 14.1203ZM19.406 22.228V22.2279C19.406 21.3308 19.14 20.4538 18.6415 19.7078C18.1431 18.9618 17.4347 18.3804 16.6058 18.0371C15.7769 17.6938 14.8649 17.6039 13.9849 17.779C13.105 17.954 12.2967 18.386 11.6624 19.0204C11.028 19.6548 10.5959 20.4631 10.4209 21.343C10.2459 22.2229 10.3357 23.135 10.679 23.9638C11.0224 24.7927 11.6038 25.5012 12.3497 25.9996C13.0957 26.498 13.9727 26.7641 14.8699 26.7641V26.6641L14.87 26.7641C16.0726 26.7628 17.2257 26.2845 18.076 25.4341C18.9264 24.5837 19.4048 23.4307 19.406 22.228ZM13.3834 20.0079C13.8234 19.714 14.3406 19.5571 14.8698 19.557C15.5792 19.5578 16.2593 19.8399 16.761 20.3415C17.2626 20.8432 17.5447 21.5233 17.5455 22.2327C17.5455 22.7619 17.3885 23.2791 17.0946 23.7191C16.8006 24.1591 16.3827 24.502 15.8938 24.7045C15.4049 24.907 14.8669 24.96 14.3479 24.8568C13.8289 24.7536 13.3522 24.4987 12.978 24.1245C12.6038 23.7504 12.349 23.2736 12.2457 22.7546C12.1425 22.2356 12.1955 21.6976 12.398 21.2087C12.6005 20.7198 12.9434 20.3019 13.3834 20.0079Z" fill="black" stroke="black" stroke-width="0.2"/>
          </svg>
        </router-link>
        <router-link to="/lists" class="m-auto">
          <div class="angles"></div>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.9536 0H4.04639C2.97531 0.00675783 1.95001 0.435243 1.19263 1.19263C0.435243 1.95001 0.00675783 2.97531 0 4.04639V25.9536C0.00675783 27.0247 0.435243 28.05 1.19263 28.8074C1.95001 29.5648 2.97531 29.9932 4.04639 30H25.9536C27.0247 29.9932 28.05 29.5648 28.8074 28.8074C29.5648 28.05 29.9932 27.0247 30 25.9536V4.04639C29.9932 2.97531 29.5648 1.95001 28.8074 1.19263C28.05 0.435243 27.0247 0.00675783 25.9536 0V0ZM28.0992 25.9536C28.0942 26.5211 27.8665 27.0639 27.4652 27.4652C27.0639 27.8665 26.5211 28.0942 25.9536 28.0992H4.04639C3.4789 28.0942 2.93608 27.8665 2.53479 27.4652C2.13349 27.0639 1.90582 26.5211 1.90077 25.9536V4.04639C1.90582 3.4789 2.13349 2.93608 2.53479 2.53479C2.93608 2.13349 3.4789 1.90582 4.04639 1.90077H25.9536C26.5211 1.90582 27.0639 2.13349 27.4652 2.53479C27.8665 2.93608 28.0942 3.4789 28.0992 4.04639V25.9536Z" fill="black"/>
            <path d="M7 7H5V9H7V7Z" fill="black"/>
            <path d="M24 7H10V9H24V7Z" fill="black"/>
            <path d="M7 14H5V16H7V14Z" fill="black"/>
            <path d="M24 14H10V16H24V14Z" fill="black"/>
            <path d="M7 21H5V23H7V21Z" fill="black"/>
            <path d="M24 21H10V23H24V21Z" fill="black"/>
          </svg>
        </router-link>
        <router-link to="/search" class="m-auto">
          <div class="angles rotate90"></div>
          <div class="border">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.6 11.3848H10.7848C11.1164 11.3848 11.3848 11.1164 11.3848 10.7848V0.6C11.3848 0.268359 11.1164 0 10.7848 0H0.6C0.268359 0 0 0.268359 0 0.6V10.7848C0 11.1164 0.268359 11.3848 0.6 11.3848ZM1.2 1.2H10.1848V10.1848H1.2V1.2Z" fill="black"/>
              <path d="M7.78477 3H3.6C3.26836 3 3 3.26836 3 3.6V7.78477C3 8.11641 3.26836 8.38477 3.6 8.38477H7.78477C8.11641 8.38477 8.38477 8.11641 8.38477 7.78477V3.6C8.38477 3.26836 8.11641 3 7.78477 3ZM7.18477 7.18477H4.2V4.2H7.18477V7.18477Z" fill="black"/>
              <path d="M10.7848 18.6152H0.6C0.268359 18.6152 0 18.8836 0 19.2152V29.4C0 29.7316 0.268359 30 0.6 30H10.7848C11.1164 30 11.3848 29.7316 11.3848 29.4V19.2152C11.3848 18.8836 11.1164 18.6152 10.7848 18.6152ZM10.1848 28.8H1.2V19.8152H10.1848V28.8Z" fill="black"/>
              <path d="M3.6 27H7.78477C8.11641 27 8.38477 26.7316 8.38477 26.4V22.2152C8.38477 21.8836 8.11641 21.6152 7.78477 21.6152H3.6C3.26836 21.6152 3 21.8836 3 22.2152V26.4C3 26.7316 3.26836 27 3.6 27ZM4.2 22.8152H7.18477V25.8H4.2V22.8152Z" fill="black"/>
              <path d="M29.4 0H19.2152C18.8836 0 18.6152 0.268359 18.6152 0.6V10.7848C18.6152 11.1164 18.8836 11.3848 19.2152 11.3848H29.4C29.7316 11.3848 30 11.1164 30 10.7848V0.6C30 0.268359 29.7316 0 29.4 0ZM28.8 10.1848H19.8152V1.2H28.8V10.1848Z" fill="black"/>
              <path d="M22.2152 8.38477H26.4C26.7316 8.38477 27 8.11641 27 7.78477V3.6C27 3.26836 26.7316 3 26.4 3H22.2152C21.8836 3 21.6152 3.26836 21.6152 3.6V7.78477C21.6152 8.11641 21.8836 8.38477 22.2152 8.38477ZM22.8152 4.2H25.8V7.18477H22.8152V4.2Z" fill="black"/>
              <path d="M29.4 18.6152C29.0684 18.6152 28.8 18.8836 28.8 19.2152V28.8H19.2152C18.8836 28.8 18.6152 29.0684 18.6152 29.4C18.6152 29.7316 18.8836 30 19.2152 30H29.4C29.7316 30 30 29.7316 30 29.4V19.2152C30 18.8836 29.7316 18.6152 29.4 18.6152Z" fill="black"/>
              <path d="M18.6152 26.4C18.6152 26.7316 18.8836 27 19.2152 27H26.4C26.7316 27 27 26.7316 27 26.4V19.2152C27 18.8836 26.7316 18.6152 26.4 18.6152C26.0684 18.6152 25.8 18.8836 25.8 19.2152V25.8H19.2152C18.8836 25.8 18.6152 26.0684 18.6152 26.4Z" fill="black"/>
              <path d="M13.2445 15.525H3.56954C3.2379 15.525 2.96954 15.7934 2.96954 16.125C2.96954 16.4567 3.2379 16.725 3.56954 16.725H12.6445V22.05C12.6445 22.3817 12.9129 22.65 13.2445 22.65C13.5762 22.65 13.8445 22.3817 13.8445 22.05V16.125C13.8445 15.7934 13.5762 15.525 13.2445 15.525Z" fill="black"/>
              <path d="M14.5945 3.52502C14.2629 3.52502 13.9945 3.79338 13.9945 4.12502V11.025C13.9945 11.3567 14.2629 11.625 14.5945 11.625C14.9262 11.625 15.1945 11.3567 15.1945 11.025V4.12502C15.1945 3.79338 14.9262 3.52502 14.5945 3.52502Z" fill="black"/>
              <path d="M20.4445 13.65H16.5445C16.2129 13.65 15.9445 13.9184 15.9445 14.25C15.9445 14.5817 16.2129 14.85 16.5445 14.85H20.4445C20.7762 14.85 21.0445 14.5817 21.0445 14.25C21.0445 13.9184 20.7762 13.65 20.4445 13.65Z" fill="black"/>
              <path d="M21.0445 22.05C21.0445 21.7184 20.7762 21.45 20.4445 21.45H16.5445C16.2129 21.45 15.9445 21.7184 15.9445 22.05V28.425C15.9445 28.7567 16.2129 29.025 16.5445 29.025C16.8762 29.025 17.1445 28.7567 17.1445 28.425V22.65H20.4445C20.7762 22.65 21.0445 22.3817 21.0445 22.05Z" fill="black"/>
              <path d="M24.0445 20.25V15.6H28.0945C28.4262 15.6 28.6945 15.3317 28.6945 15C28.6945 14.6684 28.4262 14.4 28.0945 14.4H23.4445C23.1129 14.4 22.8445 14.6684 22.8445 15V20.25C22.8445 20.5817 23.1129 20.85 23.4445 20.85C23.7762 20.85 24.0445 20.5817 24.0445 20.25Z" fill="black"/>
              <path d="M20.4445 17.4H17.6695C17.3379 17.4 17.0695 17.6684 17.0695 18C17.0695 18.3317 17.3379 18.6 17.6695 18.6H20.4445C20.7762 18.6 21.0445 18.3317 21.0445 18C21.0445 17.6684 20.7762 17.4 20.4445 17.4Z" fill="black"/>
              <path d="M10.7848 12.675H4.54452C4.21288 12.675 3.94452 12.9433 3.94452 13.275C3.94452 13.6066 4.21288 13.875 4.54452 13.875H10.7848C11.1164 13.875 11.3848 13.6066 11.3848 13.275C11.3848 12.9433 11.1164 12.675 10.7848 12.675Z" fill="black"/>
            </svg>
          </div>
        </router-link>
        <router-link to="/mentions" class="m-auto">
          <div class="angles"></div>
          <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.0633 10.785C19.7258 9.20805 17.7295 8.2068 15.4993 8.2068C11.4717 8.2068 8.20677 11.4718 8.20677 15.4993C8.20677 19.5269 11.4717 22.7918 15.4993 22.7918C17.7403 22.7918 19.7451 21.7809 21.0827 20.1907C21.1939 21.3412 21.7772 22.2599 22.6265 22.8356C23.5712 23.4759 24.8361 23.6861 26.1295 23.3348C28.8949 22.5837 30.7094 19.6878 30.6485 15.4878C30.648 7.13189 23.8656 0.35 15.4993 0.35C7.13257 0.35 0.35 7.13257 0.35 15.4993C0.35 23.866 7.13257 30.6486 15.4993 30.6486C18.7839 30.6486 21.9125 29.5996 24.4985 27.6872L24.6191 27.598L24.5299 27.4774L23.6805 26.3288L23.5913 26.2082L23.4707 26.2974C21.1798 27.9916 18.4109 28.9201 15.4993 28.9201C8.0872 28.9201 2.0785 22.9114 2.0785 15.4993C2.0785 8.0872 8.0872 2.0785 15.4993 2.0785C22.9114 2.0785 28.9201 8.0872 28.9201 15.4993L28.9201 15.5015C28.9715 19.0311 27.5764 21.1507 25.6765 21.6667C24.8829 21.8822 24.1598 21.7706 23.6397 21.4316C23.1223 21.0942 22.7918 20.5232 22.7918 19.7848V15.7233V8.35677V8.20677H22.6418H21.2133H21.0633V8.35677V10.785ZM21.0633 15.4993C21.0633 18.5722 18.5722 21.0633 15.4993 21.0633C12.4264 21.0633 9.93528 18.5722 9.93528 15.4993C9.93528 12.4264 12.4264 9.9353 15.4993 9.9353C18.5722 9.9353 21.0633 12.4264 21.0633 15.4993Z" fill="black" stroke="black" stroke-width="0.3"/>
          </svg>
        </router-link>
        <router-link to="/profile" class="m-auto">
          <div class="angles rotate90"></div>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.7154 24.9992C22.7154 22.7821 20.9905 20.9426 18.7659 20.7875C16.6151 20.6376 15.3198 20.5605 15 20.5605C14.6802 20.5605 13.3849 20.6376 11.2341 20.7875C9.00954 20.9426 7.28464 22.7821 7.28464 24.9992V25.8382C9.49508 27.4269 12.1618 28.2966 15 28.2966C17.8483 28.2966 20.5133 27.3684 22.7154 25.6755V24.9992ZM15 30C11.3938 30 8.12453 28.7547 5.57143 26.6754V24.9992C5.57143 21.8876 7.99223 19.306 11.1142 19.0883C13.325 18.9342 14.6202 18.8571 15 18.8571C15.3798 18.8571 16.675 18.9342 18.8858 19.0883C22.0078 19.306 24.4286 21.8876 24.4286 24.9992V26.4802C21.9012 28.6669 18.6376 30 15 30Z" fill="black"/>
            <path d="M15 30C6.71684 30 0 23.2854 0 15C0 6.7146 6.71684 0 15 0C23.2832 0 30 6.7146 30 15C30 23.2854 23.2832 30 15 30ZM15 28.2744C22.3376 28.2744 28.2838 22.3301 28.2838 15C28.2838 7.66987 22.3376 1.7256 15 1.7256C7.66244 1.7256 1.71618 7.66987 1.71618 15C1.71618 22.3301 7.66244 28.2744 15 28.2744Z" fill="black"/>
            <path d="M15 17.9999C11.6874 17.9999 8.99997 15.3147 8.99997 11.9999C8.99997 8.68505 11.6874 5.99988 15 5.99988C18.3126 5.99988 21 8.68505 21 11.9999C21 15.3147 18.3126 17.9999 15 17.9999ZM15 16.278C17.3685 16.278 19.2866 14.3615 19.2866 11.9999C19.2866 9.63828 17.3685 7.72179 15 7.72179C12.6314 7.72179 10.7133 9.63828 10.7133 11.9999C10.7133 14.3615 12.6314 16.278 15 16.278Z" fill="black"/>
          </svg>
        </router-link>
      </div>
    </div>

    <!--<div class="sidebar">
      <div v-if="views.home">Home</div>
      <div>List</div>
      <div>Search</div>
      <div>Mention</div>
      <div>Profile</div>
    </div>-->
  </div>
</template>

<script>
import Home from './assets/Home.svg';
import QR from './assets/QR.svg';
import List from './assets/List.svg';
import Comment from './assets/Comment.svg';
import Profile from './assets/Profile.svg';
import At from './assets/@.svg';
import tweets from './assets/data/tweets.json';
import moment from 'moment'
import 'animate.css'
import { categories } from './assets/data/frontend-list.js'

export default {
  name: 'App',
  components: {
  },
  data: function() {
    return {
      moment,
      tweets,
      Home,
      QR,
      List,
      At,
      Comment,
      Profile,
      notify: { open: false, post: "" },
      lastNotify: { open: false, post: "" },
      expanded: false,
      popDown: false,
      profileChange: window.profileChange,
      lastProfileChange: window.profileChange,
      categories: categories,
      views: { home: false, list: false, search: false, mention: false, profile: false }
    }
  },
  created: function() {
    console.log(this.$route.query.profile)
    window.categories = this.categories
    window.categories[0].checked = true;
    window.categories[1].checked = true;
    window.categories[2].checked = true;
    window.categories[3].checked = false;
    window.categories[4].checked = false;
    this.categories = window.categories;
    console.log(this.categories, 'categories')

    window.profileList = {};

    fetch("https://randomuser.me/api/?results=60&noinfo")
      .then(response => response.json())
      .then(data => {
        console.log(this, 'this')
        console.log(data, data.results, this.listofUsers, 'data')
        window.listofUsers = data.results;
      });

    window.notify = { open: false, post: "" };
    window.views = { home: false, list: false, search: false, mention: false, profile: false }
    window.profileChange = {};

    setInterval(() => {
      this.profileChange = window.profileChange;
      if (this.profileChange !== this.lastProfileChange && this.profileChange.expanded === true) {
        console.log(this.profileChange.user.user);
        this.lastProfileChange = window.profileChange;
        this.expanded = true;
      }

      this.notify = window.notify;
      if (this.notify.open !== this.lastNotify.open && this.notify.open === true) {
        console.log(this.notify, 'notify')
        this.notify = window.notify;
        setTimeout(() => {
          this.lastNotify = window.notify;
          window.notify = this.notify = { open: false, post: "" };
        }, 2000)
      }

      this.views = window.views;
          
    }, 500);
    console.log(tweets, 'tweets');
  },
  methods: {
    collapse: function() {
      this.expanded = !this.expanded,
      window.profileChange.expanded = false;
    }
  }
}
</script>

<style lang="scss">
@import url("https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css");
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css");
@import url('https://cdn.jsdelivr.net/npm/pretty-checkbox@3.0/dist/pretty-checkbox.min.css');
body {
  overflow: hidden;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.sidebar {
  background: #fff !important;
  color: #333 !important;
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 250px;
}

.notify {
  position: fixed;
  width: 300px;
  margin: 0 auto;
  z-index: 100;
  padding: 4px;
  left: 0;
  right: 0;
  color: #000;
  background: #eee;
  border-radius: 8px;
  bottom: 85px;
}

#app > div{
  background: rgb(168,121,173);
  background: linear-gradient(180deg, rgba(168,121,173,1) 0%, rgba(96,88,195,1) 100%);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin-top: 60px;
  border: 1px solid #bbb;
  border-radius: 4px;
  height: 700px;
  overflow: hidden;
}

svg {
  height: 20px;
}

.router-link-exact-active {
  path {
    fill: purple;
  }
  .angles {
    position: absolute;
    width: 0;
    height: 0;
    border-top: 20px solid transparent;
    border-left: 20px solid rgba(97, 9, 226, 0.4);
    border-bottom: 10px solid transparent;
    transform: rotate(45deg);
    z-index: -1;
  }
  .rotate90 {
    transform: rotate(90deg);
  }
}

.profile-pop-up {
  color: #000;
  z-index: 1000;
  position: absolute;
  top: 25px;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  overflow: scroll;
  height: 749px;
  box-shadow: -3px 6px 27px -7px #000;

  .thumbnail {
    width: 50px;
    height: auto;
  }

  .header-popup {
    background: #fff;
    position: fixed;
    width: 382px;

    .profile-picture {
      max-width: 45px;
    }
  }

  .tweets {
    margin-top: 50px;
  }
}

.bottom-menu {
  bottom: 0;
  margin-left: 0px;
  width: 382px;
  color: #000;
  border-radius: 0 0 4px 4px;
  top: 703px;
  height: 56px;

  .border {
    border: 1px solid #000;
    padding: 5px;
    border-radius: 6px;
  }

  img {
    width: 20px;
  }
}
</style>
