import { Component, computed, inject, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { GalleriaModule } from 'primeng/galleria';
import { LayoutService } from './services/layout.service';

import { Logo } from './components/svgs/logo'

@Component({
  selector: 'app-root',
  imports: [CommonModule, CardModule, ChipModule, GalleriaModule, Logo],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  layoutService: LayoutService = inject(LayoutService);

  isDarkMode = computed(() => this.layoutService.appState().darkMode);

  displayCustom = false;

  activeIndex: number = 0;

  images = model([
    {
      src: 'images/frente-1.jpeg',
      alt: 'Vista frente de la propiedad'
    },
    {
      src: 'images/dormitorio-1.jpeg',
      alt: 'Vista primer dormitorio de la propiedad'
    },
    {
      src: 'images/frente-2.jpeg',
      alt: 'Vista frente de la propiedad'
    },
    {
      src: 'images/dormitorio-1-2.jpeg',
      alt: 'Vista primer dormitorio de la propiedad'
    },
    {
      src: 'images/frente-3.jpeg',
      alt: 'Vista frente de la propiedad'
    },
    {
      src: 'images/dormitorio-2-3.jpeg',
      alt: 'Vista segundo dormitorio de la propiedad'
    },
    {
      src: 'images/dormitorio-3.jpeg',
      alt: 'Vista tercer dormitorio de la propiedad'
    },
    {
      src: 'images/dormitorio-2-1.jpeg',
      alt: 'Vista segundo dormitorio de la propiedad'
    },
    {
      src: 'images/dormitorio-2-2.jpeg',
      alt: 'Vista segundo dormitorio de la propiedad'
    },
    {
      src: 'images/cocina-1.jpeg',
      alt: 'Vista cocina de la propiedad'
    },
    {
      src: 'images/cocina-2.jpeg',
      alt: 'Vista cocina de la propiedad'
    },
    {
      src: 'images/bano-1.jpeg',
      alt: 'Vista baño de la propiedad'
    },
    {
      src: 'images/bano-2.jpeg',
      alt: 'Vista baño de la propiedad'
    },
    {
      src: 'images/patio-2.jpeg',
      alt: 'Vista patio de la propiedad'
    },
    {
      src: 'images/patio-3.jpeg',
      alt: 'Vista patio de la propiedad'
    },
    {
      src: 'images/cocina-3.jpeg',
      alt: 'Vista cocina de la propiedad'
    },
    {
      src: 'images/patio-1.jpeg',
      alt: 'Vista patio de la propiedad'
    },
    {
      src: 'images/patio-4.jpeg',
      alt: 'Vista patio de la propiedad'
    },
    {
      src: 'images/placa.jpeg',
      alt: 'Placa informativa de la venta de la propiedad'
    },
  ]);

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  toggleDarkMode() {
    this.layoutService.appState.update((state) => ({
      ...state,
      darkMode: !state.darkMode,
    }));
  }

  imageClick(index: number) {
    this.activeIndex = index;
    this.displayCustom = true;
  }
}
