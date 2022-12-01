<script>
import { FLAVOR_CUISINE_URL, postData } from "../stores";

let signUpData = {}
let token;
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
<h1>Log in</h1>
<div class="login-form">
<form on:submit|preventDefault={onSubmit}>
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
  <button type="submit" on:click={async () => {
      token = (await postData(`${FLAVOR_CUISINE_URL}/login/`, signUpData)).data.access_token
      console.log(token)
    }
    }>Log In</button>
</form>

</div>

</main>

<style>

.login-form {
  display:grid;
  grid-template-columns: 1fr;
  width: 0.5rem;
}

</style>