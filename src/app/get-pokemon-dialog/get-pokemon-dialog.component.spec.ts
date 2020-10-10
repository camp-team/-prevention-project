import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPokemonDialogComponent } from './get-pokemon-dialog.component';

describe('GetPokemonDialogComponent', () => {
  let component: GetPokemonDialogComponent;
  let fixture: ComponentFixture<GetPokemonDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetPokemonDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPokemonDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
