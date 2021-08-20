import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([{path:'pokedex', component:HomeComponent}])
      ],
      declarations: [
        AppComponent
      ],
      providers:[],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


  it('should ngOnInit', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.ngOnInit()
    expect(app.ngOnInit).toBeTruthy();
  });

  it(`should have as title 'Pokemons'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Pokemons');
  });

});
