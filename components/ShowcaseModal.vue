<template>
  <transition name="modal-fade">
    <div class="modal-overlay">
      <div class="modal">
        <div class="modal__header">
          <h2 class="modal__title">Miso Robotics</h2>
          <a href="#" class="modal__close" @click.prevent="close">&#215;</a>
        </div>
        <div class="modal__body">
          <div class="video-container">
            <video :ref="showcaseRef" playsinline controls>
                <source src="~/static/FLIPPYGOESBLUE_Vimeo_withmusic_compressed.mp4" type="video/mp4">
            </video>
          </div>
        </div>
        <!-- <div class="modal__footer"></div> -->
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ShowcaseModal",
  data() {
    return {
      showcaseRef: "showcase_video"
    };
  },
  methods: {
    close() {
      let showcaseVidRef = this.showcaseRef;
      // Pause Video
      this.$refs[showcaseVidRef].pause();
      // Close Modal
      this.$emit("close");
    }
  }
};
</script>

<style lang="scss" scoped>
.video-container {
  max-width: 100%;
  max-height: 100%;
}
video {
  max-width: 100%;
  max-height: 100%;
}

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
  max-width: 700px;
  max-height: 100%;
  background-color: #fbfbfb;
  padding: 1.5rem;
  overflow: hidden;
  @media (min-width: 768px) {
    padding: 3rem;
  }
}

.modal__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0;
  flex: 0 0 auto;
  @media (min-width: 768px) {
    // margin-bottom: 1rem;
  }
}

.modal__body {
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0 0;
  flex: 0 0 auto;
  @media (min-width: 768px) {
    padding: 1rem 0 0;
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
