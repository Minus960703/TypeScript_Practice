{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  function printLoginState(state: ResourceLoadState) {
    switch(state.state) {
      case 'loading':
        console.log('loading...');
        break;
      case 'success' :
        console.log(`ð ${state.response.body}`);
        break;
      case 'fail' :
        console.log(`ðĪŠ ${state.reason}`);
        break;
      default:
        throw new Error(`unknown state ${state}`);
    }

  }

  printLoginState({ state: 'loading' }); // ð loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // ð loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // ðą no network
}
