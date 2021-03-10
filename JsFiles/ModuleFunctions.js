//Change element values
function setValue(elem,string){
  $(elem).val('');
  $(elem).attr("placeholder",string)
  $(elem).css('border-color', 'red')
}

//Call shake function
function shake(elem){
$(document).ready(function(){
  $(elem).addClass("error");
  setTimeout(function(){
    $(elem).removeClass("error");
  },500)
});
}

//check if mobile
//Credits https://coderwall.com/p/i817wa/one-line-function-to-detect-mobile-devices-with-javascript
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};