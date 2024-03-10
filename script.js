function dispararAlert() {
  //esibe uma caixa de liagogo motal pra fazer uma pergunta pro usuario
  var answr = confirm("Depois do ok abre outra pagina");
  if (answr) {
    window.location = "http://youtube.com/";
  }
  //executa em 5 seguntos
}
setTimeout(dispararAlert, 10000);

//--------------
function msgDebug() {
  var log = document.getElementById("debublog");
  if (!log) {
    log = document.creareElemenr("div");
    log.id = "debublog";
    log.innerHTML = "<h1>Debug Log</h1>";
    document.body.appendChild(log);
  }
  var pre = document.createElement("pre");
  var text = document.createTextNode("msg");
  pre.appendChild(text);
  log.appendChild(pre);
}
