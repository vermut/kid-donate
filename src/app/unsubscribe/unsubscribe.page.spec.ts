import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UnsubscribePage} from './unsubscribe.page';

describe('UnsubscribePage', () => {
    let component: UnsubscribePage;
    let fixture: ComponentFixture<UnsubscribePage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UnsubscribePage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UnsubscribePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
