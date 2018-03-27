import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable()
export class DataService {
  private baseUrl = environment.baseUrl;

  constructor(public http: HttpClient) {}

  getTwitterData(search: string, count: number) {
    let params = new HttpParams();
    params = params.set("search", search);
    params = params.set("count", count.toString());
    console.log("this.baseUrl", this.baseUrl);
    console.log(
      "`${this.baseUrl}/getTwitterData`",
      `${this.baseUrl}/getTwitterData`
    );
    return this.http.get(`${this.baseUrl}/getTwitterData`, { params: params });
  }
}
