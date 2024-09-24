<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function navigateToPlay() {
  router.push({ path: '/play' });
}
function navigateToCurrency() {
  router.push({ path: '/moeda' });
}
function navigateToCurrency2() {
  router.push({ path: '/moeda2' });
}
function navigateToCurrency3() {
  router.push({ path: '/moeda3' });
}
</script>

<template>
  <main>
    <div class="fundo">
      <img src="/fundoCassino.png" alt="cassino fundo" />
      <div class="mainText">
        <h1>Casino Mange</h1>
      </div>
      <div class="currency-background">
        <div class="currency-background1" @click="navigateToCurrency">
          <img src="/moeda1.png" alt="gold" />
        </div>
        <div class="currency-background2" @click="navigateToCurrency2">
          <img src="/moeda2.png" alt="gold" />
        </div>
        <div class="currency-background3" @click="navigateToCurrency3">
          <img src="/moeda3.png" alt="gold" />
        </div>
        <div class="currency-background4">
          <img src="/moeda4.png" alt="gold" />
        </div>
        <div class="botao1">
          
          <button @click="navigateToPlay">Jogar</button>
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
  top: 38%;  
  padding: 50px; 
  margin-left: -21%;    
    
}
.currency-background1 {
  position: absolute; 
  top: 38%;  
  padding: 3.5%; 
  margin-left: -24%;  
    
}

.currency-background2 {
  position: absolute; 
  top: 38%;  
  padding: 2.8%;
  margin-left: -10%;  
  
}
.currency-background3 {
  position: absolute; 
  top: 38%;  
  padding: 2.8%;
  margin-left: 1%;  
    
}
.currency-background4 {
  position: absolute; 
  top: 38%;  
  padding: 2.8%;
  margin-left: 12%;  
    
}
.currency-background1 img {
  border-radius: 50%;
  width: 180%;
  height: 180%;

}
.currency-background2 img {
  border-radius: 50%;
  width: 180%;
  height: 180%;

}
.currency-background3 img {
  border-radius: 50%;
  width: 180%;
  height: 180%;

}
.currency-background4 img {
  border-radius: 50%;                     
  width: 180%;
  height: 180%;

}
.botao1 {
  position: absolute; 
  top: 60%;  
  padding: 2.8%;
  margin-left: -7%;  
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
</style>
