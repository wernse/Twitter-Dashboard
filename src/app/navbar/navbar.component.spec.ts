import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NavbarComponent } from "./navbar.component";

describe("NavbarComponent", () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [NavbarComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component instanceof NavbarComponent);
  });

  it("should display a header", () => {
    const componentEl = fixture.debugElement.nativeElement;
    const firstButton = componentEl.querySelector(".nav_text");
    expect(firstButton.textContent).toEqual("Cryto Tracking Dashboard");
  });
});
