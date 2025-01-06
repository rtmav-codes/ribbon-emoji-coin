<!-- HOW TO BUY PAGE -->

<!-- Main container with gradient background -->
<div class="h-auto w-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-300 via-pink-300 to-pink-100 text-white flex flex-col items-center justify-center pb-36">

    <!-- Page header section -->
    <h1 class="lg:text-7xl text-5xl lg:mt-36 mt-3">🎀</h1>
    <h2 class="lg:text-3xl text-xl font-bold text-center mt-2 text-[#f35087]">How to Buy</h2>

    <!-- Step-by-step instructions container -->
    <div class="flex flex-col justify-center items-start mt-20 lg:ml-0 ml-5">
        <ul class="lg:text-3xl text-xl font-bold text-[#fff0f3]">
            <!-- Step 1: Wallet Download -->
            <li>
                👉 Step 1: Download Aptos Wallet
                <p class="mt-3">
                    👛 Download the any of the Official Aptos Wallets from the link below.
                </p>
            </li>

            <!-- Download wallet CLICK HERE button -->
            <li class="mt-10">
                <button class="btn bg-gray-900 transform transition-all duration-200 hover:scale-105 hover:bg-gray-800 active:scale-95 hover:shadow-lg hover:text-white border-2 border-transparent hover:border-pink-300">
                    <a
                        href="https://aptosfoundation.org/ecosystem/projects/wallets" 
                        target="_blank"
                        class="text-white lg:text-xl font-bold transition-colors duration-200 hover:text-white"
                    >
                        🔗 Click Here
                    </a>
                </button>
            </li>
            <!-- Step 2: Purchase Aptos -->
            <li class="mt-10">
                👉 Step 2: Buy Some Aptos
                <p class="mt-2">
                    💰 You can buy Aptos on any major CEX or DEX.
                </p>
                <button class="btn bg-gray-900 transform transition-all duration-200 hover:scale-105 hover:bg-gray-800 active:scale-95 hover:shadow-lg hover:text-white border-2 border-transparent hover:border-pink-300 mt-10">
                    <a href="https://www.coinbase.com/how-to-buy/aptos" target="_blank">
                        <div class="flex flex-row items-center justify-start">
                            <img src="/aptos-white.png" alt="aptos" class="w-5 h-5" />
                            <h1 class="lg:text-xl font-bold text-white ml-3">Aptos</h1>
                        </div>
                    </a>
                </button>
            </li>
            <!-- Step 3: Wallet Connection -->
            <li class="mt-10">
                👉 Step 3: Connect Your Wallet
                <p class="mt-2">
                    🤝 Connect your wallet to emojicoin.fun and you're all set!
                </p>
            </li>
            <!-- Website link button -->
            <li class="mt-10">
                <button class="btn bg-gray-900 transform transition-all duration-200 hover:scale-105 hover:bg-gray-800 active:scale-95 hover:shadow-lg hover:text-white border-2 border-transparent hover:border-pink-300">
                    <a href="https://www.emojicoin.fun/market/ribbon" target="_blank" class="text-blue-600 lg:text-xl font-bold transition-colors duration-200 hover:text-white">
                        🔗 emojicoin.fun
                    </a>
                </button>
            </li>
            <!-- Step 4: Token Purchase -->
            <li class="mt-10">
                👉 Step 4: Buy Some 🎀!
                <p class="mt-2">
                    🤝 Swap some Aptos for 🎀!
                </p>
            </li>
            <!-- Buy button -->
            <li class="mt-10">
                <button class="btn bg-gray-900 transform transition-all duration-200 hover:scale-105 hover:bg-gray-800 active:scale-95 hover:shadow-lg hover:text-white border-2 border-transparent hover:border-pink-300">
                    <a href="https://www.emojicoin.fun/market/ribbon" target="_blank" class="text-white lg:text-xl font-bold transition-colors duration-200 hover:text-white">
                        🎀 Buy Here
                    </a>
                </button>
            </li>
        </ul>
    </div>
</div>

<!-- Svelte script section -->
<script lang="ts">
    import { onMount } from 'svelte';

    // Component initialization
    onMount(() => {
        console.log('Hello World');
    }); 
</script>