$(function(){


  // 画像用のinputを生成する関数
  const buildFileField = (num)=> {
    const html = `<div class="Previews-new">
                    <div data-index="${num}" class="js-file_group">
                      <input class="js-file" type="file"
                      name="post[images_attributes][${num}][name]"
                      id="post_images_attributes_${num}_name"><br>
                    </div>
                  </div>`;
    return html;
  }
  // プレビュー用のimgタグを生成する関数
  const buildImg = (index, url)=> {
    const html = `
                  <label class="Previews-edit">
                  <img data-index="${index}" src="${url}" width="122px" height="122px">
                    <span class="js-remove">削除</span>
                 `;
    return html;
  }

  const buildEdit = (index, url)=> {
    const html = `
                  <img data-index="${index}" src="${url}" width="122px" height="122px">
                    <span class="js-remove">削除</span>
                 `;
    return html;
  }

  // file_fieldのnameに動的なindexをつける為の配列
  let fileIndex = [1,2,3,4,5,6,7,8,9,10];
  // 既に使われているindexを除外
  lastIndex = $('.js-file_group:last').data('index');
  fileIndex.splice(0, lastIndex);

  $('.hidden-destroy').hide();

  $('.BOX').on('change', '.js-file', function(e) {
    const targetIndex = $(this).parent().data('index');

    // ファイルのブラウザ上でのURLを取得する
    const file = e.target.files[0];
     
    const blobUrl = window.URL.createObjectURL(file);
    //labelボックスのidとforを更新
    $('.Post-Main__images__image').attr( "for", `post_images_attributes_${targetIndex + 1}_name`);
     
    
    // 該当indexを持つimgがあれば取得して変数imgに入れる(画像変更の処理)
    if (img = $(`img[data-index="${targetIndex}"]`)[0]) {
        
      img.setAttribute('name', blobUrl);
      $(`#post_images_attributes_${targetIndex}`).empty();
      
      
      $(`#post_images_attributes_${targetIndex}`).append(buildEdit(targetIndex, blobUrl));
      
    
    } else {  // 新規画像追加の処理
      $('#previews').append(buildImg(targetIndex, blobUrl));
       
      // fileIndexの先頭の数字を使ってinputを作る
      const file_field = $(`input[type="file"]:last`);
        
      const newIndex = file_field.parent().data("index") + 1;
        
      
      $('.BOX').append(buildFileField(newIndex));
        

      fileIndex.shift();
       
      // 末尾の数に1足した数を追加する
      fileIndex.push(fileIndex[fileIndex.length - 1] + 1);
        
      
    }
  });
  
  $('.Post-Main__images__image').on('click', function(e) {
    
    const file_field = $(`input[type="file"]:last`);
    file_field.trigger("click");
  });

  $('#previews').on('click', '.js-remove', function(e) {
    const targetIndex = $(this).prev().data('index');
    // 該当indexを振られているチェックボックスを取得する
    const hiddenCheck = $(`input[data-index="${targetIndex}"].hidden-destroy`);
    // もしチェックボックスが存在すればチェックを入れる
    if (hiddenCheck) hiddenCheck.prop('checked', true);

    
    $(`img[data-index="${targetIndex}"]`).remove();
    $(`.js-file_group[data-index="${targetIndex}"]`).remove();

    // 画像入力欄が0個にならないようにしておく
    if ($('.js-file').length == 0) $('#image-box').append(buildFileField(fileIndex[0]));
    $(this).remove();

  });
})