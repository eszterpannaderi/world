<template>
  <table class="table">
      <thead>
          <tr>
              <th>Country name</th>
              <th>Country code</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="country in countries" :key="country.id">
          <td>{{country.name}}</td>
          <td>{{country.iso3}}</td>
          </tr>
      </tbody>
  </table>
</template>

<script>
export default {
    name:'country-table',
    props:['countries']

}
</script>

<style>

</style>