<template>
    <div class="container">
      <form ref="form" @submit.prevent="sendEmail">
        <div class="row">
          <div class="col-12 p-0 col-md-6">
            <input 
              type="text" 
              v-model="name"
              name="name"
              placeholder="Naam:"
              required 
            />
            <input
              type="email" 
              v-model="email"
              name="email"
              placeholder="E-mailadres:"
              required
            />
          </div>
          
          <div class="col-12 p-0 col-md-6">
            <input 
            type="text"
            v-model="bedrijf"
            name="bedrijf"
            placeholder="Bedrijfsnaam:"
            />
            <input
              type="tel"
              v-model="telefoon"
              name="telefoon"
              placeholder="Telefoonnummer:"
              required
            />
          </div>

          <div class="col-12 p-0">
            <textarea
              name="message"
              v-model="message"
              cols="30" rows="5"
              placeholder="Stel je vraag:"
              required
              >
              <!-- style="height: 25vh;" -->
            </textarea>
          </div>
        </div>

          <input class="cta-button" type="submit" value="Versturen">


<!-- form emailjs -->
          <!-- <label>Name</label>
          <input 
            type="text" 
            v-model="name"
            name="name"
            placeholder="Your Name"
          >
          <label>Email</label>
          <input 
            type="email" 
            v-model="email"
            name="email"
            placeholder="Your Email"
            >
          <label>Message</label>
          <textarea 
            name="message"
            v-model="message"
            cols="30" rows="5"
            placeholder="Message">
          </textarea>
          
          <input type="submit" value="Send">
        -->
        </form>
    </div>
</template>

<script>
import emailjs from 'emailjs-com'


export default {
    name: 'Mail',
  data() {
    return {
      name: '',
      email: '',
      bedrijf: '',
      telefoon: '',
      message: ''
    }
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm('service_mail', 'mail_template', e.target,
        'mg6zWxvUz_eRyDSYh', {
          name: this.name,
          email: this.email,
          bedrijf: this.bedrijf,
          telefoon: this.telefoon,
          message: this.message
        })

      } catch(error) {
          console.log({error})
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.bedrijf = ''
      this.telefoon = ''
      this.message = ''
    },
  }
    

}
</script>

<style lang="scss" scoped>

input,
textarea {
  display: block;
  box-sizing: border-box;
  width: 100%;
  padding: 15px;
  margin: 25px auto;
  border: none;
  border-left: 3px solid var(--Green);
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



.cta-button {
  width: fit-content;
  padding: 0 10px;
  font-family: var(--Regular);
  font-size: var(--Body);
  border-left: 3px solid var(--Green);
  line-height: 30px;

    &:hover {
      font-family: var(--Semi);
    }
}




// responsive tot 768 pixels
@media (max-width: 768px) {
    
    #telinput {
      margin: 0;
    }
}
</style>