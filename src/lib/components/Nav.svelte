<div class="navbar bg-[#fec7de] text-[#f35087] p-3">

    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn bg-white lg:hidden">
          <h1 class="text-3xl">🎀</h1>
        </div>
        <ul
          class="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
                <a
                    href="/home"
                    class="text-lg font-bold text-[#f35087]"
                    >
                    🎀 Home
                </a>
            </li>
            <li>
                <a
                    href="/howtobuy"
                    class="text-lg font-bold text-[#f35087]"
                    >
                    🎀 How to Buy
                </a>
            </li>
            <li>
              <a
                  href="https://meme.ribbonemojicoin.xyz/"
                  class="text-lg font-bold text-[#f35087]"
                  >
                  🎀 Memes
              </a>
          </li>
        </ul>
      </div>
      <a 
        href="/home"
        class="btn btn-ghost lg:text-xl text-lg font-bold text-[#f35087">
        🎀 Ribbon Emoji Coin
      </a>
    </div>

    <div class="navbar-center hidden lg:flex flex-row flex-wrap justify-center items-center">
      <ul class="menu menu-horizontal px-1 font-bold text-xl">
        <li>   
            <a href="/home"> 🎀 Home</a>
        </li>
        <li>
          <a href="/howtobuy">🎀 How to Buy</a>
        </li>
        <li>
          <a href="https://meme.ribbonemojicoin.xyz/">🎀 Memes</a>
        </li>
      </ul>
    </div>

    <div class="navbar-end text-[#fec7de]">
        <!-- Audio Controls -->
        <button 
            class="btn bg-black hover:bg-black mr-2 text-2xl"
            on:click={toggleAudio}
        >
            {#if isPlaying}
                🔊
            {:else}
                🔈
            {/if}
        </button>
        
        <a 
            href="https://www.emojicoin.fun/market/ribbon" 
            target="_blank" 
            class="btn text-[#fec7de] bg-black hover:bg-black text-2xl"
        >
            <img src="/emojifun.png" alt="emojifun" class="w-10 h-10" />
        </a>
    </div>

  </div>

<!-- Hidden audio element -->
<audio bind:this={audioElement} loop>
    <source src="/ribbon.mp3" type="audio/mp3">
</audio>

<script lang="ts">
    import { onMount } from 'svelte';

    let audioElement: HTMLAudioElement;
    let isPlaying = false;

    function toggleAudio() {
        if (audioElement.paused) {
            audioElement.play();
            isPlaying = true;
        } else {
            audioElement.pause();
            isPlaying = false;
        }
    }

    onMount(() => {
        audioElement.volume = 0.5; // Set initial volume to 50%
    }); 
</script>