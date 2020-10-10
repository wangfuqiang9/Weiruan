require.config({
    paths: {
      jquery: "jquery-1.11.3",
      "jquery.cookie":"jquery.cookie"
    },
    shim:{
      "jquery-cookie":["jquery"],
    }
  })

  //调用首页的代码
  require(["index"], function(index){
    // index.body();
    index.body();
  })
  
  