<template>
  <form action="./assets/form-to-email.php" method="POST">

    <div class="contain">
      <div class="row">
        <div class="col">
          <input 
            type="text" 
            name="naam" 
            id="naaminput"
            placeholder="Naam:" 
            required 
          />
          <input
            type="email"
            name="email"
            id="mailinput"
            placeholder="E-mailadres:"
            required
          />
        </div>
        
        <div class="col align-self-end">
          <input
            type="tel"
            placeholder="Telefoonnummer:"
            id="telinput"
            name="telefoonnummer"
            required
          />
        </div>
      </div>

      <div class="row">
        <div class="col">
          <textarea
            type="text" 
            name="bericht"
            id="berichtinput"
            placeholder="Stel je vraag:"
            style="height: 25vh;"
            required
          ></textarea>
        </div>
      </div>

      <div class="row">
        <div class="col text-center">
          <!-- <input type="submit" value="Versturen" class="submit" /> -->
          <button class="cta-button submit" type="submit">
            <a>
              Versturen
              <font-awesome-icon class="FA-icon" icon="fa-solid fa-angle-right" />
            </a>
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>

export default {
    name: "Emailform",
}

</script>

<style lang="scss" scoped>
form {
  width: 100%;
}

input,
textarea {
  display: block;
  box-sizing: border-box;
  width: 100%;
  padding: 15px;
  margin: 25px auto;
  border: none;
  border-left: 3px solid var(--Green);
  // background-color: rgba( #2c3b42, 0.01);
  background-color: transparent;
  
  
  &:focus {
    outline: none;
  }

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--Green); 
  }
  &::-webkit-scrollbar-track {
    background-color: var(--Lightgray);
  }
}

button {
  margin: 15px auto;
  padding-left: 10px;
  border: none;
  border-left: 3px solid var(--Green);
  background-color: transparent;
}
</style>