import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PahlawanListPage } from './pahlawan-list.page';

describe('PahlawanListPage', () => {
  let component: PahlawanListPage;
  let fixture: ComponentFixture<PahlawanListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PahlawanListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
