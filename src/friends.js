import { consoleLogHelper, consoleLogHelper2 } from './utils';
import './styles/styles.scss';

// const renderFn = Handlebars.compile(template)
// const html = render(array)
// container.innerHTML = html;

import renderFn from './templates/template.hbs';

console.log('My project!');

consoleLogHelper();

consoleLogHelper2();

const container = document.querySelector('.container');

const array = [
  { id: 1, title: 'Test 1', arr: [1, 2, 3] },
  { id: 1, title: 'Test 2', arr: [11, 22, 33] },
  { id: 1, title: 'Test 3', arr: [1, 2, 3] },
  { id: 1, title: 'Test 4', arr: [2424, 242, 24] },
  { id: 1, title: 'Test 5', arr: [1, 2, 3] }
]
const leftListHtml = renderFn({ friends: array, isLeft: true });
const rightListHtml = renderFn({ friends: array, isLeft: false });

container.innerHTML = rightListHtml;

const init = () => {
  const map = new ymaps.Map('map', {
    center: [55.76, 37.64],
    zoom: 7,
    controls: []
  });

  map.events.add('click', e => {
    console.log('click');
    const coords = e.get('coords');
    console.log(coords);

    const placemark = new ymaps.Placemark(coords, {
      hintContent: 'Содержимое подсказки',
      baloonContent: 'Содержимое балуна'
    });

    map.geoObjects.add(placemark);
  })

  map.geoObjects.events.add('click', e => {
    console.log('Marker clicked!');
  })
}
ymaps.ready(init);