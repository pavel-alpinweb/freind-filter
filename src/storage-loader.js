import renderFn from './templates/template.hbs';
const source = document.querySelector('.friends-catalog__list--friends');
const target = document.querySelector('.friends-catalog__list--filter');
export function storageLoader(){

    function getObject(key){
        let returnObj = JSON.parse(localStorage.getItem(key));
        return returnObj;
    }

    function render(obj,container){
        const html = renderFn(obj);
        container.innerHTML = html;
    }

    render(getObject("freinds"),source);
    render(getObject("filter"),target);
}