//polyfills
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}
//Basic functions for EJShops
document.querySelectorAll(".EJ-ProductDetailUrl").forEach(function(y){
	if(y.href == window.location.href.split("#")[0]+"#")
		y.remove()
})

document.querySelectorAll(".EJ-ProductDemoUrl").forEach(function(y){
	if(y.href == window.location.href.split("#")[0]+"#")
		y.remove()
})

document.querySelectorAll(".EJ-ProductThumbnailContainer").forEach(function(y){
	if(y.childElementCount == 1)
		y.remove()
})

function EJSetProductBigImage(s){
        document.querySelectorAll(".EJ-ProductBigImage").forEach(function(y){ 
		y.src = s.replace("tiny-", "mid-")
	})
}

function EJ_cartCallback(response){
  if(typeof response === "boolean"){
    return false;
  }
  if(response.ci_id == null)
          document.querySelectorAll(".EJ-CartItemsNum").forEach(function(y){ y.innerHTML = "0"; })
  else
          document.querySelectorAll(".EJ-CartItemsNum").forEach(function(y){ y.innerHTML = response.ci_id.length; })
  return false;
}

function EJShowHiddenDiv(x){
  if(x == 1){
    if($(".EJ-TagsDiv").hasClass("is-hidden")) $('.EJ-TagsDiv').removeClass("is-hidden")
    else $('.EJ-TagsDiv').addClass("is-hidden")
    $('.EJ-ShareDiv').addClass("is-hidden")
    $('.EJ-SearchDiv').addClass("is-hidden")
  }
  if(x == 2){
    if($(".EJ-SearchDiv").hasClass("is-hidden")) $('.EJ-SearchDiv').removeClass("is-hidden")
    else $('.EJ-SearchDiv').addClass("is-hidden")
    $('.EJ-ShareDiv').addClass("is-hidden")
    $('.EJ-TagsDiv').addClass("is-hidden")
  }
  if(x == 3){
    if($(".EJ-ShareDiv").hasClass("is-hidden")) $('.EJ-ShareDiv').removeClass("is-hidden")
    else $('.EJ-ShareDiv').addClass("is-hidden")
    $('.EJ-SearchDiv').addClass("is-hidden")
    $('.EJ-TagsDiv').addClass("is-hidden")
  }
}

function EJProductClick(x){
    var product = document.querySelector("#EJProduct_"+x)
    var form = product.querySelector("form")
    var hasOptions = false
      form.querySelectorAll("input, select").forEach(function(y){
      if(y.name == "o1"  ||
      y.name == "o2" ||
      y.name == "o3" ||
      y.name == "on0" ||
      y.name == "on1" ||
      y.name == "on2") hasOptions = true
    })
    if(hasOptions == false){
      form.querySelector("button").click()
    }else{
      $.fancybox.open({
        src  : form.parentElement,
        type : 'inline',
      });
    }
    return false;
}
