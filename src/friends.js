import './styles/styles.scss';

// const renderFn = Handlebars.compile(template)
// const html = render(array)
// container.innerHTML = html;


const source = document.querySelector('.friends-catalog__list--friends');
const target = document.querySelector('.friends-catalog__list--filter');

makeDnD([source, target]);

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
              currentDrag.node.style.position = 'static';
              if (currentDrag.source !== zone) {
                  if (e.target.classList.contains('friends-card')) {
                      zone.insertBefore(currentDrag.node, e.target.nextElementSibling);
                  } else {
                      zone.insertBefore(currentDrag.node, zone.lastElementChild);
                  }
              }

              currentDrag = null;
          }
      });
  })
}

