function getSecurityHistory() {
  var brp2 = document.querySelectorAll(".Box-row.p-2");
  var history = [];
  for (var k = 0; k < brp2.length; k ++) {
    var datetime = brp2[k].querySelector(".security-history-timestamp relative-time").getAttribute("datetime");
    var local = {};
    var keys = brp2[k].querySelectorAll("th");
    var values = brp2[k].querySelectorAll("td");
    for (var j = 0; j < keys.length; j ++) {
      local[keys[j].innerText] = values[j].innerText;
    }
    history.push({
      event: local,
      datetime: datetime
    });
  }

  return history;
}
