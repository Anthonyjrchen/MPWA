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
    .vertical {
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        width:180px;
        min-height:90vh;
        border: 2px solid black;
        padding-top: 40px;
        padding-bottom: 40px;
        align-items: center;
        border-radius:10px;
    }
    .topPadding{
        padding-top:30px;
    }
</style>