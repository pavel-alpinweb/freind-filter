export function vkLoader() {
  VK.init({
    apiId: 5350105
  });

  function auth(){
      return new Promise((resolve, reject) => {
        VK.Auth.login(function(data) {
            if (data.session) {
              resolve();
            } else {
              reject(new Error('Не удалось авторизоваться'));
            }
          }, 2);
      });
  }

  function callAPI(method, params){
    params.v = '5.76';

    return new Promise((resolve, reject) => {
        VK.api(method, params, (data) => {
            if(data.error){
                reject(data.error);
            } else {
                resolve(data.response);
            }
        });
      });
  }

  auth().then(() => {
      return callAPI('friends.get', {fields: 'photo_100'});
  })
  .then(friends => {
    const template  = document.querySelector("#entry-template").textContent;
    const render = Handlebars.compile(template);
    const html    = render(friends.items);
    const results = document.querySelector('.friends-catalog__list--filter');

    results.innerHTML = html;

    console.log(template)
  });
}