define(["jquery"],function($){
    function body(){
        $(function(){
            //加载数据
            $.ajax({
                url:"../data/index.json",
                success:function(arr){
                    var str = ``;
                    for(var i = 0; i < arr.length; i++){
                        str += ` <div>
                        <img src="./images/top1.png" alt="">
                        <div class="font2">
                            热卖套餐
                        </div>
                        <div class="font3">
                            Surface Pro 7 酷睿 i5 8GB 256GB 键盘套餐，优惠价￥9,057元起 
                        </div>
                        <div class="font4">
                            <a href="particulars.html">立即购买></a>
                        </div>
                    </div>`
                    }
                },
                error:function(msg){
                    console.log(msg);
                }
            })
        })
    }
    return{
        body:body
    }
})