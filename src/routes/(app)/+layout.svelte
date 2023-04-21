<script lang="ts">
  import Navbar from "$lib/svelte/Navbar.svelte";
  import PhoneNav from "$lib/svelte/PhoneNav.svelte";
  import "$lib/app.css";
  import type { LayoutData } from "./$types";

  export let data: LayoutData;
</script>

<div class="navbar">
  <Navbar role={data.role} />
</div>
<div class="resp-hamburger">
  <PhoneNav role={data.role} />
</div>

<slot />

<style>
  .resp-hamburger {
    visibility: hidden;
    position: absolute;
    z-index: 99;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    background-color: #2d3436;
  }
  @media (max-width: 700px) {
    .navbar {
      position: absolute;
      visibility: collapse;
    }

    .resp-hamburger {
      visibility: visible;
      position: fixed;
      bottom: 0;
      width: 100%;
      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      padding: 20px;
    }
  }
</style>
