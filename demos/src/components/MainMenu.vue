<template>
  <aside class="menu">
    <div class="logo"><a href="#/"><img src="assets/logo5.png" /></a></div>
    <p class="menu-label">Demos</p>
    <ul class="menu-list">

      <li :class="{ active: currentView === 'manga-colorization' }">
        <a href="#/manga-colorization">
          <span class="menu-item-heading">manga-colorization</span>
          <span class="menu-item-subheading">CycleGAN</span>
        </a>
      </li>
      <li :class="{ active: currentView === 'manga-colorization-big' }">
        <a href="#/manga-colorization-big">
          <span class="menu-item-heading">manga-colorization with-bigger-image</span>
          <span class="menu-item-subheading">CycleGAN</span>
        </a>
      </li>
      <li :class="{ active: currentView === 'manga-decolorization' }">
        <a href="#/manga-decolorization">
          <span class="menu-item-heading">manga-decolorization</span>
          <span class="menu-item-subheading">CycleGAN</span>
        </a>
      </li>




    </ul>
    <p class="menu-label">Links</p>
    <ul class="menu-list github">
      <li>
        <a href="https://github.com/junyanz/CycleGAN" target="_blank" rel="noopener noreferrer">
          <span class="menu-item-heading"><v-icon>fa-github</v-icon> CycleGAN</span>
        </a>
      </li>
      <li>
        <a href="https://github.com/transcranial/keras-js" target="_blank" rel="noopener noreferrer">
          <span class="menu-item-heading"><v-icon>fa-github</v-icon> keras-js</span>
        </a>
      </li>

      <li>
        <a href="https://github.com/MingwangLin/cyclegan-keras" target="_blank" rel="noopener noreferrer">
          <span class="menu-item-heading"><v-icon>fa-github</v-icon> CycleGAN-keras</span>
        </a>
      </li>
    </ul>
    <p class="menu-label">Contact</p>
    <ul class="menu-list contact">
      <li>
        <a href="https://github.com/MingwangLin/" target="_blank" rel="noopener noreferrer"><v-icon>fa-github</v-icon> Ming-wang Lin</a>
      </li>
      <li>
        <a href="https://weibo.com/aacheve0" target="_blank" rel="noopener noreferrer"><v-icon>fa-weibo</v-icon> @aacheve0</a>
      </li>
      <li></li>
    </ul>
  </aside>
</template>

<script>
export default {
  props: {
    currentView: { type: String, default: 'home' }
  }
}
</script>

<style scoped lang="postcss">
@import '../variables.css';

.menu {
  font-family: var(--font-sans-serif);
  padding: 20px 40px;
  background: whitesmoke;
}

.logo {
  & img {
    max-width: 100%;
    max-height: 100%;
  }
}

.menu-label {
  user-select: none;
  cursor: default;
  font-size: 11px;
  color: var(--color-lightgray);
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 11px 0;
}

.menu-list {
  list-style: none;

  & li {
    color: var(--color-lightgray);
    border-left: 2px solid whitesmoke;
    margin-bottom: 5px;
  }

  & li.active {
    border-left: 2px solid var(--color-green);
  }

  & a {
    padding: 7px 11px;
    color: var(--color-green);
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    &:hover {
      color: var(--color-green);
      background-color: whitesmoke;
    }

    & span.menu-item-heading {
      display: flex;
      align-items: center;
      margin-right: 10px;
      font-size: 14px;
    }

    & span.menu-item-subheading {
      color: #999999;
      font-size: 10px;
    }
  }
}

.menu-list.github,
.menu-list.contact {
  & li {
    padding: 5px 10px;
    font-size: 14px;
  }

  & a {
    color: var(--color-green);
    padding: 0;
    display: inline-flex;
    background-color: none;
    transition: color 0.2s ease-in-out;

    & .icon {
      color: var(--color-green);
      transition: color 0.2s ease-in-out;
      margin-right: 5px;
    }

    &:hover {
      color: var(--color-green-light);
      background: none;

      & .icon {
        color: var(--color-green-light);
      }
    }
  }
}
</style>
