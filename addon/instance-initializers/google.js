export function initialize(appInstance) {
  if(window && window.google){
    appInstance.register('google:main', window.google, { instantiate: false });
  } else {
    console.debug('[warning] ember-place-autocomplete: window.google not found on initialize, google:main registration will be re-attempted on first use.')
  }
}

export default {
  name: 'register-google',
  initialize
};
