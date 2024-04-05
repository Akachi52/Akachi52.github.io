//item2
$('.add_to_cart2').click(function(){
    var productCard = $(this).parent();
    var position = productCard.offset();
    var productImage = $(productCard).find('img').get(0).src;
    var productName = $(productCard).find('.product_name').get(0).innerHTML;
    var productPrice = $(productCard).find('.product_price').get(0).innerHTML;
    blockCart2();
                    
  
    $("body").append('<div class="floating-cart"></div>');		
    var cart = $('div.floating-cart');		
    productCard.clone().appendTo(cart);
    $(cart).css({'top' : position.top + 'px', "left" : position.left + 'px'}).fadeIn("slow").addClass('moveToCart');		
    setTimeout(function(){$("body").addClass("MakeFloatingCart");}, 800);
    setTimeout(function(){
        $('div.floating-cart').remove();
        $("body").removeClass("MakeFloatingCart");


        var cartItem = "<div class='cart-item'><div class='img-wrap'><img src='"+productImage+"' alt='' /></div><span>"+productName+"</span><strong>"+productPrice+"</strong><div class='cart-item-border'></div><div class='delete-item'></div></div>";			
      
        $("#cart .empty").hide();			
        $("#cart").append(cartItem);
        $("#checkout").fadeIn(500);
        
        $("#cart .cart-item").last()
            .addClass("flash")
            .find(".delete-item").click(function(){
                unblockCart2();
                $(this).parent().fadeOut(300, function(){
                    $(this).remove();
                    if($("#cart .cart-item").size() == 0){
                        $("#cart .empty").fadeIn(500);
                        $("#checkout").fadeOut(500);
                    }
                })
            });
         setTimeout(function(){
            $("#cart .cart-item").last().removeClass("flash");
        }, 10 );
        
    }, 1000);
});
function blockCart2() {
	var cc =  document.getElementById("cover-btns2");
        cc.style.display = "block"
  }
  function unblockCart2(){
    var ccc = document.getElementById("cover-btns2");
    ccc.style.display = "none"
}  


//item3
$('.add_to_cart3').click(function(){
    var productCard = $(this).parent();
    var position = productCard.offset();
    var productImage = $(productCard).find('img').get(0).src;
    var productName = $(productCard).find('.product_name').get(0).innerHTML;
    var productPrice = $(productCard).find('.product_price').get(0).innerHTML;
    blockCart3();
                    
  
    $("body").append('<div class="floating-cart"></div>');		
    var cart = $('div.floating-cart');		
    productCard.clone().appendTo(cart);
    $(cart).css({'top' : position.top + 'px', "left" : position.left + 'px'}).fadeIn("slow").addClass('moveToCart');		
    setTimeout(function(){$("body").addClass("MakeFloatingCart");}, 800);
    setTimeout(function(){
        $('div.floating-cart').remove();
        $("body").removeClass("MakeFloatingCart");


        var cartItem = "<div class='cart-item'><div class='img-wrap'><img src='"+productImage+"' alt='' /></div><span>"+productName+"</span><strong>"+productPrice+"</strong><div class='cart-item-border'></div><div class='delete-item'></div></div>";			
      
        $("#cart .empty").hide();			
        $("#cart").append(cartItem);
        $("#checkout").fadeIn(500);
        
        $("#cart .cart-item").last()
            .addClass("flash")
            .find(".delete-item").click(function(){
                unblockCart3();
                $(this).parent().fadeOut(300, function(){
                    $(this).remove();
                    if($("#cart .cart-item").size() == 0){
                        $("#cart .empty").fadeIn(500);
                        $("#checkout").fadeOut(500);
                    }
                })
            });
         setTimeout(function(){
            $("#cart .cart-item").last().removeClass("flash");
        }, 10 );
        
    }, 1000);
});
function blockCart3() {
	var dd =  document.getElementById("cover-btns3");
        dd.style.display = "block"
  }
  function unblockCart3(){
    var ddd = document.getElementById("cover-btns3");
    ddd.style.display = "none"
}  


//item4
$('.add_to_cart4').click(function(){
    var productCard = $(this).parent();
    var position = productCard.offset();
    var productImage = $(productCard).find('img').get(0).src;
    var productName = $(productCard).find('.product_name').get(0).innerHTML;
    var productPrice = $(productCard).find('.product_price').get(0).innerHTML;
    blockCart4();
                    
  
    $("body").append('<div class="floating-cart"></div>');		
    var cart = $('div.floating-cart');		
    productCard.clone().appendTo(cart);
    $(cart).css({'top' : position.top + 'px', "left" : position.left + 'px'}).fadeIn("slow").addClass('moveToCart');		
    setTimeout(function(){$("body").addClass("MakeFloatingCart");}, 800);
    setTimeout(function(){
        $('div.floating-cart').remove();
        $("body").removeClass("MakeFloatingCart");


        var cartItem = "<div class='cart-item'><div class='img-wrap'><img src='"+productImage+"' alt='' /></div><span>"+productName+"</span><strong>"+productPrice+"</strong><div class='cart-item-border'></div><div class='delete-item'></div></div>";			
      
        $("#cart .empty").hide();			
        $("#cart").append(cartItem);
        $("#checkout").fadeIn(500);
        
        $("#cart .cart-item").last()
            .addClass("flash")
            .find(".delete-item").click(function(){
                unblockCart4();
                $(this).parent().fadeOut(300, function(){
                    $(this).remove();
                    if($("#cart .cart-item").size() == 0){
                        $("#cart .empty").fadeIn(500);
                        $("#checkout").fadeOut(500);
                    }
                })
            });
         setTimeout(function(){
            $("#cart .cart-item").last().removeClass("flash");
        }, 10 );
        
    }, 1000);
});
function blockCart4() {
	var ee =  document.getElementById("cover-btns4");
        ee.style.display = "block"
  }
  function unblockCart4(){
    var eee = document.getElementById("cover-btns4");
    eee.style.display = "none"
}  


//item5
$('.add_to_cart5').click(function(){
    var productCard = $(this).parent();
    var position = productCard.offset();
    var productImage = $(productCard).find('img').get(0).src;
    var productName = $(productCard).find('.product_name').get(0).innerHTML;
    var productPrice = $(productCard).find('.product_price').get(0).innerHTML;
    blockCart5();
                    
  
    $("body").append('<div class="floating-cart"></div>');		
    var cart = $('div.floating-cart');		
    productCard.clone().appendTo(cart);
    $(cart).css({'top' : position.top + 'px', "left" : position.left + 'px'}).fadeIn("slow").addClass('moveToCart');		
    setTimeout(function(){$("body").addClass("MakeFloatingCart");}, 800);
    setTimeout(function(){
        $('div.floating-cart').remove();
        $("body").removeClass("MakeFloatingCart");


        var cartItem = "<div class='cart-item'><div class='img-wrap'><img src='"+productImage+"' alt='' /></div><span>"+productName+"</span><strong>"+productPrice+"</strong><div class='cart-item-border'></div><div class='delete-item'></div></div>";			
      
        $("#cart .empty").hide();			
        $("#cart").append(cartItem);
        $("#checkout").fadeIn(500);
        
        $("#cart .cart-item").last()
            .addClass("flash")
            .find(".delete-item").click(function(){
                unblockCart5();
                $(this).parent().fadeOut(300, function(){
                    $(this).remove();
                    if($("#cart .cart-item").size() == 0){
                        $("#cart .empty").fadeIn(500);
                        $("#checkout").fadeOut(500);
                    }
                })
            });
         setTimeout(function(){
            $("#cart .cart-item").last().removeClass("flash");
        }, 10 );
        
    }, 1000);
});
function blockCart5() {
	var ff =  document.getElementById("cover-btns5");
        ff.style.display = "block"
  }
  function unblockCart5(){
    var fff = document.getElementById("cover-btns5");
    fff.style.display = "none"
}  


//item6
$('.add_to_cart6').click(function(){
    var productCard = $(this).parent();
    var position = productCard.offset();
    var productImage = $(productCard).find('img').get(0).src;
    var productName = $(productCard).find('.product_name').get(0).innerHTML;
    var productPrice = $(productCard).find('.product_price').get(0).innerHTML;
    blockCart6();
                    
  
    $("body").append('<div class="floating-cart"></div>');		
    var cart = $('div.floating-cart');		
    productCard.clone().appendTo(cart);
    $(cart).css({'top' : position.top + 'px', "left" : position.left + 'px'}).fadeIn("slow").addClass('moveToCart');		
    setTimeout(function(){$("body").addClass("MakeFloatingCart");}, 800);
    setTimeout(function(){
        $('div.floating-cart').remove();
        $("body").removeClass("MakeFloatingCart");


        var cartItem = "<div class='cart-item'><div class='img-wrap'><img src='"+productImage+"' alt='' /></div><span>"+productName+"</span><strong>"+productPrice+"</strong><div class='cart-item-border'></div><div class='delete-item'></div></div>";			
      
        $("#cart .empty").hide();			
        $("#cart").append(cartItem);
        $("#checkout").fadeIn(500);
        
        $("#cart .cart-item").last()
            .addClass("flash")
            .find(".delete-item").click(function(){
                unblockCart6();
                $(this).parent().fadeOut(300, function(){
                    $(this).remove();
                    if($("#cart .cart-item").size() == 0){
                        $("#cart .empty").fadeIn(500);
                        $("#checkout").fadeOut(500);
                    }
                })
            });
         setTimeout(function(){
            $("#cart .cart-item").last().removeClass("flash");
        }, 10 );
        
    }, 1000);
});
function blockCart6() {
	var jj =  document.getElementById("cover-btns6");
        jj.style.display = "block"
  }
  function unblockCart6(){
    var jjj = document.getElementById("cover-btns6");
    jjj.style.display = "none"
}  


//item7
$('.add_to_cart7').click(function(){
    var productCard = $(this).parent();
    var position = productCard.offset();
    var productImage = $(productCard).find('img').get(0).src;
    var productName = $(productCard).find('.product_name').get(0).innerHTML;
    var productPrice = $(productCard).find('.product_price').get(0).innerHTML;
    blockCart7();
                    
  
    $("body").append('<div class="floating-cart"></div>');		
    var cart = $('div.floating-cart');		
    productCard.clone().appendTo(cart);
    $(cart).css({'top' : position.top + 'px', "left" : position.left + 'px'}).fadeIn("slow").addClass('moveToCart');		
    setTimeout(function(){$("body").addClass("MakeFloatingCart");}, 800);
    setTimeout(function(){
        $('div.floating-cart').remove();
        $("body").removeClass("MakeFloatingCart");


        var cartItem = "<div class='cart-item'><div class='img-wrap'><img src='"+productImage+"' alt='' /></div><span>"+productName+"</span><strong>"+productPrice+"</strong><div class='cart-item-border'></div><div class='delete-item'></div></div>";			
      
        $("#cart .empty").hide();			
        $("#cart").append(cartItem);
        $("#checkout").fadeIn(500);
        
        $("#cart .cart-item").last()
            .addClass("flash")
            .find(".delete-item").click(function(){
                unblockCart7();
                $(this).parent().fadeOut(300, function(){
                    $(this).remove();
                    if($("#cart .cart-item").size() == 0){
                        $("#cart .empty").fadeIn(500);
                        $("#checkout").fadeOut(500);
                    }
                })
            });
         setTimeout(function(){
            $("#cart .cart-item").last().removeClass("flash");
        }, 10 );
        
    }, 1000);
});
function blockCart7(){
	var ii =  document.getElementById("cover-btns7");
        ii.style.display = "block"
  }
  function unblockCart7(){
    var iii = document.getElementById("cover-btns7");
    iii.style.display = "none"
}  


//item8
$('.add_to_cart8').click(function(){
    var productCard = $(this).parent();
    var position = productCard.offset();
    var productImage = $(productCard).find('img').get(0).src;
    var productName = $(productCard).find('.product_name').get(0).innerHTML;
    var productPrice = $(productCard).find('.product_price').get(0).innerHTML;
    blockCart8();
                    
  
    $("body").append('<div class="floating-cart"></div>');		
    var cart = $('div.floating-cart');		
    productCard.clone().appendTo(cart);
    $(cart).css({'top' : position.top + 'px', "left" : position.left + 'px'}).fadeIn("slow").addClass('moveToCart');		
    setTimeout(function(){$("body").addClass("MakeFloatingCart");}, 800);
    setTimeout(function(){
        $('div.floating-cart').remove();
        $("body").removeClass("MakeFloatingCart");


        var cartItem = "<div class='cart-item'><div class='img-wrap'><img src='"+productImage+"' alt='' /></div><span>"+productName+"</span><strong>"+productPrice+"</strong><div class='cart-item-border'></div><div class='delete-item'></div></div>";			
      
        $("#cart .empty").hide();			
        $("#cart").append(cartItem);
        $("#checkout").fadeIn(500);
        
        $("#cart .cart-item").last()
            .addClass("flash")
            .find(".delete-item").click(function(){
                unblockCart8();
                $(this).parent().fadeOut(300, function(){
                    $(this).remove();
                    if($("#cart .cart-item").size() == 0){
                        $("#cart .empty").fadeIn(500);
                        $("#checkout").fadeOut(500);
                    }
                })
            });
         setTimeout(function(){
            $("#cart .cart-item").last().removeClass("flash");
        }, 10 );
        
    }, 1000);
});
function blockCart8() {
	var hh =  document.getElementById("cover-btns8");
        hh.style.display = "block"
  }
  function unblockCart8(){
    var hhh = document.getElementById("cover-btns8");
    hhh.style.display = "none"
}  


//item9
$('.add_to_cart9').click(function(){
    var productCard = $(this).parent();
    var position = productCard.offset();
    var productImage = $(productCard).find('img').get(0).src;
    var productName = $(productCard).find('.product_name').get(0).innerHTML;
    var productPrice = $(productCard).find('.product_price').get(0).innerHTML;
    blockCart9();
                    
  
    $("body").append('<div class="floating-cart"></div>');		
    var cart = $('div.floating-cart');		
    productCard.clone().appendTo(cart);
    $(cart).css({'top' : position.top + 'px', "left" : position.left + 'px'}).fadeIn("slow").addClass('moveToCart');		
    setTimeout(function(){$("body").addClass("MakeFloatingCart");}, 800);
    setTimeout(function(){
        $('div.floating-cart').remove();
        $("body").removeClass("MakeFloatingCart");


        var cartItem = "<div class='cart-item'><div class='img-wrap'><img src='"+productImage+"' alt='' /></div><span>"+productName+"</span><strong>"+productPrice+"</strong><div class='cart-item-border'></div><div class='delete-item'></div></div>";			
      
        $("#cart .empty").hide();			
        $("#cart").append(cartItem);
        $("#checkout").fadeIn(500);
        
        $("#cart .cart-item").last()
            .addClass("flash")
            .find(".delete-item").click(function(){
                unblockCart9();
                $(this).parent().fadeOut(300, function(){
                    $(this).remove();
                    if($("#cart .cart-item").size() == 0){
                        $("#cart .empty").fadeIn(500);
                        $("#checkout").fadeOut(500);
                    }
                })
            });
         setTimeout(function(){
            $("#cart .cart-item").last().removeClass("flash");
        }, 10 );
        
    }, 1000);
});
function blockCart9() {
	var gg =  document.getElementById("cover-btns9");
        gg.style.display = "block"
  }
  function unblockCart9(){
    var ggg = document.getElementById("cover-btns9");
    ggg.style.display = "none"
}  


//item10
$('.add_to_cart10').click(function(){
    var productCard = $(this).parent();
    var position = productCard.offset();
    var productImage = $(productCard).find('img').get(0).src;
    var productName = $(productCard).find('.product_name').get(0).innerHTML;
    var productPrice = $(productCard).find('.product_price').get(0).innerHTML;
    blockCart10();
                    
  
    $("body").append('<div class="floating-cart"></div>');		
    var cart = $('div.floating-cart');		
    productCard.clone().appendTo(cart);
    $(cart).css({'top' : position.top + 'px', "left" : position.left + 'px'}).fadeIn("slow").addClass('moveToCart');		
    setTimeout(function(){$("body").addClass("MakeFloatingCart");}, 800);
    setTimeout(function(){
        $('div.floating-cart').remove();
        $("body").removeClass("MakeFloatingCart");


        var cartItem = "<div class='cart-item'><div class='img-wrap'><img src='"+productImage+"' alt='' /></div><span>"+productName+"</span><strong>"+productPrice+"</strong><div class='cart-item-border'></div><div class='delete-item'></div></div>";			
      
        $("#cart .empty").hide();			
        $("#cart").append(cartItem);
        $("#checkout").fadeIn(500);
        
        $("#cart .cart-item").last()
            .addClass("flash")
            .find(".delete-item").click(function(){
                unblockCart10();
                $(this).parent().fadeOut(300, function(){
                    $(this).remove();
                    if($("#cart .cart-item").size() == 0){
                        $("#cart .empty").fadeIn(500);
                        $("#checkout").fadeOut(500);
                    }
                })
            });
         setTimeout(function(){
            $("#cart .cart-item").last().removeClass("flash");
        }, 10 );
        
    }, 1000);
});
function blockCart10() {
	var kk =  document.getElementById("cover-btns10");
        kk.style.display = "block"
  }
  function unblockCart10(){
    var kkk = document.getElementById("cover-btns10");
    kkk.style.display = "none"
}  


//item11
$('.add_to_cart11').click(function(){
    var productCard = $(this).parent();
    var position = productCard.offset();
    var productImage = $(productCard).find('img').get(0).src;
    var productName = $(productCard).find('.product_name').get(0).innerHTML;
    var productPrice = $(productCard).find('.product_price').get(0).innerHTML;
    blockCart11();
                    
  
    $("body").append('<div class="floating-cart"></div>');		
    var cart = $('div.floating-cart');		
    productCard.clone().appendTo(cart);
    $(cart).css({'top' : position.top + 'px', "left" : position.left + 'px'}).fadeIn("slow").addClass('moveToCart');		
    setTimeout(function(){$("body").addClass("MakeFloatingCart");}, 800);
    setTimeout(function(){
        $('div.floating-cart').remove();
        $("body").removeClass("MakeFloatingCart");


        var cartItem = "<div class='cart-item'><div class='img-wrap'><img src='"+productImage+"' alt='' /></div><span>"+productName+"</span><strong>"+productPrice+"</strong><div class='cart-item-border'></div><div class='delete-item'></div></div>";			
      
        $("#cart .empty").hide();			
        $("#cart").append(cartItem);
        $("#checkout").fadeIn(500);
        
        $("#cart .cart-item").last()
            .addClass("flash")
            .find(".delete-item").click(function(){
                unblockCart11();
                $(this).parent().fadeOut(300, function(){
                    $(this).remove();
                    if($("#cart .cart-item").size() == 0){
                        $("#cart .empty").fadeIn(500);
                        $("#checkout").fadeOut(500);
                    }
                })
            });
         setTimeout(function(){
            $("#cart .cart-item").last().removeClass("flash");
        }, 10 );
        
    }, 1000);
});
function blockCart11() {
	var ll =  document.getElementById("cover-btns11");
        ll.style.display = "block"
  }
  function unblockCart11(){
    var llc = document.getElementById("cover-btns11");
    llc.style.display = "none"
}  


//item12
$('.add_to_cart12').click(function(){
    var productCard = $(this).parent();
    var position = productCard.offset();
    var productImage = $(productCard).find('img').get(0).src;
    var productName = $(productCard).find('.product_name').get(0).innerHTML;
    var productPrice = $(productCard).find('.product_price').get(0).innerHTML;
    blockCart12();
                    
  
    $("body").append('<div class="floating-cart"></div>');		
    var cart = $('div.floating-cart');		
    productCard.clone().appendTo(cart);
    $(cart).css({'top' : position.top + 'px', "left" : position.left + 'px'}).fadeIn("slow").addClass('moveToCart');		
    setTimeout(function(){$("body").addClass("MakeFloatingCart");}, 800);
    setTimeout(function(){
        $('div.floating-cart').remove();
        $("body").removeClass("MakeFloatingCart");


        var cartItem = "<div class='cart-item'><div class='img-wrap'><img src='"+productImage+"' alt='' /></div><span>"+productName+"</span><strong>"+productPrice+"</strong><div class='cart-item-border'></div><div class='delete-item'></div></div>";			
      
        $("#cart .empty").hide();			
        $("#cart").append(cartItem);
        $("#checkout").fadeIn(500);
        
        $("#cart .cart-item").last()
            .addClass("flash")
            .find(".delete-item").click(function(){
                unblockCart12();
                $(this).parent().fadeOut(300, function(){
                    $(this).remove();
                    if($("#cart .cart-item").size() == 0){
                        $("#cart .empty").fadeIn(500);
                        $("#checkout").fadeOut(500);
                    }
                })
            });
         setTimeout(function(){
            $("#cart .cart-item").last().removeClass("flash");
        }, 10 );
        
    }, 1000);
});
function blockCart12() {
	var vcc =  document.getElementById("cover-btns12");
        vcc.style.display = "block"
  }
  function unblockCart12(){
    var vccc = document.getElementById("cover-btns12");
    vccc.style.display = "none"
}  


//item13
$('.add_to_cart13').click(function(){
    var productCard = $(this).parent();
    var position = productCard.offset();
    var productImage = $(productCard).find('img').get(0).src;
    var productName = $(productCard).find('.product_name').get(0).innerHTML;
    var productPrice = $(productCard).find('.product_price').get(0).innerHTML;
    blockCart13();
                    
  
    $("body").append('<div class="floating-cart"></div>');		
    var cart = $('div.floating-cart');		
    productCard.clone().appendTo(cart);
    $(cart).css({'top' : position.top + 'px', "left" : position.left + 'px'}).fadeIn("slow").addClass('moveToCart');		
    setTimeout(function(){$("body").addClass("MakeFloatingCart");}, 800);
    setTimeout(function(){
        $('div.floating-cart').remove();
        $("body").removeClass("MakeFloatingCart");


        var cartItem = "<div class='cart-item'><div class='img-wrap'><img src='"+productImage+"' alt='' /></div><span>"+productName+"</span><strong>"+productPrice+"</strong><div class='cart-item-border'></div><div class='delete-item'></div></div>";			
      
        $("#cart .empty").hide();			
        $("#cart").append(cartItem);
        $("#checkout").fadeIn(500);
        
        $("#cart .cart-item").last()
            .addClass("flash")
            .find(".delete-item").click(function(){
                unblockCart13();
                $(this).parent().fadeOut(300, function(){
                    $(this).remove();
                    if($("#cart .cart-item").size() == 0){
                        $("#cart .empty").fadeIn(500);
                        $("#checkout").fadeOut(500);
                    }
                })
            });
         setTimeout(function(){
            $("#cart .cart-item").last().removeClass("flash");
        }, 10 );
        
    }, 1000);
});
function blockCart13() {
	var acc =  document.getElementById("cover-btns13");
        acc.style.display = "block"
  }
  function unblockCart13(){
    var accc = document.getElementById("cover-btns13");
    accc.style.display = "none"
}  


//item14
$('.add_to_cart14').click(function(){
    var productCard = $(this).parent();
    var position = productCard.offset();
    var productImage = $(productCard).find('img').get(0).src;
    var productName = $(productCard).find('.product_name').get(0).innerHTML;
    var productPrice = $(productCard).find('.product_price').get(0).innerHTML;
    blockCart14();
                    
  
    $("body").append('<div class="floating-cart"></div>');		
    var cart = $('div.floating-cart');		
    productCard.clone().appendTo(cart);
    $(cart).css({'top' : position.top + 'px', "left" : position.left + 'px'}).fadeIn("slow").addClass('moveToCart');		
    setTimeout(function(){$("body").addClass("MakeFloatingCart");}, 800);
    setTimeout(function(){
        $('div.floating-cart').remove();
        $("body").removeClass("MakeFloatingCart");


        var cartItem = "<div class='cart-item'><div class='img-wrap'><img src='"+productImage+"' alt='' /></div><span>"+productName+"</span><strong>"+productPrice+"</strong><div class='cart-item-border'></div><div class='delete-item'></div></div>";			
      
        $("#cart .empty").hide();			
        $("#cart").append(cartItem);
        $("#checkout").fadeIn(500);
        
        $("#cart .cart-item").last()
            .addClass("flash")
            .find(".delete-item").click(function(){
                unblockCart14();
                $(this).parent().fadeOut(300, function(){
                    $(this).remove();
                    if($("#cart .cart-item").size() == 0){
                        $("#cart .empty").fadeIn(500);
                        $("#checkout").fadeOut(500);
                    }
                })
            });
         setTimeout(function(){
            $("#cart .cart-item").last().removeClass("flash");
        }, 10 );
        
    }, 1000);
});
function blockCart14() {
	var cx =  document.getElementById("cover-btns14");
        cx.style.display = "block"
  }
  function unblockCart14(){
    var ccx = document.getElementById("cover-btns14");
    ccx.style.display = "none"
}  


//item15
$('.add_to_cart15').click(function(){
    var productCard = $(this).parent();
    var position = productCard.offset();
    var productImage = $(productCard).find('img').get(0).src;
    var productName = $(productCard).find('.product_name').get(0).innerHTML;
    var productPrice = $(productCard).find('.product_price').get(0).innerHTML;
    blockCart15();
                    
  
    $("body").append('<div class="floating-cart"></div>');		
    var cart = $('div.floating-cart');		
    productCard.clone().appendTo(cart);
    $(cart).css({'top' : position.top + 'px', "left" : position.left + 'px'}).fadeIn("slow").addClass('moveToCart');		
    setTimeout(function(){$("body").addClass("MakeFloatingCart");}, 800);
    setTimeout(function(){
        $('div.floating-cart').remove();
        $("body").removeClass("MakeFloatingCart");


        var cartItem = "<div class='cart-item'><div class='img-wrap'><img src='"+productImage+"' alt='' /></div><span>"+productName+"</span><strong>"+productPrice+"</strong><div class='cart-item-border'></div><div class='delete-item'></div></div>";			
      
        $("#cart .empty").hide();			
        $("#cart").append(cartItem);
        $("#checkout").fadeIn(500);
        
        $("#cart .cart-item").last()
            .addClass("flash")
            .find(".delete-item").click(function(){
                unblockCart15();
                $(this).parent().fadeOut(300, function(){
                    $(this).remove();
                    if($("#cart .cart-item").size() == 0){
                        $("#cart .empty").fadeIn(500);
                        $("#checkout").fadeOut(500);
                    }
                })
            });
         setTimeout(function(){
            $("#cart .cart-item").last().removeClass("flash");
        }, 10 );
        
    }, 1000);
});
function blockCart15() {
	var ccb =  document.getElementById("cover-btns15");
        ccb.style.display = "block"
  }
  function unblockCart15(){
    var cccb = document.getElementById("cover-btns15");
    cccb.style.display = "none"
}  


//item16
$('.add_to_cart16').click(function(){
    var productCard = $(this).parent();
    var position = productCard.offset();
    var productImage = $(productCard).find('img').get(0).src;
    var productName = $(productCard).find('.product_name').get(0).innerHTML;
    var productPrice = $(productCard).find('.product_price').get(0).innerHTML;
    blockCart16();
                    
  
    $("body").append('<div class="floating-cart"></div>');		
    var cart = $('div.floating-cart');		
    productCard.clone().appendTo(cart);
    $(cart).css({'top' : position.top + 'px', "left" : position.left + 'px'}).fadeIn("slow").addClass('moveToCart');		
    setTimeout(function(){$("body").addClass("MakeFloatingCart");}, 800);
    setTimeout(function(){
        $('div.floating-cart').remove();
        $("body").removeClass("MakeFloatingCart");


        var cartItem = "<div class='cart-item'><div class='img-wrap'><img src='"+productImage+"' alt='' /></div><span>"+productName+"</span><strong>"+productPrice+"</strong><div class='cart-item-border'></div><div class='delete-item'></div></div>";			
      
        $("#cart .empty").hide();			
        $("#cart").append(cartItem);
        $("#checkout").fadeIn(500);
        
        $("#cart .cart-item").last()
            .addClass("flash")
            .find(".delete-item").click(function(){
                unblockCart16();
                $(this).parent().fadeOut(300, function(){
                    $(this).remove();
                    if($("#cart .cart-item").size() == 0){
                        $("#cart .empty").fadeIn(500);
                        $("#checkout").fadeOut(500);
                    }
                })
            });
         setTimeout(function(){
            $("#cart .cart-item").last().removeClass("flash");
        }, 10 );
        
    }, 1000);
});
function blockCart16() {
	var cac =  document.getElementById("cover-btns16");
        cac.style.display = "block"
  }
  function unblockCart16(){
    var cacc = document.getElementById("cover-btns16");
    cacc.style.display = "none"
}  


//item17
$('.add_to_cart17').click(function(){
    var productCard = $(this).parent();
    var position = productCard.offset();
    var productImage = $(productCard).find('img').get(0).src;
    var productName = $(productCard).find('.product_name').get(0).innerHTML;
    var productPrice = $(productCard).find('.product_price').get(0).innerHTML;
    blockCart17();
                    
  
    $("body").append('<div class="floating-cart"></div>');		
    var cart = $('div.floating-cart');		
    productCard.clone().appendTo(cart);
    $(cart).css({'top' : position.top + 'px', "left" : position.left + 'px'}).fadeIn("slow").addClass('moveToCart');		
    setTimeout(function(){$("body").addClass("MakeFloatingCart");}, 800);
    setTimeout(function(){
        $('div.floating-cart').remove();
        $("body").removeClass("MakeFloatingCart");


        var cartItem = "<div class='cart-item'><div class='img-wrap'><img src='"+productImage+"' alt='' /></div><span>"+productName+"</span><strong>"+productPrice+"</strong><div class='cart-item-border'></div><div class='delete-item'></div></div>";			
      
        $("#cart .empty").hide();			
        $("#cart").append(cartItem);
        $("#checkout").fadeIn(500);
        
        $("#cart .cart-item").last()
            .addClass("flash")
            .find(".delete-item").click(function(){
                unblockCart17();
                $(this).parent().fadeOut(300, function(){
                    $(this).remove();
                    if($("#cart .cart-item").size() == 0){
                        $("#cart .empty").fadeIn(500);
                        $("#checkout").fadeOut(500);
                    }
                })
            });
         setTimeout(function(){
            $("#cart .cart-item").last().removeClass("flash");
        }, 10 );
        
    }, 1000);
});
function blockCart17() {
	var ccg =  document.getElementById("cover-btns17");
        ccg.style.display = "block"
  }
  function unblockCart17(){
    var cccg = document.getElementById("cover-btns17");
    cccg.style.display = "none"
}  


//item18
$('.add_to_cart18').click(function(){
    var productCard = $(this).parent();
    var position = productCard.offset();
    var productImage = $(productCard).find('img').get(0).src;
    var productName = $(productCard).find('.product_name').get(0).innerHTML;
    var productPrice = $(productCard).find('.product_price').get(0).innerHTML;
    blockCart18();
                    
  
    $("body").append('<div class="floating-cart"></div>');		
    var cart = $('div.floating-cart');		
    productCard.clone().appendTo(cart);
    $(cart).css({'top' : position.top + 'px', "left" : position.left + 'px'}).fadeIn("slow").addClass('moveToCart');		
    setTimeout(function(){$("body").addClass("MakeFloatingCart");}, 800);
    setTimeout(function(){
        $('div.floating-cart').remove();
        $("body").removeClass("MakeFloatingCart");


        var cartItem = "<div class='cart-item'><div class='img-wrap'><img src='"+productImage+"' alt='' /></div><span>"+productName+"</span><strong>"+productPrice+"</strong><div class='cart-item-border'></div><div class='delete-item'></div></div>";			
      
        $("#cart .empty").hide();			
        $("#cart").append(cartItem);
        $("#checkout").fadeIn(500);
        
        $("#cart .cart-item").last()
            .addClass("flash")
            .find(".delete-item").click(function(){
                unblockCart18();
                $(this).parent().fadeOut(300, function(){
                    $(this).remove();
                    if($("#cart .cart-item").size() == 0){
                        $("#cart .empty").fadeIn(500);
                        $("#checkout").fadeOut(500);
                    }
                })
            });
         setTimeout(function(){
            $("#cart .cart-item").last().removeClass("flash");
        }, 10 );
        
    }, 1000);
});
function blockCart18() {
	var ccr =  document.getElementById("cover-btns18");
        ccr.style.display = "block"
  }
  function unblockCart18(){
    var cccr = document.getElementById("cover-btns18");
    cccr.style.display = "none"
}  


//item19
$('.add_to_cart10').click(function(){
    var productCard = $(this).parent();
    var position = productCard.offset();
    var productImage = $(productCard).find('img').get(0).src;
    var productName = $(productCard).find('.product_name').get(0).innerHTML;
    var productPrice = $(productCard).find('.product_price').get(0).innerHTML;
    blockCart19();
                    
  
    $("body").append('<div class="floating-cart"></div>');		
    var cart = $('div.floating-cart');		
    productCard.clone().appendTo(cart);
    $(cart).css({'top' : position.top + 'px', "left" : position.left + 'px'}).fadeIn("slow").addClass('moveToCart');		
    setTimeout(function(){$("body").addClass("MakeFloatingCart");}, 800);
    setTimeout(function(){
        $('div.floating-cart').remove();
        $("body").removeClass("MakeFloatingCart");


        var cartItem = "<div class='cart-item'><div class='img-wrap'><img src='"+productImage+"' alt='' /></div><span>"+productName+"</span><strong>"+productPrice+"</strong><div class='cart-item-border'></div><div class='delete-item'></div></div>";			
      
        $("#cart .empty").hide();			
        $("#cart").append(cartItem);
        $("#checkout").fadeIn(500);
        
        $("#cart .cart-item").last()
            .addClass("flash")
            .find(".delete-item").click(function(){
                unblockCart19();
                $(this).parent().fadeOut(300, function(){
                    $(this).remove();
                    if($("#cart .cart-item").size() == 0){
                        $("#cart .empty").fadeIn(500);
                        $("#checkout").fadeOut(500);
                    }
                })
            });
         setTimeout(function(){
            $("#cart .cart-item").last().removeClass("flash");
        }, 10 );
        
    }, 1000);
});
function blockCart19() {
	var cco =  document.getElementById("cover-btns19");
        cco.style.display = "block"
  }
  function unblockCart19(){
    var ccco = document.getElementById("cover-btns19");
    ccco.style.display = "none"
}  


//item20
$('.add_to_cart20').click(function(){
    var productCard = $(this).parent();
    var position = productCard.offset();
    var productImage = $(productCard).find('img').get(0).src;
    var productName = $(productCard).find('.product_name').get(0).innerHTML;
    var productPrice = $(productCard).find('.product_price').get(0).innerHTML;
    blockCart20();
                    
  
    $("body").append('<div class="floating-cart"></div>');		
    var cart = $('div.floating-cart');		
    productCard.clone().appendTo(cart);
    $(cart).css({'top' : position.top + 'px', "left" : position.left + 'px'}).fadeIn("slow").addClass('moveToCart');		
    setTimeout(function(){$("body").addClass("MakeFloatingCart");}, 800);
    setTimeout(function(){
        $('div.floating-cart').remove();
        $("body").removeClass("MakeFloatingCart");


        var cartItem = "<div class='cart-item'><div class='img-wrap'><img src='"+productImage+"' alt='' /></div><span>"+productName+"</span><strong>"+productPrice+"</strong><div class='cart-item-border'></div><div class='delete-item'></div></div>";			
      
        $("#cart .empty").hide();			
        $("#cart").append(cartItem);
        $("#checkout").fadeIn(500);
        
        $("#cart .cart-item").last()
            .addClass("flash")
            .find(".delete-item").click(function(){
                unblockCart20();
                $(this).parent().fadeOut(300, function(){
                    $(this).remove();
                    if($("#cart .cart-item").size() == 0){
                        $("#cart .empty").fadeIn(500);
                        $("#checkout").fadeOut(500);
                    }
                })
            });
         setTimeout(function(){
            $("#cart .cart-item").last().removeClass("flash");
        }, 10 );
        
    }, 1000);
});
function blockCart20() {
	var mm =  document.getElementById("cover-btns20");
        mm.style.display = "block"
  }
  function unblockCart20(){
    var mmm = document.getElementById("cover-btns20");
    mmm.style.display = "none"
}  


//item21
$('.add_to_cart21').click(function(){
    var productCard = $(this).parent();
    var position = productCard.offset();
    var productImage = $(productCard).find('img').get(0).src;
    var productName = $(productCard).find('.product_name').get(0).innerHTML;
    var productPrice = $(productCard).find('.product_price').get(0).innerHTML;
    blockCart21();
                    
  
    $("body").append('<div class="floating-cart"></div>');		
    var cart = $('div.floating-cart');		
    productCard.clone().appendTo(cart);
    $(cart).css({'top' : position.top + 'px', "left" : position.left + 'px'}).fadeIn("slow").addClass('moveToCart');		
    setTimeout(function(){$("body").addClass("MakeFloatingCart");}, 800);
    setTimeout(function(){
        $('div.floating-cart').remove();
        $("body").removeClass("MakeFloatingCart");


        var cartItem = "<div class='cart-item'><div class='img-wrap'><img src='"+productImage+"' alt='' /></div><span>"+productName+"</span><strong>"+productPrice+"</strong><div class='cart-item-border'></div><div class='delete-item'></div></div>";			
      
        $("#cart .empty").hide();			
        $("#cart").append(cartItem);
        $("#checkout").fadeIn(500);
        
        $("#cart .cart-item").last()
            .addClass("flash")
            .find(".delete-item").click(function(){
                unblockCart21();
                $(this).parent().fadeOut(300, function(){
                    $(this).remove();
                    if($("#cart .cart-item").size() == 0){
                        $("#cart .empty").fadeIn(500);
                        $("#checkout").fadeOut(500);
                    }
                })
            });
         setTimeout(function(){
            $("#cart .cart-item").last().removeClass("flash");
        }, 10 );
        
    }, 1000);
});
function blockCart21() {
	var nn =  document.getElementById("cover-btns21");
        nn.style.display = "block"
  }
  function unblockCart21(){
    var cccn = document.getElementById("cover-btns21");
    cccn.style.display = "none"
}  


//item22
$('.add_to_cart22').click(function(){
    var productCard = $(this).parent();
    var position = productCard.offset();
    var productImage = $(productCard).find('img').get(0).src;
    var productName = $(productCard).find('.product_name').get(0).innerHTML;
    var productPrice = $(productCard).find('.product_price').get(0).innerHTML;
    blockCart22();
                    
  
    $("body").append('<div class="floating-cart"></div>');		
    var cart = $('div.floating-cart');		
    productCard.clone().appendTo(cart);
    $(cart).css({'top' : position.top + 'px', "left" : position.left + 'px'}).fadeIn("slow").addClass('moveToCart');		
    setTimeout(function(){$("body").addClass("MakeFloatingCart");}, 800);
    setTimeout(function(){
        $('div.floating-cart').remove();
        $("body").removeClass("MakeFloatingCart");


        var cartItem = "<div class='cart-item'><div class='img-wrap'><img src='"+productImage+"' alt='' /></div><span>"+productName+"</span><strong>"+productPrice+"</strong><div class='cart-item-border'></div><div class='delete-item'></div></div>";			
      
        $("#cart .empty").hide();			
        $("#cart").append(cartItem);
        $("#checkout").fadeIn(500);
        
        $("#cart .cart-item").last()
            .addClass("flash")
            .find(".delete-item").click(function(){
                unblockCart22();
                $(this).parent().fadeOut(300, function(){
                    $(this).remove();
                    if($("#cart .cart-item").size() == 0){
                        $("#cart .empty").fadeIn(500);
                        $("#checkout").fadeOut(500);
                    }
                })
            });
         setTimeout(function(){
            $("#cart .cart-item").last().removeClass("flash");
        }, 10 );
        
    }, 1000);
});
function blockCart22() {
	var oo =  document.getElementById("cover-btns22");
        oo.style.display = "block"
  }
  function unblockCart2(){
    var cccoo = document.getElementById("cover-btns22");
    cccoo.style.display = "none"
}  


//item23
$('.add_to_cart23').click(function(){
    var productCard = $(this).parent();
    var position = productCard.offset();
    var productImage = $(productCard).find('img').get(0).src;
    var productName = $(productCard).find('.product_name').get(0).innerHTML;
    var productPrice = $(productCard).find('.product_price').get(0).innerHTML;
    blockCart23();
                    
  
    $("body").append('<div class="floating-cart"></div>');		
    var cart = $('div.floating-cart');		
    productCard.clone().appendTo(cart);
    $(cart).css({'top' : position.top + 'px', "left" : position.left + 'px'}).fadeIn("slow").addClass('moveToCart');		
    setTimeout(function(){$("body").addClass("MakeFloatingCart");}, 800);
    setTimeout(function(){
        $('div.floating-cart').remove();
        $("body").removeClass("MakeFloatingCart");


        var cartItem = "<div class='cart-item'><div class='img-wrap'><img src='"+productImage+"' alt='' /></div><span>"+productName+"</span><strong>"+productPrice+"</strong><div class='cart-item-border'></div><div class='delete-item'></div></div>";			
      
        $("#cart .empty").hide();			
        $("#cart").append(cartItem);
        $("#checkout").fadeIn(500);
        
        $("#cart .cart-item").last()
            .addClass("flash")
            .find(".delete-item").click(function(){
                unblockCart23();
                $(this).parent().fadeOut(300, function(){
                    $(this).remove();
                    if($("#cart .cart-item").size() == 0){
                        $("#cart .empty").fadeIn(500);
                        $("#checkout").fadeOut(500);
                    }
                })
            });
         setTimeout(function(){
            $("#cart .cart-item").last().removeClass("flash");
        }, 10 );
        
    }, 1000);
});
function blockCart23() {
	var ccp =  document.getElementById("cover-btns23");
        ccp.style.display = "block"
  }
  function unblockCart23(){
    var cccp = document.getElementById("cover-btns23");
    cccp.style.display = "none"
}  


//item24
$('.add_to_cart24').click(function(){
    var productCard = $(this).parent();
    var position = productCard.offset();
    var productImage = $(productCard).find('img').get(0).src;
    var productName = $(productCard).find('.product_name').get(0).innerHTML;
    var productPrice = $(productCard).find('.product_price').get(0).innerHTML;
    blockCart24();
                    
  
    $("body").append('<div class="floating-cart"></div>');		
    var cart = $('div.floating-cart');		
    productCard.clone().appendTo(cart);
    $(cart).css({'top' : position.top + 'px', "left" : position.left + 'px'}).fadeIn("slow").addClass('moveToCart');		
    setTimeout(function(){$("body").addClass("MakeFloatingCart");}, 800);
    setTimeout(function(){
        $('div.floating-cart').remove();
        $("body").removeClass("MakeFloatingCart");


        var cartItem = "<div class='cart-item'><div class='img-wrap'><img src='"+productImage+"' alt='' /></div><span>"+productName+"</span><strong>"+productPrice+"</strong><div class='cart-item-border'></div><div class='delete-item'></div></div>";			
      
        $("#cart .empty").hide();			
        $("#cart").append(cartItem);
        $("#checkout").fadeIn(500);
        
        $("#cart .cart-item").last()
            .addClass("flash")
            .find(".delete-item").click(function(){
                unblockCart24();
                $(this).parent().fadeOut(300, function(){
                    $(this).remove();
                    if($("#cart .cart-item").size() == 0){
                        $("#cart .empty").fadeIn(500);
                        $("#checkout").fadeOut(500);
                    }
                })
            });
         setTimeout(function(){
            $("#cart .cart-item").last().removeClass("flash");
        }, 10 );
        
    }, 1000);
});
function blockCart24() {
	var cch =  document.getElementById("cover-btns24");
        cch.style.display = "block"
  }
  function unblockCart24(){
    var chcc = document.getElementById("cover-btns24");
    chcc.style.display = "none"
}  


//item25
$('.add_to_cart25').click(function(){
    var productCard = $(this).parent();
    var position = productCard.offset();
    var productImage = $(productCard).find('img').get(0).src;
    var productName = $(productCard).find('.product_name').get(0).innerHTML;
    var productPrice = $(productCard).find('.product_price').get(0).innerHTML;
    blockCart25();
                    
  
    $("body").append('<div class="floating-cart"></div>');		
    var cart = $('div.floating-cart');		
    productCard.clone().appendTo(cart);
    $(cart).css({'top' : position.top + 'px', "left" : position.left + 'px'}).fadeIn("slow").addClass('moveToCart');		
    setTimeout(function(){$("body").addClass("MakeFloatingCart");}, 800);
    setTimeout(function(){
        $('div.floating-cart').remove();
        $("body").removeClass("MakeFloatingCart");


        var cartItem = "<div class='cart-item'><div class='img-wrap'><img src='"+productImage+"' alt='' /></div><span>"+productName+"</span><strong>"+productPrice+"</strong><div class='cart-item-border'></div><div class='delete-item'></div></div>";			
      
        $("#cart .empty").hide();			
        $("#cart").append(cartItem);
        $("#checkout").fadeIn(500);
        
        $("#cart .cart-item").last()
            .addClass("flash")
            .find(".delete-item").click(function(){
                unblockCart25();
                $(this).parent().fadeOut(300, function(){
                    $(this).remove();
                    if($("#cart .cart-item").size() == 0){
                        $("#cart .empty").fadeIn(500);
                        $("#checkout").fadeOut(500);
                    }
                })
            });
         setTimeout(function(){
            $("#cart .cart-item").last().removeClass("flash");
        }, 10 );
        
    }, 1000);
});
function blockCart25() {
	var cuc =  document.getElementById("cover-btns25");
        cuc.style.display = "block"
  }
  function unblockCart25(){
    var ccuc = document.getElementById("cover-btns25");
    ccuc.style.display = "none"
}  


//item26
$('.add_to_cart26').click(function(){
    var productCard = $(this).parent();
    var position = productCard.offset();
    var productImage = $(productCard).find('img').get(0).src;
    var productName = $(productCard).find('.product_name').get(0).innerHTML;
    var productPrice = $(productCard).find('.product_price').get(0).innerHTML;
    blockCart26();
                    
  
    $("body").append('<div class="floating-cart"></div>');		
    var cart = $('div.floating-cart');		
    productCard.clone().appendTo(cart);
    $(cart).css({'top' : position.top + 'px', "left" : position.left + 'px'}).fadeIn("slow").addClass('moveToCart');		
    setTimeout(function(){$("body").addClass("MakeFloatingCart");}, 800);
    setTimeout(function(){
        $('div.floating-cart').remove();
        $("body").removeClass("MakeFloatingCart");


        var cartItem = "<div class='cart-item'><div class='img-wrap'><img src='"+productImage+"' alt='' /></div><span>"+productName+"</span><strong>"+productPrice+"</strong><div class='cart-item-border'></div><div class='delete-item'></div></div>";			
      
        $("#cart .empty").hide();			
        $("#cart").append(cartItem);
        $("#checkout").fadeIn(500);
        
        $("#cart .cart-item").last()
            .addClass("flash")
            .find(".delete-item").click(function(){
                unblockCart26();
                $(this).parent().fadeOut(300, function(){
                    $(this).remove();
                    if($("#cart .cart-item").size() == 0){
                        $("#cart .empty").fadeIn(500);
                        $("#checkout").fadeOut(500);
                    }
                })
            });
         setTimeout(function(){
            $("#cart .cart-item").last().removeClass("flash");
        }, 10 );
        
    }, 1000);
});
function blockCart26() {
	var ccx =  document.getElementById("cover-btns26");
        ccx.style.display = "block"
  }
  function unblockCart2(){
    var ccxc = document.getElementById("cover-btns26");
    ccxc.style.display = "none"
}  


//item27
$('.add_to_cart27').click(function(){
    var productCard = $(this).parent();
    var position = productCard.offset();
    var productImage = $(productCard).find('img').get(0).src;
    var productName = $(productCard).find('.product_name').get(0).innerHTML;
    var productPrice = $(productCard).find('.product_price').get(0).innerHTML;
    blockCart27();
                    
  
    $("body").append('<div class="floating-cart"></div>');		
    var cart = $('div.floating-cart');		
    productCard.clone().appendTo(cart);
    $(cart).css({'top' : position.top + 'px', "left" : position.left + 'px'}).fadeIn("slow").addClass('moveToCart');		
    setTimeout(function(){$("body").addClass("MakeFloatingCart");}, 800);
    setTimeout(function(){
        $('div.floating-cart').remove();
        $("body").removeClass("MakeFloatingCart");


        var cartItem = "<div class='cart-item'><div class='img-wrap'><img src='"+productImage+"' alt='' /></div><span>"+productName+"</span><strong>"+productPrice+"</strong><div class='cart-item-border'></div><div class='delete-item'></div></div>";			
      
        $("#cart .empty").hide();			
        $("#cart").append(cartItem);
        $("#checkout").fadeIn(500);
        
        $("#cart .cart-item").last()
            .addClass("flash")
            .find(".delete-item").click(function(){
                unblockCart27();
                $(this).parent().fadeOut(300, function(){
                    $(this).remove();
                    if($("#cart .cart-item").size() == 0){
                        $("#cart .empty").fadeIn(500);
                        $("#checkout").fadeOut(500);
                    }
                })
            });
         setTimeout(function(){
            $("#cart .cart-item").last().removeClass("flash");
        }, 10 );
        
    }, 1000);
});
function blockCart27() {
	var ccy =  document.getElementById("cover-btns27");
        ccy.style.display = "block"
  }
  function unblockCart27(){
    var cycc = document.getElementById("cover-btns27");
    cycc.style.display = "none"
}  


//item28
$('.add_to_cart28').click(function(){
    var productCard = $(this).parent();
    var position = productCard.offset();
    var productImage = $(productCard).find('img').get(0).src;
    var productName = $(productCard).find('.product_name').get(0).innerHTML;
    var productPrice = $(productCard).find('.product_price').get(0).innerHTML;
    blockCart28();
                    
  
    $("body").append('<div class="floating-cart"></div>');		
    var cart = $('div.floating-cart');		
    productCard.clone().appendTo(cart);
    $(cart).css({'top' : position.top + 'px', "left" : position.left + 'px'}).fadeIn("slow").addClass('moveToCart');		
    setTimeout(function(){$("body").addClass("MakeFloatingCart");}, 800);
    setTimeout(function(){
        $('div.floating-cart').remove();
        $("body").removeClass("MakeFloatingCart");


        var cartItem = "<div class='cart-item'><div class='img-wrap'><img src='"+productImage+"' alt='' /></div><span>"+productName+"</span><strong>"+productPrice+"</strong><div class='cart-item-border'></div><div class='delete-item'></div></div>";			
      
        $("#cart .empty").hide();			
        $("#cart").append(cartItem);
        $("#checkout").fadeIn(500);
        
        $("#cart .cart-item").last()
            .addClass("flash")
            .find(".delete-item").click(function(){
                unblockCart28();
                $(this).parent().fadeOut(300, function(){
                    $(this).remove();
                    if($("#cart .cart-item").size() == 0){
                        $("#cart .empty").fadeIn(500);
                        $("#checkout").fadeOut(500);
                    }
                })
            });
         setTimeout(function(){
            $("#cart .cart-item").last().removeClass("flash");
        }, 10 );
        
    }, 1000);
});
function blockCart28() {
	var cci =  document.getElementById("cover-btns28");
        cci.style.display = "block"
  }
  function unblockCart28(){
    var cicc = document.getElementById("cover-btns28");
    cicc.style.display = "none"
}  


//item29
$('.add_to_cart29').click(function(){
    var productCard = $(this).parent();
    var position = productCard.offset();
    var productImage = $(productCard).find('img').get(0).src;
    var productName = $(productCard).find('.product_name').get(0).innerHTML;
    var productPrice = $(productCard).find('.product_price').get(0).innerHTML;
    blockCart29();
                    
  
    $("body").append('<div class="floating-cart"></div>');		
    var cart = $('div.floating-cart');		
    productCard.clone().appendTo(cart);
    $(cart).css({'top' : position.top + 'px', "left" : position.left + 'px'}).fadeIn("slow").addClass('moveToCart');		
    setTimeout(function(){$("body").addClass("MakeFloatingCart");}, 800);
    setTimeout(function(){
        $('div.floating-cart').remove();
        $("body").removeClass("MakeFloatingCart");


        var cartItem = "<div class='cart-item'><div class='img-wrap'><img src='"+productImage+"' alt='' /></div><span>"+productName+"</span><strong>"+productPrice+"</strong><div class='cart-item-border'></div><div class='delete-item'></div></div>";			
      
        $("#cart .empty").hide();			
        $("#cart").append(cartItem);
        $("#checkout").fadeIn(500);
        
        $("#cart .cart-item").last()
            .addClass("flash")
            .find(".delete-item").click(function(){
                unblockCart29();
                $(this).parent().fadeOut(300, function(){
                    $(this).remove();
                    if($("#cart .cart-item").size() == 0){
                        $("#cart .empty").fadeIn(500);
                        $("#checkout").fadeOut(500);
                    }
                })
            });
         setTimeout(function(){
            $("#cart .cart-item").last().removeClass("flash");
        }, 10 );
        
    }, 1000);
});
function blockCart29() {
	var cj =  document.getElementById("cover-btns29");
        cj.style.display = "block"
  }
  function unblockCart29(){
    var cccj = document.getElementById("cover-btns29");
    cccj.style.display = "none"
}  


//item30
$('.add_to_cart30').click(function(){
    var productCard = $(this).parent();
    var position = productCard.offset();
    var productImage = $(productCard).find('img').get(0).src;
    var productName = $(productCard).find('.product_name').get(0).innerHTML;
    var productPrice = $(productCard).find('.product_price').get(0).innerHTML;
    blockCart30();
                    
  
    $("body").append('<div class="floating-cart"></div>');		
    var cart = $('div.floating-cart');		
    productCard.clone().appendTo(cart);
    $(cart).css({'top' : position.top + 'px', "left" : position.left + 'px'}).fadeIn("slow").addClass('moveToCart');		
    setTimeout(function(){$("body").addClass("MakeFloatingCart");}, 800);
    setTimeout(function(){
        $('div.floating-cart').remove();
        $("body").removeClass("MakeFloatingCart");


        var cartItem = "<div class='cart-item'><div class='img-wrap'><img src='"+productImage+"' alt='' /></div><span>"+productName+"</span><strong>"+productPrice+"</strong><div class='cart-item-border'></div><div class='delete-item'></div></div>";			
      
        $("#cart .empty").hide();			
        $("#cart").append(cartItem);
        $("#checkout").fadeIn(500);
        
        $("#cart .cart-item").last()
            .addClass("flash")
            .find(".delete-item").click(function(){
                unblockCart30();
                $(this).parent().fadeOut(300, function(){
                    $(this).remove();
                    if($("#cart .cart-item").size() == 0){
                        $("#cart .empty").fadeIn(500);
                        $("#checkout").fadeOut(500);
                    }
                })
            });
         setTimeout(function(){
            $("#cart .cart-item").last().removeClass("flash");
        }, 10 );
        
    }, 1000);
});
function blockCart30() {
	var zz =  document.getElementById("cover-btns30");
        zz.style.display = "block"
  }
  function unblockCart30(){
    var zzyz = document.getElementById("cover-btns30");
    zzyz.style.display = "none"
}  
