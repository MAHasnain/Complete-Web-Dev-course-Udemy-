import { Client, ID, Databases, Storage } from "appwrite";
import config from "../config/config";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  async createPost({ title, slug, content, userId, status, featuredImage }) {
    try {
      return await this.databases.createDocument(
        config.appwriteProjectId,
        config.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      throw new Error(error);
    }
  }

  async updatePost(slug, { title, content, status, featuredImage }) {
    try {
      return await this.databases.updateDocument(
        config.appwriteProjectId,
        config.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      throw new Error(error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.updateDocument(
        config.appwriteProjectId,
        config.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log(`Appwrite service :: deletePost :: error`, error);
    }
    return false;
  }
}
