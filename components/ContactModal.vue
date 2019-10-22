<template>
  <transition name="modal-fade">
    <div class="modal-overlay">
      <div class="modal">
        <div class="modal__header">
          <h2 class="modal__title">Contact Us</h2>
          <a href="#" class="modal__close" @click.prevent="close">&#215;</a>
        </div>
        <div class="modal__body">
          <ContactForm v-on:close="close"/>
        </div>
        <div class="modal__footer"></div>
      </div>
    </div>
  </transition>
</template>

<script>
import ContactForm from "~/components/ContactForm";
export default {
  name: "ContactModal",
  components: {
    ContactForm
  },
  methods: {
    close() {
      // Emit event to parent to close the modal
      this.$emit("close");
    }
  }
};
</script>

<style lang="scss" scoped>
.modal-overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(10, 36, 84, 0.7);
  padding: 1rem;
  overflow-y: auto;
  z-index: 100;
  @media (min-width: 768px) {
    padding: 4rem;
  }
}

.modal {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  max-height: 100%;
  background-color: #fbfbfb;
  padding: 1.5rem;
  overflow-y: auto;
  @media (min-width: 768px) {
    padding: 3rem;
  }
}

.modal__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  flex: 0 0 auto;
  @media (min-width: 768px) {
    margin-bottom: 1rem;
  }
}

.modal__body {
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
  flex: 0 0 auto;
  @media (min-width: 768px) {
    padding: 1rem 0;
  }
}

.modal__footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
  flex: 0 0 auto;
  @media (min-width: 768px) {
    margin-top: 2rem;
  }
}

.modal__title {
  margin: 0;
  color: #0745af;
}

.modal__close {
  text-decoration: none;
  font-size: 2rem;
  font-family: AvenirNextUltraLight;
  color: #8491a8;
  @media (min-width: 768px) {
    font-size: 3rem;
  }
}

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
}

// Modal Transition
.modal-fade-enter {
  opacity: 0;
}

.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active {
  transition: all 0.05s ease-in-out;
}

.modal-fade-leave-active {
  transition: all 0.2s ease-in-out;
}
</style>
