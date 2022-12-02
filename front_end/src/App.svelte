<script>
  import { FLAVOR_CUISINE_URL } from './stores.js'
  import Counter from './lib/Counter.svelte'
  import SignUp from './lib/SignUp.svelte';
  import Login from './lib/Login.svelte';
  import AllRecipes from './lib/AllRecipes.svelte';
  
  let showSignUp = false;
</script>

<main>
{#if showSignUp}
<SignUp></SignUp>
<div id="log-in-msg">
Already have an account? 
<button type="submit" on:click={() => showSignUp = false}>Log in</button>
</div>
{:else}
<Login></Login>
<div id="create-account-msg">
Don't have an account? 
<button type="submit" on:click={() => showSignUp = true}>Create Account</button>
</div>
{/if}
<AllRecipes></AllRecipes>
</main>
