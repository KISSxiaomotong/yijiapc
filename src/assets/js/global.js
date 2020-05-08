exports.install = function (Vue, options) {
    Vue.prototype.convertType = function (res){//全局函数1
        Object.keys(res).forEach(function(key){
            let lists_type = res[key].type.split(",");
            let type = [];
            for (let i = 0; i < lists_type.length; i ++){
                if(lists_type[i] == 1){
                    type.push("住宅");
                }
                if(lists_type[i] == 2){
                    type.push("别墅");
                }
                if(lists_type[i] == 3){
                    type.push("商办");
                }
                if(lists_type[i] == 4){
                    type.push("商铺");
                }
                if(lists_type[i] == 5){
                    type.push("写字楼");
                }
            }
            res[key].type = type;
            let apartment = res[key].hxing.split(",");
            let max = 1;
            for (let i = 0; i < apartment.length; i ++){
                if(apartment[i] > max){
                    max = apartment[i];
                }
            }
            res[key].max = max;
            if(res[key].salesStatus == 1){
                res[key].salesStatus = "在售";
            }else if(res[key].salesStatus == 2){
                res[key].salesStatus = "售罄";
            }else{
                res[key].salesStatus = "待售";
            }
        });
        return res;
    };
};