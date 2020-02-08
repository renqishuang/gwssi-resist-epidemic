// 深拷贝
window.deepClone = (obj) => {
    var o;
    // 如果  他是对象object的话  , 因为null,object,array  也是'object';
    if (typeof obj === 'object') {
      
      // 如果  他是空的话
      if (obj === null) {
        o = null;
      }
      else {
    
        // 如果  他是数组arr的话
        if (obj instanceof Array) {
          o = [];
          for (var i = 0, len = obj.length; i < len; i++) {
            o.push(deepClone(obj[ i ]));
          }
        }
        // 如果  他是对象object的话
        else {
          o = {};
          for (var j in obj) {
            o[ j ] = deepClone(obj[ j ]);
          }
        }
        
      }
    }
    else {
      o = obj;
    }
    return o;
}
//获取年月日 时分秒
window.getYMDAndHMS = function(date){
  let d = new Date(date)
  let dateStr = d.getFullYear()+"-"+((d.getMonth()+1)>=10?+(d.getMonth()+1):"0"+(d.getMonth()+1))+"-"+((d.getDate())>=10?d.getDate():'0'+d.getDate())
  let hour = d.getHours() >= 10 ? d.getHours() : '0'+d.getHours()
  let minute = d.getMinutes() >= 10 ? d.getMinutes() : '0'+d.getMinutes()
  let second = d.getSeconds() >= 10 ? d.getSeconds() : '0'+d.getSeconds()
  return dateStr + ' ' + hour + ':' + minute + ':' + second
}
//获取年月日
window.getYMD = function(date){
  let d = new Date(date)
  let dateStr = d.getFullYear()+"-"+((d.getMonth()+1)>=10?+(d.getMonth()+1):"0"+(d.getMonth()+1))+"-"+((d.getDate())>=10?d.getDate():'0'+d.getDate())
  return dateStr
}