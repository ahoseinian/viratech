<template>
<div class="card card-block">
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
</div>

</template>

<script>
import {
  findById
} from '../data/unionUserData'
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
    }
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
