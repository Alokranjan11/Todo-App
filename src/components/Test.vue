<template>
    <div>
       <div class="main">
           <h1 class="box">box1</h1>
           <h1 class="box">box2</h1>
           <h1 class="box">box3</h1>
           <h1 class="box">box4</h1>
           <h1 class="box">box5</h1>
           <h1 class="box">box6</h1>
           <h1 class="box">box7</h1>
       </div>
    </div> 
</template>
<script>
export default{
    name:'Test',
    

    }

</script>
<style scoped>
.main{
    display: flex;
    /* flex-direction: column; */
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 100%;
}
.box{
    border: 2px solid black;
    width: 30%;
}
@media screen and (max-width:450px)
{
    .main{
        display: flex;
        flex-direction: column;
    }
    .box{
        width: 50%;
        border: 2px solid red;
        background-color: hotpink;
    }
}
@media screen and (min-width: 450px)and (max-width: 800px)
{
    .main{
        display: flex;
        flex-wrap: wrap;
    }
    .box{
        width: 40%;
        border: 2px solid r;
        background-color:palegreen;
    }
}
@media screen and (min-width:800px)and (max-width:1100px)
{
    .main{
        display: flex;
        flex-wrap: wrap;
    }
    .box{
        width: 30%;
        border: 2px solid tomato;
        background-color:yellow;
    }
}
</style>