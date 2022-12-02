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
  <p class='recipe-author'>(By user:{rec.user_id})</p>
    <h3>Ingredients</h3>
  <div class='recipe-ingredients'>
    {#each rec.contents.split('\n') as ingredient}
    <li>{ingredient}</li>
    {/each}
  </div>
  <div class='recipe-desc'>
    <h3>Directions</h3>
    {rec.contents}
  </div>
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
  text-decoration: underline;
  font-family: 'Roboto Slab', serif;
  margin-bottom: 0.5%;
}

.recipe-author{
  margin-top: 0;
  text-align: center;
  font-size: 0.8em;
  color:rgb(44, 44, 44);

}

.recipe-desc {
  font-family: 'Roboto Slab', serif;
}

.recipe-ingredients {
  margin-left: 2em;
  margin-bottom: 1em;
  font-family: 'Roboto Slab', serif;
}
</style>