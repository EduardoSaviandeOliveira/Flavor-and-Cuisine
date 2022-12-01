<script>
import { FLAVOR_CUISINE_URL, postData } from "../stores";

/*let userCredentials = {
  "name": "Eduardo Savian de Oliveira",
  "email": "eduardosaviandeoliveira@gmail.com",
  "password": "69696969"
}
*/

let signInData = {}
function onSubmit(e){
  const formData = new FormData(e.target)
  
  for (let field of formData) {
    const [key, value] = field;
    signInData[key] = value;
  }
  console.log(signInData)
}

</script>

<main>

<div>
<form on:submit|preventDefault={onSubmit}>
  <label for="name">Username</label>
  <input type="text"
    id="name"
    name="name"
    value=""
  />
  <label for="name">Email</label>
  <input type="text"
    id="email"
    name="email"
    value=""
  />
  <label for="name">Password</label>
  <input type="text"
    id="password"
    name="password"
    value=""
  />
  <button type="submit" on:click={() => postData(`${FLAVOR_CUISINE_URL}/signup/`, signInData)}>Create Account</button>
</form>
</div>

</main>
