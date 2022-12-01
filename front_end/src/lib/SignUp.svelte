<script>
import { FLAVOR_CUISINE_URL, postData } from "../stores";

/*let userCredentials = {
  "name": "Eduardo Savian de Oliveira",
  "email": "eduardosaviandeoliveira@gmail.com",
  "password": "69696969"
}
*/

let signUpData = {}
function onSubmit(e){
  const formData = new FormData(e.target)
  
  for (let field of formData) {
    const [key, value] = field;
    signUpData[key] = value;
  }
  console.log(signUpData)
}

</script>

<main>
<h1>Sign Up</h1>
<div class="signup-form">
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
  <button type="submit" on:click={() => postData(`${FLAVOR_CUISINE_URL}/signup/`, signUpData)}>Create Account</button>
</form>

</div>

</main>

<style>

.signup-form {
  display:grid;
  grid-template-columns: 1fr;
  width: 0.5rem;
}

</style>