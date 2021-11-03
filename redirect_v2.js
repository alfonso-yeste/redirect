	      
      function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
      
    function redireccionar() {
      
      var id = getParameterByName('ID');
      
    if (Math.random() * 100 <= 80) {
        destino = 'https://xb23d8i1.optimalworkshop.com/treejack/w4m71em1?ID=' + id;
    } 
    window.location= destino;
}
setTimeout(redireccionar,100);
