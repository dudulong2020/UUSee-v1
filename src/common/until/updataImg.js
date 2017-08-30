export default function (targetTag,ImgType=["gif", "jpeg", "jpg", "bmp", "png"]) {
  if (this.value) {
    if (!RegExp("\.(" + ImgType.join("|") + ")$", "i").test(this.value.toLowerCase())) {
      alert(_this.Setting.ErrMsg);
      this.value = "";
      return false;
    }
  }else{
    alert('不支持这个格式的文件上传，仅支持"gif", "jpeg", "jpg", "bmp", "png"')
  }

  if (navigator.userAgent.indexOf("MSIE") > -1) {
    try {
      $(imgP)[parseInt($(imgP).length)].src = _this.getObjectURL(this.files[0]);

      alert(1);
      //document.getElementById(_this.Setting.ImgShow).src = _this.getObjectURL(this.files[0]);

    } catch (e) {
      //IE，目前缩略图展示有问题，需要和=原始的比对来进行事先缩略图的显示

      this.select();
      top.parent.document.body.focus();
      let src = document.selection.createRange().text;

      document.selection.empty();

      targetTag.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod = scale)";
      targetTag.style.width = _this.Setting.Width + "px";
      targetTag.style.height = _this.Setting.Height + "px";
      //div._imgShow( ImagePreview.TRANSPARENT, div.style.width, div.style.height );
      try {
        targetTag.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = src;
      } catch (e) {
        alert("该图片无法上传，请更换图片后上传");
        //上传失败后，删除上传的内容，并提示用户重新上传
        $(targetTag).prev().remove();
        $(targetTag).remove();
        return;
      }
    }
  } else {
    //chrome/FF缩略图
    $("." + imgShowClass)[($(imgP).length - 1)].src = _this.getObjectURL(this.files[0]);
  }
}