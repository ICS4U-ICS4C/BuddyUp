let file = {}
//SignUp function
$('.picture,.picture_m').change(function(){
  const preview = document.querySelector('.circle');
  const preview_mobile = document.querySelector('.circle_m');
  const file = document.querySelector('input[type=file]').files[0];
  const file2 = document.querySelector('.picture_m').files[0];
  const reader = new FileReader();

  reader.addEventListener("load", function () {
    // convert image file to base64 string
    preview.src = reader.result;
    preview_mobile.src = reader.result
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
})
