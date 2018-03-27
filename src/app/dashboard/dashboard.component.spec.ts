import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DashboardComponent } from "./dashboard.component";
import { DataService } from "../../providers/data/data.service";
import { HttpClientModule } from "@angular/common/http";
describe("DashboardComponent", () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [DashboardComponent],
        providers: [DataService],
        imports: [HttpClientModule]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component instanceof DashboardComponent);
  });
});
