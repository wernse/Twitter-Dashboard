import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TweetDisplayComponent } from "./tweet-display/tweet-display.component";
import { MatCardModule } from "@angular/material/card";

@NgModule({
  imports: [CommonModule, BrowserAnimationsModule, MatCardModule],
  declarations: [TweetDisplayComponent],
  exports: [TweetDisplayComponent]
})
export class DataDisplayModule {}
