/*
 * Blog tab
 * --------
 * On the homepage, the "Blog" navigation item opens the blog list as an
 * in-page tab instead of loading a separate page. Selecting any other
 * navigation item restores the default (scrolling) view.
 */
(function () {
  'use strict';

  function init() {
    var content = document.querySelector('.page__content');
    var blogView = document.getElementById('blog');

    // Only run on the page that actually contains the blog panel.
    if (!content || !blogView || !blogView.classList.contains('blog-view')) return;

    // Everything in the page content except the blog panel.
    var homeSections = Array.prototype.filter.call(content.children, function (el) {
      return el !== blogView;
    });

    function setView(isBlog, syncHash) {
      homeSections.forEach(function (el) {
        el.style.display = isBlog ? 'none' : '';
      });
      blogView.hidden = !isBlog;
      document.documentElement.classList.toggle('blog-active', isBlog);

      if (syncHash === false) return;

      try {
        if (isBlog) {
          window.history.replaceState(null, '', '#blog');
        } else if (window.location.hash === '#blog') {
          window.history.replaceState(
            null, '', window.location.pathname + window.location.search
          );
        }
      } catch (err) {
        /* history API unavailable - ignore */
      }
    }

    // Restore the tab state when the page is opened with #blog in the URL.
    setView(window.location.hash === '#blog', false);

    // Capture phase: restore the home view *before* the smooth-scroll handler runs.
    document.addEventListener('click', function (event) {
      var link = event.target && event.target.closest ? event.target.closest('a') : null;
      if (!link) return;

      var href = link.getAttribute('href') || '';

      if (/#blog$/.test(href)) {
        event.preventDefault();
        setView(true);
        return;
      }

      // Any other in-page anchor returns to the default view.
      if (href.charAt(0) === '/' && href.indexOf('#') !== -1) {
        setView(false);
      }
    }, true);

    // Keep the view in sync if the hash is changed without a full page load
    // (e.g. editing the URL or using browser history).
    window.addEventListener('hashchange', function () {
      setView(window.location.hash === '#blog', false);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
