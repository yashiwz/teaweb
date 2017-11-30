<template>
  <div class="m-main">
    <section class="report-pl">
      <div class="subtitle">
        <i class="el-icon-document"></i>
        商品信息
      </div>
      <div class="flex-box inform-l b_line">
        <div class="flex-hd lt">
          商品品牌*
        </div>
        <div class="flex-bd">
          <el-input v-model="input" placeholder="请输入商品品牌"></el-input>
        </div>
      </div>
      <div class="flex-box inform-l">
        <div class="flex-hd lt">
          商品型号*
        </div>
        <div class="flex-bd">
          <el-input v-model="input" placeholder="请输入商品型号"></el-input>
        </div>
      </div>
      <div class="subtitle">
        <i class="el-icon-picture"></i>
        商品图片
      </div>
      <div class="inform-l">
        <div class="upload-pl">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </div>
        <div class="upload-pl">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible" size="tiny">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </div>
        <div class="upload-pl">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible" size="tiny">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </div>
      </div>
      <div class="subtitle">
        <i class="el-icon-info"></i>
        举报人及举报内容
      </div>
      <div class="flex-box inform-l b_line">
        <div class="flex-hd lt">
          举报人*
        </div>
        <div class="flex-bd">
          <el-input v-model="input" placeholder="请输入举报人"></el-input>
        </div>
      </div>
      <div class="flex-box inform-l b_line">
        <div class="flex-hd lt">
          联系邮箱
        </div>
        <div class="flex-bd">
          <el-input v-model="input" placeholder="请输入举报联系邮箱"></el-input>
        </div>
      </div>
      <div class="flex-box inform-l b_line">
        <div class="flex-hd lt">
          电话*
        </div>
        <div class="flex-bd">
          <el-input v-model="input" placeholder="请输入举报人电话"></el-input>
        </div>
      </div>
      <div class="inform-l" style="margin:12px">
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4}"
          placeholder="请输入举报内容"
          v-model="textarea3">
        </el-input>
      </div>
      <div class="submit">
        <a class="btn theme" href="#/mobile/index">举报</a>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'mInform',
    data () {
      return {
        dialogImageUrl: '',
        dialogVisible: false
      }
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .m-main{
    margin-top:0;
  }
  .report-pl{
    background:white;
  }
  .subtitle{
    color: grey;
    font-size: 16px;
    padding: 8px 12px;
    background: #f2f2f2;
  }
  .subtitle i{
    margin-right: 5px;
    font-size: 14px;
    color: #c1c1c1;
  }
  .lt{
    min-width: 58px;
    padding: 8px 0;
    margin-bottom: 3px;
  }
  .inform-l{
    margin:5px 12px;
  }
  .submit{
    padding:12px;
  }
  .submit a{
    display:block;
  }
  .b_line{
    border-bottom: 1px solid #f1f1f1;
  }
  .inform-l .upload-pl{
    margin:12px 0;
    width: 96px;
    display:inline-block;
  }
</style>
