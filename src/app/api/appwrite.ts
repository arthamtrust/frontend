import { Client, Databases } from "appwrite";
import { environment } from "src/environments/environment";

export class Appwrite {
  private static sdk: Client | null;

  static provider() {
    if (this.sdk) return this.sdk;
    let client = new Client();

    client
      .setEndpoint(environment.APP_ENDPOINT)
      .setProject(environment.APP_PROJECT)
      .setLocale("en-US");
    this.sdk = client;
    return this.sdk;
  }

  static database() {
    return new Databases(Appwrite.provider());
  }
}
