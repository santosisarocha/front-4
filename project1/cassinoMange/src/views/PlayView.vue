<script setup lang="ts">
</script>

<template>
  <main>
    <div class="fundo">
      <img src="/fundoCassino.png" alt="cassino fundo">
      <div class="mainText">
        <h1>Casino Mange</h1>
      </div>
      <div class="currency1">
        <img src="/gira_gira.png" alt="gold">

        <div class="currency-background1">                            
          <img src="/diamante.png" alt="gold">
        </div>
        <div class="currency-background2">
          <img src="/money.png" alt="gold">
        </div>
        <div class="currency-background3">
          <img src="/given.png" alt="gold">
        </div>
        
        <div class="botao1">
          <button>Apostar</button>
        </div>
        <div class="botao2">
          <button>Fechar</button>
        </div>
        <div class="box">
            <h1 class="titulo">Dinheiro</h1>
            <h2 class="t2">Apostados:</h2>
            <h3 class="t3">20,00</h3>
            <h2 class="t4">Ganhos:</h2>
            <h3 class="t5">10,00</h3>

        </div>
        
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  margin: 0;
  padding: 0;
  height: 100vh;
  width: auto;
  overflow: hidden; 
}

.fundo {
  
  width: 100%;
  height: 100%;
}

.fundo img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}


.mainText {
  position: absolute; 
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%); 
  padding: 10px; 
  border-radius: 5px; 
}

.mainText > h1 {
  background-image: url("/gold.png");
  background-repeat: repeat; 
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center; 
  font-size: 3.5rem; 
  font-weight: bold;
  font-family: 'Seagram'; 
}

.currency1 {
  position: absolute; 
  top: 23%;  
  padding: 250px; 
  width: 50%;
  left: 27.5%;


    
}

.currency-background1 {
  position: absolute; 
  top: 43%;  
  padding: 6%; 
  margin-left: -6%;  
    
}

.currency-background2 {
  position: absolute; 
  top: 43%;  
  padding: 6%;
  margin-left: 12.5%;  
  
}
.currency-background3 {
  position: absolute; 
  top: 38%;  
  padding: 8.5%;
  margin-left: 27.9%;  
    
}



.botao1 {
  position: absolute; 
  top: 85%;  
  padding: 2.8%;
  margin-left: -11%;  
}

.botao1 button {
  background-color: gold; 
  color: rgb(0, 0, 0); 
  font-size: 4rem; 
  font-family: 'Seagram'; 
  padding: 15px 30px; 
  border: none; 
  border-radius: 50px; 
  cursor: pointer; 
  transition: background-color 0.3s; 
}

.botao1 button:hover {
  background-color: darkgoldenrod; 
}
.botao2 {
  position: absolute; 
  top: 85%;  
  padding: 2.8%;
  margin-left: 19%;  
}

.botao2 button {
  background-color: gold; 
  color: rgb(0, 0, 0); 
  font-size: 4rem; 
  font-family: 'Seagram'; 
  padding: 15px 30px; 
  border: none; 
  border-radius: 50px; 
  cursor: pointer; 
  transition: background-color 0.3s; 
}

.botao2 button:hover {
  background-color: darkgoldenrod; 
}
.box {
  position: absolute; 
  top: 28%;  
  padding: 2.8%;
  margin-left: 69%;  
  background-color: gold;
  color: black;
  width: 40%;
  height: 73%;
  
  
}
.titulo{
    font-size: 4rem; 
   font-family: 'Seagram'; 
   
}
.t2{
    font-size: 2.5rem; 
   font-family: 'Seagram'; 
   
}
.t3{
    font-size: 1.5rem; 
   font-family: 'Seagram'; 
   
}
.t4{
    font-size: 2.5rem; 
   font-family: 'Seagram'; 
   
}
.t5{
    font-size: 1.5rem; 
   font-family: 'Seagram'; 
   
}

</style>
