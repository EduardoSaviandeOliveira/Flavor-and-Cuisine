<script>
import { FLAVOR_CUISINE_URL, postData } from "../stores";

let req = {
  "name": "Eduardo Savian de Oliveira",
  "email": "eduardosaviandeoliveira@gmail.com",
  "password": "69696969"
}


</script>

<main>

<button on:click={() => postData(`${FLAVOR_CUISINE_URL}/signup/`, req)}>criar</button>
</main>
