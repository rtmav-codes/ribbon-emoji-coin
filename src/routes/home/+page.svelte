<!-- Home Page -->

<!-- Main container with gradient background -->
<div class="h-screen w-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-300 via-pink-300 to-pink-100 text-white flex flex-col items-center justify-center p-10">

    <!-- Project Title Section -->
    <h1 class="text-7xl">🎀</h1>
    <h2 class="lg:text-3xl text-xl font-bold text-center mt-2 text-[#f35087]">The Pink Ribbon Emoji Coin</h2>
    
    <!-- Blockchain Platform Badge -->
    <div class="flex flex-col justify-center items-center mt-5">
        <img src="/aptos-white.png" alt="aptos logo" class="w-8 h-8" />
        <h3 class="lg:text-xl text-lg font-bold text-center mt-2 text-white">
            On Aptos
        </h3>
    </div>

    <!-- Navigation Buttons -->
    <!-- How to Buy Button -->
    <button class="mt-10 btn bg-gray-900 transform transition-all duration-200 hover:scale-105 hover:bg-gray-800 active:scale-95 hover:shadow-lg hover:text-white border-2 border-transparent hover:border-pink-300">
        <a href="/howtobuy" class="text-white lg:text-xl font-bold transition-colors duration-200 hover:text-white">
            How to Buy
        </a>
    </button>
    
    <!-- Market Link Button -->
    <button class="btn bg-gray-900 transform transition-all duration-200 hover:scale-105active:scale-95 hover:shadow-lg hover:text-white border-2 border-transparent hover:border-pink-300 mt-10">
        <a href="https://www.emojicoin.fun/market/ribbon" target="_blank" class="text-white lg:text-xl font-bold transition-colors duration-200 hover:text-white">
            <img src="/emojifun.png" alt="emojifun" class="w-8 h-8" />
        </a>
    </button>
</div>

<!-- Svelte script section -->
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
        // Initialize audio element
        audioElement.volume = 0.5; // Set initial volume to 50%
    }); 
</script>