var date_format = function(num) {
    return ( num < 10 ) ? '0' + num  : num;
};
var timestamp = 1521967168.000085;
var d = new Date(timestamp*1000);
console.log(d)

console.log( "DATETIME = " + d.getFullYear() + '-' + date_format( d.getMonth() + 1 ) + '-' + date_format( d.getDate() )+ ' ' + date_format( d.getHours() ) + ':' + date_format( d.getMinutes() ) + ':' + date_format( d.getSeconds() ) );
