function getDocumentInfo(id,token)  {
  $.ajax({
    method: 'get',
    url: "https://api.box.com/2.0/files/" + id + "?fields=id,name",
    headers: {
      "Authorization":"Bearer " + token
    },
    success: function(response) {
      console.log(response);

    },
    error: function(err) {
      console.log(JSON.stringify(err));
      console.log("error:" + err.message);

    }
  });
}
function getGroups(token)  {
  $.ajax({
    method: 'get',
    url: "https://api.box.com/2.0/groups",
    data: {},
    success: function(response) {
      console.log(response);

    },
    error: function(err) {
      console.log(JSON.stringify(err));
      console.log("error:" + err.message);

    }
  });
}
