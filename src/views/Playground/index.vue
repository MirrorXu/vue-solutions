<template>
  <div class="box">
    <ul @click="changeUserData">
      <li>{{ userData.name }}</li>
      <li>{{ userData.gender }}</li>
      <li>{{ arr }}</li>
      <li>{{ otherData }}</li>
    </ul>
    <div>
      <el-button @click="selectFiles">选择文件</el-button>
      <br />
      <div style="display: flex">
        <div class="file" v-for="file in selectedFiles" :key="file.name">
          <img :src="file.url" loading="lazy" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { selectFile } from "@/js-test/selectFile";

export default {
  name: "Playground",
  data() {
    return {
      userData: {
        name: "xxx",
      },
      arr: [1, 3, 4],
      selectedFiles: [],
    };
  },
  methods: {
    changeUserData() {
      // this.userData.name = "yyy";
      this.userData.gender = "男";
      this.otherData = "otherData";
      this.arr[1] = 2;
      this.$forceUpdate();
    },
    selectFiles() {
      selectFile({ multiple: true })
        .then((files) => {
          console.log(files);

          files = Array.from(files);
          this.selectedFiles = files.map((file) => {
            file.url = URL.createObjectURL(file);
            return file;
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped lang="scss">
.box {
  //background: deeppink;
}

.file {
  width: 80px;
  height: 80px;
  border: 1px solid #313c4d;
  box-shadow: 0 0 3px #ccc;
  > img {
    width: 100%;
    height: 100%;
  }
}
</style>
