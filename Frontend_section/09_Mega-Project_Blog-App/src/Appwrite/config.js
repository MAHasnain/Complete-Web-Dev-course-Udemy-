import { Client, ID, Databases, Storage, Query } from "appwrite";
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
      return await this.databases.updateDocument(
        config.appwriteProjectId,
        config.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log(`Appwrite service :: deletePost :: error`, error);
    }
    return false;
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        config.appwriteDBId,
        config.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log(`Appwrite service :: getPost :: error`, error);
    }
  }

  async getPosts(queries = [(Query.equal = "active")]) {
    try {
      return await this.databases.listDocuments(
        config.appwriteDBId,
        config.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log(`Appwrite service :: getPosts :: error`, error);
    }
  }

  // file methods
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(config.appwriteBucketId, ID.unique(), file);
    } catch (error) {
      console.log(`Appwrite service :: uploadFile :: error`, error);
    }
    return false;
  }

  async deleteFile(fileId) {
    try {
      await this.deleteFile(
        config.appwriteBucketId,
        fileId
      )
      return true 
    } catch (error) {
      console.log(`Appwrite service :: deleteFile :: error`, error);
    }
    return false
  }

  geyFilePreview (fileId){
    return this.bucket.getFilePreview(
      config.appwriteBucketId,
      fileId
    )
  }
}

const service = new Service();
export default service;
