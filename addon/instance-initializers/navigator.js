export function initialize(appInstance) {
  if(window && window.google){
    appInstance.register('navigator:main', window.navigator, { instantiate: false });
  } else {
    console.debug('[warning] ember-place-autocomplete: window.google not found on initialize, navigator:main registration will be re-attempted on first use.')
  }
}

export default {
  name: 'register-navigator',
  initialize
};
