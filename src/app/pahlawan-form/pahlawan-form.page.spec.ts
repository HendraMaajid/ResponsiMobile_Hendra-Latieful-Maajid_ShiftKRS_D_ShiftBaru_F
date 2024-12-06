import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PahlawanFormPage } from './pahlawan-form.page';

describe('PahlawanFormPage', () => {
  let component: PahlawanFormPage;
  let fixture: ComponentFixture<PahlawanFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PahlawanFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
