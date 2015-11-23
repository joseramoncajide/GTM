function(){
 
    var MyDiv = document.getElementById('{{CFG_ArticleContentID}}').innerHTML;
    var wordCountTemp = MyDiv;
 
    wordCountTemp = wordCountTemp.replace(/(^\s*)|(\s*$)/gi,"");
    wordCountTemp = wordCountTemp.replace(/[ ]{2,}/gi," ");
    wordCountTemp = wordCountTemp.replace(/\n /,"\n");
    var wordCount = wordCountTemp.split(' ').length;
    console.log("post lenght: " + wordCount);
    if (wordCount>3000) return "3k+";
    else if (wordCount>2500) return "2.5k-3k";
    else if (wordCount>2000) return "2k-2.5k";
    else if (wordCount>1400) return "1.4k-2k";
    else if (wordCount>1000) return "1k-1.4k";
    else if (wordCount>700) return "700-1k";
    else if (wordCount>400) return "400-700";
    else if (wordCount>200) return "200-400";
    else return "<200"
 }
