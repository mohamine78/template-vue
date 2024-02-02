<template>
  <section class="container">
    <header>
      <h1>LOGIN</h1>
    </header>
    <!--MODIFIER LE FORM-->
    <form method="POST" @submit.prevent="handleSubmit" class="formulaire">
      <div class="champs">
        <label>Email</label>
        <input type="text" v-model="email" placeholder="Email" required />
      </div>

      <div class="champs">
        <label>Mot de Passe</label>
        <input
          type="password"
          v-model="password"
          placeholder="Mot De Passe"
          required
        />
      </div>

      <button type="submit">Envoyer</button>
    </form>
  </section>
</template>
<script>
export default {
  name: "FormPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleSubmit() {
      this.$router.push("/home");
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background: rgb(62, 122, 97);
  background: linear-gradient(
    83deg,
    rgba(62, 122, 97, 1) 0%,
    rgba(49, 61, 101, 1) 100%
  );
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px;
}

h1 {
  font-size: 40px;
  text-align: center;
}

.container {
  border: solid white;
  position: relative;
  max-width: 700px;
  width: 1000px;
  height: 400px;
  background-color: white;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

.container .header {
  font-size: 1.5rem;
  color: #333;
  font-weight: 500;
  text-align: center;
  justify-content: center;
}

button {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container .formulaire {
  margin-top: 30px;
}

.formulaire .champs {
  width: 100%;
  margin-top: 20px;
}

.champs label {
  color: #333;
  font-weight: 600;
}

.formulaire .champs input {
  position: relative;
  height: 50px;
  width: 100%;
  outline: none;
  font-size: 1rem;
  color: #707070;
  margin-top: 8px;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 0 15px;
}

.formulaire .colonne {
  display: flex;
  column-gap: 15px;
}

.formulaire button {
  height: 60px;
  width: 100%;
  font-size: 1rem;
  font-weight: 800;
  transition: all 0.2s ease;

  background: rgb(62, 122, 97);
  background: linear-gradient(
    83deg,
    rgba(62, 122, 97, 1) 0%,
    rgba(49, 61, 101, 1) 100%
  );
  border: none;
  margin-top: 30px;
  border-radius: 6px;
  color: white;
  cursor: pointer;
  border-radius: 6px;
}
</style>