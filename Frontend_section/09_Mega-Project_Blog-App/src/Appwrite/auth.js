import { Client, Account, ID } from "appwrite";
import config from "../config/config.js";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, name, password }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        name,
        password
      );

      if (userAccount) {
        this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  async login({ email, password }) {
    try {
      await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw new Error(error);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log(`Appwrite service :: getCurrentUser :: error ${error}`);
    }
    return null;
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log(`Appwrite service :: logout :: error ${error}`);
    }
  }
}

const authService = new AuthService();
export default authService;
