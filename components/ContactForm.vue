<template>
  <form @submit.prevent="handleSubmit" name="contact" class="modal__form" method="POST" >
    <input type="hidden" name="form-name" value="contact">
    <input type="text" name="name" v-model="name" placeholder="Name" class="modal__input" required/>
    <input type="text" name="company" v-model="company" placeholder="Company" class="modal__input"/>
    <input type="email" name="email" v-model="email" placeholder="Email" class="modal__input" required/>
    <textarea type="text" name="message" v-model="message" rows="5" placeholder="Message" class="modal__input"></textarea>
    <input name="bot-field" class="modal__input hidden"/>
    <button type="submit" class="button">Send</button>
    <div class="success message" v-if="submitted">Submitted!</div>
  </form>
</template>

<script>
import encode from "form-urlencoded";

export default {
  name: "ContactForm",
  data() {
    return {
      name: "",
      company: "",
      email: "",
      message: "",
      activeClass: "active",
      submitted: false
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    handleSubmit() {
      const that = this;

      // Get form data
      const data = {
        name: this.name,
        company: this.company,
        email: this.email,
        message: this.message
      };

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          ...data
        })
      })
        .then(response => {
          if (response.ok) {
            this.$set(this.$data, "submitted", true);
            window.setTimeout(that.close, 2000);
          } else {
            Promise.reject("Form did not submit. Please try again.");
          }
        })
        .catch(error => console.log("Error is ", error));
    }
  }
};
</script>

<style lang="scss" scoped>
.modal__form {
  display: flex;
  flex-direction: column;
}

.modal__input {
  margin-bottom: 1.2rem;
  padding: 0.9rem 0.7rem;
  border: 1px solid rgba(7, 69, 175, 0.2);
  color: #8491a8;
  font-size: 13px;
  flex: 0 0 auto;
  -webkit-appearance: none;
  @media (min-width: 768px) {
    padding: 1.1rem 0.9rem;
  }
  &:active {
    border: 1px solid rgba(7, 69, 175, 1);
    outline: none !important;
  }
  &:focus {
    border: 1px solid rgba(7, 69, 175, 1);
    outline: none !important;
  }
  &:nth-last-child(1) {
    margin-bottom: 0;
  }
  &.hidden {
    display: none !important;
  }
  .success {
    &.message {
      margin-top: 20px;
      text-align: center;
      color: #3780f9;
    }
  }
}
</style>
