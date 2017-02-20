<template>
<div class="card card-block">
  <div class="row">
    <div class="col-md-7">
      <h3 class="card-title">{{user.firstName}} {{user.lastName}}</h3>
      <h6 class="card-subtitle mb-2 text-muted">{{user.country}} {{user.city}}</h6>
      <ul class="list-unstyled">
        <li>
          <span class="fa fa-phone fa-fw"></span>
          <span>{{user.phone}}</span>
        </li>
        <li>
          <span class="fa fa-envelope-o fa-fw"></span>
          <span>{{user.postalCode}}</span>
        </li>
      </ul>
      <div >
        <button type="button" class="btn btn-secondary btn-sm"  v-on:click="removeUser">
          <span class="fa fa-trash"></span>
          Remove
        </button>
        <router-link :to="{name: 'editUser', params:{id: user.uid}}">
          <button type="button" class="btn btn-secondary btn-sm" >
            <span class="fa fa-edit"></span>
            Edit
          </button>
        </router-link>
      </div>
    </div>
    <div class="col-md-5">
      <router-view></router-view>
    </div>
  </div>
</div>

</template>

<script>
import {
  findById
} from '../data/unionUserData'
import router from '../router'
export default {
  name: 'userPage',
  data () {
    return {
      user: null
    }
  },
  created () {
    this.getUser()
  },
  watch: {
    '$route': 'getUser'
  },
  methods: {
    getUser () {
      const id = this.$route.params.id
      this.user = findById(id)
    },
    removeUser () {
      this.$parent.removeUser(this.user.uid)
      router.push('/')
    }
  }

}

</script>
