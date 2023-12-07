let pound = document.getElementById('pound');
let dollar = document.getElementById('dollar');
let real = document.getElementById('real');

pound.onkeyup = function(){
    dollar.value = pound.value / 40;
    real.value = pound.value / 10;
}
dollar.onkeyup = function(){
    pound.value = dollar.value * 40;
    real.value = dollar.value * 4;
}
real.onkeyup = function(){
    pound.value = real.value * 10;
    dollar.value = real.value / 4;
}