<template>
    <div class="cta-button">
        <!-- <router-link :to="{ name: 'Contact'}"> Contact <font-awesome-icon class="FA-icon" icon="fa-solid fa-angle-right" /></router-link> -->
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "RuoterBtn",

}
</script>

<style lang="scss">
.cta-button {
  width: fit-content;
  padding: 0 10px;
  font-family: var(--Regular);
  font-size: var(--Body);
  border-left: 3px solid var(--Green);
  
  a {
    text-decoration: none;
    color: var(--Gray);
    line-height: 20px;

    &:hover {
      svg {
        padding-left: 15px;
      }
      font-family: var(--Semi);
    }
  }
}

.FA-icon {
  vertical-align: middle;
  padding: 0 6px;
}
</style>