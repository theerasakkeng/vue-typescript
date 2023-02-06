<template>
  <div class="side-bar">
    <div class="header-side-bar"></div>
    <div class="side-bar-menu-wrap">
      <div class="side-bar-menu menu-active">
        <div class="side-bar-menu-item">
          <q-icon
            name="fa-solid fa-house"
            size="16px"
            class="icon-menu"
          ></q-icon>
          <div class="title-menu">Home</div>
        </div>
      </div>
      <div class="side-bar-menu">
        <div class="side-bar-menu-item">
          <q-icon
            name="fa-solid fa-house"
            size="16px"
            class="icon-menu"
          ></q-icon>
          <div class="title-menu">Home</div>
        </div>
      </div>
      <div class="side-bar-menu">
        <div class="side-bar-menu-item">
          <q-icon
            name="fa-solid fa-house"
            size="16px"
            class="icon-menu"
          ></q-icon>
          <div class="title-menu">Home</div>
        </div>
      </div>
      <div class="side-bar-menu">
        <div class="side-bar-menu-item">
          <q-icon
            name="fa-solid fa-house"
            size="16px"
            class="icon-menu"
          ></q-icon>
          <div class="title-menu">Home</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="css" scoped>
.side-bar {
  width: 260px;
  height: 100vh;
  background-color: #e0e0e0;
  padding: 20px;
}
.side-bar-menu-wrap {
  display: flex;
  flex-direction: column;
  padding: 0 10px;
}
.side-bar-menu {
  padding: 0 10px;
  cursor: pointer;
  height: 40px;
  width: 100%;
  border-radius: 10px;
  background: #e0e0e0;
  margin: 10px 0;
  display: flex;
  align-items: center;
}
.menu-active {
  box-shadow: 5px 5px 10px #bebebe, -2px -2px 10px #ffffff;
}
.side-bar-menu-item {
  display: flex;
  align-items: baseline;
}
.icon-menu {
  margin-right: 10px;
}
.title-menu {
  font-size: 16px;
  color: #000000;
  font-weight: bold;
}
</style>
