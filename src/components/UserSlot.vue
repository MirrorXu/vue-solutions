<script>
export default {
  name: "UserSlot",
  data() {
    return {
      userInfo: {
        name: "Mirror",
        gender: 1,
        avatar: "",
        age: 30,
        signature: "有志者事竟成",
      },
      production: ["资本论", "国富论"],
    };
  },
  mounted() {
    // 获取用户信息
  },
};
</script>

<template>
  <div class="userInfo">
    <slot :userInfo="userInfo"></slot>
    <slot name="production" :production="production"></slot>
  </div>
</template>
