import './styles/styles.scss';

// const renderFn = Handlebars.compile(template)
// const html = render(array)
// container.innerHTML = html;


const source = document.querySelector('.friends-catalog__list--friends');
const target = document.querySelector('.friends-catalog__list--filter');

const friendSeacrhInput = document.getElementById('accaunt-friends');
const filterSeacrhInput = document.getElementById('list-friends');

searchFriend(friendSeacrhInput);
searchFriend(filterSeacrhInput);

makeDnD([source, target]);
sortCards();

function makeDnD(zones) {
  let currentDrag;

  zones.forEach(zone => {
      zone.addEventListener('dragstart', (e) => {
          currentDrag = { source: zone, node: e.target };
      });

      zone.addEventListener('dragover', (e) => {
          e.preventDefault();

      });

      zone.addEventListener('drop', (e) => {
          if (currentDrag) {
              e.preventDefault();
              if (currentDrag.source !== zone) {
                  if (e.target.classList.contains('friends-card')) {
                      zone.insertBefore(currentDrag.node, e.target.nextElementSibling);
                  } else {
                      zone.insertBefore(currentDrag.node, zone.lastElementChild);
                  }

                  if (currentDrag.node.parentNode.classList.contains('friends-catalog__list--filter')) {
                    const icon = currentDrag.node.querySelector('.friend-card__control');
                    icon.classList.remove('friend-card__control--add');  
                    icon.classList.add('friend-card__control--remove');
                  } else {
                    const icon = currentDrag.node.querySelector('.friend-card__control');
                    icon.classList.add('friend-card__control--add');  
                    icon.classList.remove('friend-card__control--remove');
                  }
              }
              currentDrag = null;
          }
      });
  })
}

function sortCards(){
  const controls = document.querySelectorAll('.friend-card__control');
  for (const btn of controls) {
    btn.addEventListener('click',()=>{
      if (btn.classList.contains('friend-card__control--add')) {
        btn.classList.remove('friend-card__control--add');  
        btn.classList.add('friend-card__control--remove');
      } else {
        btn.classList.add('friend-card__control--add');  
        btn.classList.remove('friend-card__control--remove');
      }
      const currentZome = btn.parentNode.parentNode;
      if (currentZome.classList.contains('friends-catalog__list--filter')) {
        source.insertBefore(btn.parentNode, source.lastElementChild);
      } else {
        target.insertBefore(btn.parentNode, target.lastElementChild);
      }
    });
  }
}

function searchEngine(list,inputValue){
  for (const card of list.children ) {
    let firstName = card.getAttribute('data-firstname').toLowerCase();
    let lastName = card.getAttribute('data-lastname').toLowerCase();
    if (firstName.indexOf(inputValue) > -1  || lastName.indexOf(inputValue) > -1) {
      card.classList.remove('hide');
    } else{
      card.classList.add('hide');
    }
  }
}

function searchFriend(input){
  input.addEventListener('input',(e)=>{
    let searchValue = input.value.toLowerCase();
    if(input.id == friendSeacrhInput.id){
      searchEngine(source,searchValue);
    } else if(input.id == filterSeacrhInput.id){
      searchEngine(target,searchValue);
    }
  });
}
