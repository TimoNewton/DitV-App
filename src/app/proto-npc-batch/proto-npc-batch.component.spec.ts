import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtoNpcBatchComponent } from './proto-npc-batch.component';

describe('ProtoNpcBatchComponent', () => {
  let component: ProtoNpcBatchComponent;
  let fixture: ComponentFixture<ProtoNpcBatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtoNpcBatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtoNpcBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
