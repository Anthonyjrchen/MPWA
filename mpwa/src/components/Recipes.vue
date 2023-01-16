<template>
    <div class="recipes">
        <div class="horizontal">
        <div class="images">
            <img src="one" alt="one">
            <img src="testpics/2.png" alt="two">
            <img src="testpics/3.png" alt="three">
            <img src="testpics/4.png" alt="four">
        </div>
    </div>
    </div>

    
    
</template>

<script>
export default {
    name: 'Recipes',
    data: function() {
    return {
        one: require('./testPics/1.png')
    }
    }
    }

</script>

<style scoped>

@import url('https://fonts.cdnfonts.com/css/noah-grotesque');

.recipes {
    padding-left: 190px;
}
.horizontal {
    width:500px;
    min-height:40vh;
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 40px;
    padding-top: 40px;
    border-radius: 25px;
    background-color:#e6d9cd;
    font-family: 'Noah Grotesque', sans-serif;
    font-weight: bold;
}
    
</style>