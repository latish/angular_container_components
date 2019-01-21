import { HeroDetailContainerComponent  } from "./hero-detail.container.component";
import { Hero } from "../hero";
import { of } from "rxjs";
describe('Hero Detail Component', ()=>{
  let component, routeMock, paramMock, heroServiceMock, locationMock;
  beforeEach(()=>{
    paramMock = jasmine.createSpyObj('paramMap', ['get']);
    routeMock =  {snapshot:{paramMap:paramMock}};
    heroServiceMock = jasmine.createSpyObj('heroService', ['getHero', 'updateHero']);
    locationMock = jasmine.createSpyObj('location', ['back']);
  })

  it('should fetch hero details on creation', ()=>{
    const HERO_ID = 42;
    paramMock.get.and.returnValue(HERO_ID);

    component = new HeroDetailContainerComponent(routeMock, heroServiceMock, locationMock);

    expect(heroServiceMock.getHero).toHaveBeenCalledWith(HERO_ID);
  })

  it('should save hero details', ()=>{
    const hero:Hero = {
      id: 42,
      name: 'Arthur Dent'
    };
    heroServiceMock.updateHero.and.returnValue(of({}));

    component = new HeroDetailContainerComponent(routeMock, heroServiceMock, locationMock);
    component.save(hero);

    expect(heroServiceMock.updateHero).toHaveBeenCalledWith(hero);
  })

  it('should navigate back on saving hero details', ()=>{
    const hero:Hero = {
      id: 42,
      name: 'Arthur Dent'
    };
    heroServiceMock.updateHero.and.returnValue(of({}));

    component = new HeroDetailContainerComponent(routeMock, heroServiceMock, locationMock);
    component.save(hero);

    expect(locationMock.back).toHaveBeenCalled();
  })
})
