<template>
  <div class="box">
    <ul @click="changeUserData">
      <li>{{ userData.name }}</li>
      <li>{{ userData.gender }}</li>
      <li>{{ arr }}</li>
      <!--      <li v-if="otherData">{{ otherData }}</li>-->
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
    <FileCom />
    <div>
      <div style="width: 600px; height: 400px">
        <Drawing ref="canvas"></Drawing>
      </div>
      <div>
        <div class="btns">
          <el-button @click="clearCanvas" type="warning">重写</el-button>
          <el-button @click="saveCanvas('blob')" type="primary"
            >获取为blob
          </el-button>
          <el-button @click="saveCanvas('url')" type="primary"
            >获取为base64
          </el-button>
        </div>
        <div>
          <img style="width: 300px; height: 200px" :src="canvasDataUrl" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { selectFiles } from "@/helpers/file";
import FileCom from "@/components/File.vue";
import Drawing from "@/components-ui/drawing/drawing.vue";

export default {
  name: "Playground",
  components: {
    FileCom,
    Drawing,
  },
  data() {
    return {
      userData: {
        name: "xxx",
      },
      arr: [1, 3, 4],
      selectedFiles: [],
      canvasDataUrl: "",
    };
  },
  methods: {
    saveCanvas(type) {
      const canvasCom = this.$refs.canvas;
      canvasCom
        .save(type)
        .then((data) => {
          console.log(data);
          if (type === "url") {
            this.canvasDataUrl = data;
          } else if (type === "blob") {
            const formData = new FormData();
            formData.append("file", data);
            console.log(formData);

            const fileReader = new FileReader();
            fileReader.onloadend = () => {
              this.canvasDataUrl = fileReader.result;
            };
            // fileReader.readAsDataURL(formData.get("file"));
            fileReader.readAsDataURL(data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    clearCanvas() {},
    changeUserData() {
      // this.userData.name = "yyy";
      this.userData.gender = "男";
      this.otherData = "otherData";
      this.arr[1] = 2;
      this.$forceUpdate();
    },
    selectFiles() {
      selectFiles({ multiple: true })
        .then((files) => {
          console.log(files);

          files = Array.from(files);
          this.selectedFiles = files.map((file) => {
            file.url = URL.createObjectURL(file);
            URL.revokeObjectURL(file.URL);
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
