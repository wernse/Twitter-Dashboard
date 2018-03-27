import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MatCardModule } from "@angular/material/card";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TweetDisplayComponent } from "./tweet-display.component";

describe("TweetDisplayComponent", () => {
  let component: TweetDisplayComponent;
  let fixture: ComponentFixture<TweetDisplayComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [TweetDisplayComponent],
        imports: [MatCardModule, BrowserAnimationsModule]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    let mockData = {
      text: "asd"
    };
    component.tweet = mockData;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
