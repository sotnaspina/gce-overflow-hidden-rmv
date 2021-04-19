
let chkReadyState = setInterval(() => {
  if (document.readyState === 'complete') {
      const overflow = document.body.style.overflow
      document.body.style.overflow = '';
      if(overflow !== '') clearInterval(chkReadyState);
  }
}, 100);
