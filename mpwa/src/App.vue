

<template>
  <div class="layout">
  <link href="https://fonts.cdnfonts.com/css/noah-grotesque" rel="stylesheet">
    <div class = "container a">
      <div class="hr">
      Meal Prep Web Application
    </div>
    </div>
    
    <Sidebar class="b">
      
    </Sidebar>
    
    <Recipes class="c">
      
    </Recipes>

  </div>
  
  
  
</template>

<script>

import Sidebar from './components/Sidebar.vue'
import Recipes from './components/Recipes.vue'

export default {
  name: 'App',
  components: {
    Sidebar, Recipes
  },
}
</script>

<style>
@import url('https://fonts.cdnfonts.com/css/noah-grotesque');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.hr {
  
  display:flex;
  padding-top:10px;
  padding-bottom:10px;
  font-size:x-large;
  font-family: 'Noah Grotesque', sans-serif;
  font-weight: bolder;
  justify-content: center;
  border-radius: 25px;
  background-color:#e6d9cd;
  height:50px;
  width:100%;
}
.a {
  grid-column: col2-start / col4-end;
  grid-row: row1-start;
}

.b {
  grid-column: col1-start;
  grid-row: row1-start / row3-end;
}

.container {
  padding-right:30px;
  padding-top:5px;
}
.layout {
  padding-left:20px;
  display:grid;
  grid-gap:10px;
  grid-template-columns: [col1-start] 200px [col2-start]auto [col3-start]auto [col4-start]auto [col4-end];
  grid-template-rows:[row1-start] auto [row2-start] auto [row3-start] auto [row3-end];
}

</style>
