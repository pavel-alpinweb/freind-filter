export function vkLoader() {
  VK.init({
    apiId: 5350105
  });
  VK.Auth.login(function(response) {
    if (response.session) {
      console.log("всё ок!");
    } else {
      alert("Не удалось авторизоваться");
    }
  }, 8);

  var source   = document.getElementById("entry-template").innerHTML;
  var template = Handlebars.compile(source);
  const target = document.querySelector('.friends-catalog__list--filter');
  var data = {title: "My New Post", body: "This is my first post!"};
  var html    = template(data);

  target.innerHTML = html;
}
