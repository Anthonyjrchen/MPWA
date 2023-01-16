<template>
  <div class="layout">
    <div class = "container a">
      <div class="hr">
      Welcome to Your Meal Prep Web Application
    </div>
    </div>
    
    <Sidebar class="b">
      
    </Sidebar>
  </div>
  
  
  
</template>

<script>
import Sidebar from './components/Sidebar.vue'
export default {
  name: 'App',
  components: {
    Sidebar,
  },
}
</script>

<style>
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
  font-family: 'The Moon',sans-serif;
  justify-content: center;
  border:2px solid black;
  border-radius: 5px;
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

Sidebar {
  
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
