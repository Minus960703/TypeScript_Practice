{
  //Union Types: | orμ λγ
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
  // success -> π
  // fail -> π₯²

  function printLoginState(state: LoginState): void {
    if('response' in state) {
      console.log(`π ${state.response.body}`);
    } else {
      console.log(`π₯² ${state.reason}`)
    }
  }

  function printLoginState2(state: LoginState): void {
    if(state.result === 'success') {
      console.log(`π ${state.response.body}`);
    } else {
      console.log(`π₯² ${state.reason}`)
    }
    state.result === 'success' 
      ? console.log(`π ${state.response.body}`)
      : console.log(`π₯² ${state.reason}`)
  }
}