<template>
    <div class="topPadding">
        <div class="vertical">
        <div>
            Home
        </div>
        <div>
            Profile
        </div>
        <div>
            About
        </div>
        <div>
            Contact
        </div>
    </div>
    </div>
    
    
</template>
<script>
</script>

<style scoped>

@import url('https://fonts.cdnfonts.com/css/noah-grotesque');
    .vertical {
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        width:180px;
        min-height:90vh;
        padding-top: 40px;
        padding-bottom: 40px;
        align-items: center;
        border-radius: 25px;
        background-color:#e6d9cd;
        font-family: 'Noah Grotesque', sans-serif;
        font-weight: bold;
        font-size: large;
    }
    .topPadding{
        padding-top:30px;
    }
</style>