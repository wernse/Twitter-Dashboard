import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";

@Component({
  selector: "app-tweet-display",
  templateUrl: "./tweet-display.component.html",
  styleUrls: ["./tweet-display.component.scss"]
})
export class TweetDisplayComponent implements OnInit {
  @Input() public tweet;
  constructor() {}

  ngOnInit() {}
}
