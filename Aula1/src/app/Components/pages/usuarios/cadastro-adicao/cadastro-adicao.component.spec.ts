import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAdicaoComponent } from './cadastro-adicao.component';

describe('CadastroAdicaoComponent', () => {
  let component: CadastroAdicaoComponent;
  let fixture: ComponentFixture<CadastroAdicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroAdicaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroAdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
