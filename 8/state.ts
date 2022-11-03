{
  type SuccessState = {
    result: 'success';
  };

  type NetworkErrorState = {
    result: 'fail';
    reason: 'offline' | 'down' | 'timeout';
  };
  
  type ResultState = SuccessState |  NetworkErrorState;
  class NetworkClient {
    tryConnet(): ResultState {
      throw new Error('no network!');
    }
  }
  class UserService {
    constructor(private client: NetworkClient) {
    }

    login() {
      this.client.tryConnet();  
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      try {
        this.userService.login();
      } catch(error) {
        //show dialog to user
      }
      
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  service.login();

}
