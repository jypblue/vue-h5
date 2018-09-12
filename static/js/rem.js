(function (root) {
  var docEl = document.documentElement,
      timer = null,
      width, last;

  function changeRem () {
      width = docEl.getBoundingClientRect().width;
      width = width > 1024 ? 640 : width;
      if (last === width) { return; }
      last = width;
      root.rem = width / 3.75;
      if (/ZTE U930_TD/.test(navigator.userAgent)) {
          root.rem = root.rem * 1.13;
      }
      docEl.style.fontSize = root.rem + 'px';
  }

  changeRem();

  root.addEventListener('resize', function () {
      clearTimeout(timer);
      timer = setTimeout(changeRem, 100);
  });

  root.addEventListener('orientationchange', function () {
      clearTimeout(timer);
      timer = setTimeout(changeRem, 100);
  });
})(window, undefined);