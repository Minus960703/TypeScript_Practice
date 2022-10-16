{
  //Union
  type SuccessState = {
    result: 'success',
    response : {
      body : string
    };
  }
  type FailState = {
    result: 'fail';
    reason : string;
  }
  type LoginState = SuccessState | FailState;
  function login(): LoginState {
    return {
      result: 'success',
      response : {body: 'logged in!'},
    }
  }
  
  // printLoginState(state) 
  // success -> 😃
  // fail -> 🥲

  function printLoginState(state: LoginState): void {
    if('response' in state) {
      console.log(`😃 ${state.response.body}`);
    } else {
      console.log(`🥲 ${state.reason}`)
    }
  }

  function printLoginState2(state: LoginState): void {
    if(state.result === 'success') {
      console.log(`😃 ${state.response.body}`);
    } else {
      console.log(`🥲 ${state.reason}`)
    }
    state.result === 'success' 
      ? console.log(`😃 ${state.response.body}`)
      : console.log(`🥲 ${state.reason}`)
  }
}