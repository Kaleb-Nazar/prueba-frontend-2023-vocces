let array_users = [];

$(document).ready(function () {
  getUsers();
});

function getUsers() {
  let list_user = "";
  list_user = document.getElementById("list-user");

  let users = ``;

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      array_users = data;

      console.log(array_users);

      data.forEach((element) => {
        users +=
            `<li class="mt-3 list-group-item">
                <a href="javascript:void(0);" class=" link-primary" onclick="showUserInfo(` + element.id +`)" >` + element.username +`</a>
            </li>
            `;
      });

      $("#list-user").html(users);
    });
}

function showUserInfo(id) {
    let user = array_users[id - 1];

    $("#id").text(user.id);
    $("#name").text(user.name);
    $("#email").text(user.email);
    $("#phone").text(user.phone);
    $("#username").text(user.username);
    $("#website").text(user.website);

    $("#name").text(user.company.name);
    $("#catchPhrase").text(user.company.catchPhrase);
    $("#bs").text(user.company.bs);

    $("#city").text(user.address.city);
    $("#street").text(user.address.street);
    $("#suite").text(user.address.suite);
    $("#zipcode").text(user.address.zipcode);

    $("#lat").text(user.address.geo.lat);
    $("#lng").text(user.address.geo.lng);

    var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
        keyboard: false
    })

    myModal.toggle();
}
