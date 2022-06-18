<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-4"><country-table :countries="countries"></country-table></div>
      <div class="col-12 col-md-4">b</div>
      <div class="col-12 col-md-4">c</div>
    </div>
  </div>
</template>

<script>
import DataService from '@/dataservice/dataservice'
import CountryTable from './components/CountryTable.vue';

export default {
  name:'app',

  components:
  {CountryTable},

  data(){
    return{
      countries:[],
    }
  },

  created(){
    DataService.getAllCountry()
      .then(result => {
        this.countries=result
        console.log(this.countries)
      })
      .catch(()=>{})
  }
};
</script>

<style>
</style>
