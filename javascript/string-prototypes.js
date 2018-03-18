String.prototype.toText = function(){
    return this.replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\//g,"&frasl;")
        .replace(/\'/g,"&apos;")
        .replace(/\"/g, "&quot;");
};

String.prototype.limitWords = function(limitNumber){
    try{
        limitNumber = parseInt(limitNumber) || 0;
        if (limitNumber > 0 && this.length > 0)
            return this.split(" ").slice(0,limitNumber).join(" ");
        else
            return this
    }catch(e){}
};