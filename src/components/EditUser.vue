<template>
  <div class="">
    <input v-model="user.firstName" placeholder="firstName" class="form-control my-1">
    <input v-model="user.lastName" placeholder="lastName" class="form-control my-1">
    <input v-model="user.country" placeholder="country" class="form-control my-1">
    <input v-model="user.city" placeholder="city" class="form-control my-1">
    <input v-model="user.phone" placeholder="phone" class="form-control my-1">
    <input v-model="user.postalCode" placeholder="postalCode" class="form-control my-1">
  </div>
</template>

<script>
import router from '../router'
export default {
  name: 'editUser',
  data () {
    return {
      user: this.$parent.user
    }
  },
  methods: {
    completeEdit () {
      router.push('/user/' + this.user.uid)
    }
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
