import app from 'flarum/forum/app';

app.initializers.add('freeflarum/flarum-arevo-theme', () => {
  if (window.innerWidth > 768) {
    var newDiscussionElement = document.querySelector('.item-newDiscussion');
    newDiscussionElement.classList.add('new__item-newDiscussion');

    var searchElement = document.querySelector('#header-secondary .item-search');

    searchElement.parentNode.insertBefore(newDiscussionElement, searchElement.nextSibling);
  }
});
