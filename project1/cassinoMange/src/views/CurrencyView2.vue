<script setup lang="ts">
</script>

<template>
  <main>
    <div class="fundo">
      <img src="/fundoCassino.png" alt="cassino fundo">
      <div class="mainText">
        <h1>Casino Mange</h1>
        <img src="/moeda2.png" alt="gold">
      </div>
      <div class="currency-background">
        
        <div class="actually_value">                            
          <h2>O valor atual: 30,00</h2>
        </div>
        <div class="value_converter">                            
          <h2>O valor de converção: </h2>
          <input type="number">
        </div>
        <div class="botao">
          <button>Converter</button>
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
  height: 15%;
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
.mainText > img {
  left: 110%;
  width: 40%;
  
 
}


.currency-background {
  position: absolute; 
  top: 30%;  
  padding: 3.5%; 
  margin-left: -12%; 
  background-color: gold; 
  border-radius: 15%;
  width: 30%;
  height: 40%;
    
}
.actually_value{
    font-size: 1.5rem;
    font-family: 'Seagram'; 
}
.value_converter{
    font-size: 1.5rem;
    font-family: 'Seagram'; 
}
.value_converter input{
    position: absolute;
    font-size: 1.5rem;
    font-family: 'Seagram';
    background-color: black;
    color: gold;
    width: 10%;
    margin-left: 59%;
    margin-top: -7%;
    
}


.botao {
  position: absolute; 
  top: 60%;  
  padding: 2.8%;
  margin-left: 25%;  
  
}

.botao button {
  background-color: rgb(0, 0, 0); 
  color: gold; 
  font-size: 1.5rem; 
  font-family: 'Seagram'; 
  padding: 15px 20px; 
  border: none; 
  border-radius: 50px; 
  cursor: pointer; 
  transition: background-color 0.3s; 
}

.botao button:hover {
  background-color: rgb(41, 41, 41); 
}
</style>
