<template>
<div class="row">
  <div class="col-md-4 mb-2">
    <ul class="list-group">
      <router-link
        v-for="user in userData"
        :to="{name: 'userPage', params:{id: user.uid}}"
        class="nav-link
        list-group-item"
        active-class="active">
        {{user.firstName}}
      </router-link>
    </ul>
  </div>
  <div class="col-md-8">
    <router-view></router-view>
  </div>
</div>
</template>

<script>
import userData from '../data/unionUserData'
export default {
  name: 'hello',
  data () {
    return {
      userData
    }
  },
  methods: {
    removeUser (id) {
      this.userData = this.userData.filter(x => x.uid !== id)
    },
    changeUser (user) {
      this.userData = this.userData.map(x => {
        if (x.uid === user.uid) {
          return Object.assign({}, user)
        }
        return user
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
