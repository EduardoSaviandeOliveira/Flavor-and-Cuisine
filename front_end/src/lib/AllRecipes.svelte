<script>
    import { onMount } from "svelte";
import { FLAVOR_CUISINE_URL, getData } from "../stores";

let allRecepies = [];
const getAllRecs = async () => {
  allRecepies = (await (await getData(`${FLAVOR_CUISINE_URL}/recipe/id/`)).data).data;

  console.table(allRecepies)
  allRecepies = Array(allRecepies)
}

onMount(getAllRecs)

</script>

<main>
{#each allRecepies as recipe}
{#each recipe as rec}
<div class='recipe'>
  <h1 class='recipe-header'> {rec.title} </h1>
  <div class='recipe-ingredients'> {rec.contents} </div>
  <div class='recipe-desc'> {rec.description} </div>
</div>
{/each}
{/each}
</main>

<style>

.recipe {
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 900px;
  width: 90%;
  min-width: 400px;
}
.recipe-header {
  text-align: center;
}

.recipe-desc {
  font-family: serif;
}

.recipe-ingredients {
  width: 0.8em;
  margin-left: 1em;
}
</style>