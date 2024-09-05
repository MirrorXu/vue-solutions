<template>
  <div class="wrap">
    <div>
      <textarea class="textarea" v-model="text" rows="20"> </textarea>
      <el-button-group>
        <el-button type="primary" @click="create">保存为markdown文件</el-button>
        <el-button type="primary" @click="open">打开</el-button>
        <el-button type="primary">保存</el-button>
        <el-button type="primary">另存为</el-button>
        <el-button type="warning" @click="clearTextarea">清空</el-button>
      </el-button-group>
    </div>
    <div style="margin-top: 40px">
      <!--      https://raw.githubusercontent.com/MirrorXu/vue-solutions/main/jsconfig.json -->
      <!--      <a-->
      <!--        href="https://github.com/MirrorXu/vue-solutions/blob/main/jsconfig.json"-->
      <!--        download-->
      <!--        >download json</a-->
      <!--      >-->

      <el-button @click="downloadIndexHtml">保存当前首页</el-button>
      <el-button @click="downloadBaidu">保存百度首页</el-button>
      <el-button type="success" @click="downloadDogImg">下载小狗图片</el-button>
    </div>
  </div>
</template>
<script>
import { selectFiles, download } from "@/helpers/file";

export default {
  name: "File",
  data() {
    return {
      text: "aaaa",
    };
  },
  async created() {},
  methods: {
    async downloadDogImg() {
      const url = "https://dog.ceo/api/breeds/image/random";
      const response = await fetch(url);
      console.log("response:", response);
      const blob = await response.blob();
      console.log("blob:", blob);

      // const json = await response.json();
      // console.log("json:", json);
      //
      // const text = await response.text();
      // console.log("text:", text);
    },
    async downloadBaidu() {
      try {
        const url = "https://www.baidu.com/";
        const response = await fetch(url, {
          mode: "no-cors",
        });
        console.log("response", response);
        const resText = await response.text();
        console.log(resText);
      } catch (err) {
        console.log(err);
        debugger;
      }
      // const blob = new Blob(["http://www.baidu.com"]);
      // const text = await blob.text();
      // const arrayBuffer = await blob.arrayBuffer();
      // console.log("blob", blob);
      // console.log("text", text);
      // console.log("arrayBuffer", arrayBuffer);
      // const objectURL = URL.createObjectURL(blob);
      // console.log("objectURL", objectURL);
      // const fileReader = new FileReader();
      // fileReader.onloadend = () => {
      // const dataUrl = fileReader.result;
      // console.log("dataUrl:", dataUrl);
      // download(dataUrl, "aa.html");
      // };
      // fileReader.readAsDataURL(blob);
      // download(url, "baidu.html");
    },
    async downloadIndexHtml() {
      const response = await fetch("/index.html");
      const json = await response.json();
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      download(url, "index.html");
      URL.revokeObjectURL(url);
    },
    clearTextarea() {
      this.text = "";
    },
    create() {
      const blob = new Blob([this.text]);
      const url = URL.createObjectURL(blob);
      download(url, "download.md");
      URL.revokeObjectURL(url);
    },
    handleDownload(e) {
      e.preventDefault();
    },
    open() {
      selectFiles({
        accept: "text/plain",
      })
        .then((files) => {
          const file = files[0];
          console.log(file);
          // debugger;
          const blob = new Blob([file], { type: "text/plain" });
          console.log(blob);
          return blob.text();
        })
        .then((blobText) => {
          console.log(blobText);
          this.text += "\n" + blobText;
        });
    },
  },
};
</script>

<style scoped lang="scss">
.wrap {
  padding: 10px;
}

.textarea {
  box-sizing: border-box;
  width: 100%;
}
</style>
