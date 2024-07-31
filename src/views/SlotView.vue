<script>
import UserSlot from "../components/UserSlot.vue";
export default {
  name: "SlotView",
  components: { UserSlot },
  data() {
    return {
      name: "xxx",
      age: "xxx",
      signature: "xxx",
    };
  },
};
</script>

<template>
  <div>
    <MTitle>slot 插槽</MTitle>
    <UserSlot>
      <template v-slot:default="{ userInfo }">
        <ul>
          <li style="text-align: left" v-for="(v, k) in userInfo" :key="k">
            {{ k }} : {{ v }}
          </li>
        </ul>
      </template>
      <template #production="{ production }">
        <div style="text-align: left">作品:</div>
        <ul style="text-align: left">
          <li v-for="(p, i) in production" :key="p">{{ i }}:{{ p }}</li>
        </ul>
      </template>
    </UserSlot>
  </div>
</template>

<style scoped lang="scss"></style>
