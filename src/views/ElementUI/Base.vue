<script>
export default {
  name: "Base",
};
</script>

<template>
  <div>
    <MTitle>element ui 基础使用</MTitle>
    <!--    <el-card header="按钮"> </el-card>-->
    <el-collapse :value="['1', '2', '3', '4', '5', '6', '7', '8', '9']">
      <el-collapse-item name="1" title="按钮 type 属性">
        <el-button>默认按钮</el-button>
        <el-button type="primary">primary</el-button>
        <el-button type="success">success</el-button>
        <el-button type="info">info</el-button>
        <el-button type="warning">warning</el-button>
        <el-button type="danger">danger</el-button>
      </el-collapse-item>
      <el-collapse-item name="2" title="按钮 plain 属性 ">
        <el-button plain>默认按钮</el-button>
        <el-button plain type="primary">primary</el-button>
        <el-button plain type="success">success</el-button>
        <el-button plain type="info">info</el-button>
        <el-button plain type="warning">warning</el-button>
        <el-button plain type="danger">danger</el-button>
      </el-collapse-item>
      <el-collapse-item name="3" title="按钮 round 属性 ">
        <el-button round plain>默认按钮</el-button>
        <el-button round plain type="primary">primary</el-button>
        <el-button round plain type="success">success</el-button>
        <el-button round plain type="info">info</el-button>
        <el-button round plain type="warning">warning</el-button>
        <el-button round plain type="danger">danger</el-button>
      </el-collapse-item>
      <el-collapse-item name="4" title="按钮 circle 属性 ">
        <el-button circle plain>a</el-button>
        <el-button circle plain type="primary">b</el-button>
        <el-button circle plain type="success">c</el-button>
        <el-button circle plain type="info">d</el-button>
        <el-button circle plain type="warning">e</el-button>
        <el-button circle plain type="danger">f</el-button>
      </el-collapse-item>

      <el-collapse-item name="5" title="按钮 icon 属性 ">
        <el-button icon="el-icon-search" circle></el-button>
        <el-button type="primary" icon="el-icon-edit">按钮</el-button>
        <el-button type="success" icon="el-icon-check" circle></el-button>
        <el-button type="info" icon="el-icon-message">send</el-button>
        <el-button type="warning" icon="el-icon-star-off">收藏</el-button>
        <el-button type="danger" icon="el-icon-delete" circle plain></el-button>
      </el-collapse-item>
      <el-collapse-item name="5" title="按钮 size 属性 ">
        <el-button plain>默认大小</el-button>
        <el-button plain size="medium">medium</el-button>
        <el-button plain size="small">small</el-button>
        <el-button plain size="mini">mini</el-button>
      </el-collapse-item>
      <el-collapse-item name="6" title="按钮 loading 状态 ">
        <el-button loading icon="el-icon-search" circle></el-button>
        <el-button loading type="primary" icon="el-icon-edit">按钮</el-button>
        <el-button
          loading
          type="success"
          icon="el-icon-check"
          circle
        ></el-button>
        <el-button loading type="info" icon="el-icon-message">send</el-button>
        <el-button loading type="warning" icon="el-icon-star-off"
          >收藏</el-button
        >
        <el-button
          loading
          type="danger"
          icon="el-icon-delete"
          circle
          plain
        ></el-button>
      </el-collapse-item>

      <el-collapse-item name="7" title="按钮 disabled 状态 ">
        <el-button disabled icon="el-icon-search" circle></el-button>
        <el-button disabled type="primary">按钮</el-button>
        <el-button
          disabled
          type="success"
          icon="el-icon-check"
          circle
        ></el-button>
        <el-button disable loading type="info">send</el-button>
        <el-button disabled type="warning" icon="el-icon-star-off">
          收藏
        </el-button>
        <el-button disabled loading type="danger" circle plain></el-button>
      </el-collapse-item>

      <el-collapse-item name="8" title="按钮 autofocus 属性 ">
        <!--        <el-button plain type="success">success</el-button>-->
        <!--        <el-button autofocus plain type="success">success</el-button>-->
        <!--        <el-button type="success">success</el-button>-->
        <!--        <el-button autofocus type="success">success</el-button>-->
        <el-button plain>success</el-button>
        <el-button autofocus plain>success</el-button>
      </el-collapse-item>

      <el-collapse-item name="9" title="按钮组">
        <el-button-group>
          <el-button size="mini" icon="el-icon-search" circle></el-button>
          <el-button type="primary" icon="el-icon-edit">按钮</el-button>
          <el-button
            size="small"
            type="success"
            icon="el-icon-check"
            circle
          ></el-button>
          <el-button type="info" icon="el-icon-message">send</el-button>
          <el-button type="warning" icon="el-icon-star-off">收藏</el-button>
          <el-button
            type="danger"
            icon="el-icon-delete"
            circle
            plain
          ></el-button>
        </el-button-group>
        <br />
        <br />
        <el-button-group>
          <el-button size="mini" icon="el-icon-search" circle></el-button>
          <el-button type="primary" icon="el-icon-edit">按钮</el-button>
          <el-button
            size="small"
            type="success"
            icon="el-icon-check"
            circle
          ></el-button>
          <el-button type="info" icon="el-icon-message">send</el-button>
          <el-button type="warning" icon="el-icon-star-off">收藏</el-button>
          <el-button
            type="danger"
            icon="el-icon-delete"
            circle
            plain
          ></el-button>
        </el-button-group>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<style scoped lang="scss"></style>
