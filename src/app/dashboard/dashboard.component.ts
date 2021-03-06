import { Component, OnInit } from "@angular/core";
import { DataService } from "../../providers/data/data.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  public search = "bitcoin";
  public count = 10;
  public tweets;
  public error;

  constructor(public dataService: DataService) {}

  ngOnInit() {
    this.getTwitterData(this.search, this.count);
  }

  getTwitterData(search: string, count: number) {
    this.dataService.getTwitterData(search, count).subscribe(
      tweets => {
        this.tweets = tweets;
      },
      error => {
        this.error = error.message;
      }
    );
  }
}
