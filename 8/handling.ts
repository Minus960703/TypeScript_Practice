{class TimeoutError extends Error {}
class NetworkClient {
  tryConnet(): void {
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