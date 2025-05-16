import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaCorPipe } from '../../pipes/categoria-cor.pipe'; // ajuste o caminho se necessário

interface Prato {
  nome: string;
  preco: number;
  categoria: string;
  disponivel: boolean;
}

@Component({
  selector: 'app-cardapio',
  standalone: true,
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.scss'],
  imports: [CommonModule, CategoriaCorPipe]
})
export class CardapioComponent {

  pratos: Prato[] = [
    { nome: 'Bruschetta', preco: 18.5, categoria: 'Entrada', disponivel: true },
    { nome: 'Ceviche de Tilápia', preco: 24, categoria: 'Entrada', disponivel: true },
    { nome: 'Dadinho de Tapioca', preco: 16, categoria: 'Entrada', disponivel: false },
    { nome: 'Spaghetti Carbonara', preco: 42, categoria: 'Principal', disponivel: true },
    { nome: 'Risoto de Cogumelos', preco: 48.5, categoria: 'Principal', disponivel: false },
    { nome: 'Frango Grelhado com Legumes', preco: 36, categoria: 'Principal', disponivel: true },
    { nome: 'Picanha na Chapa', preco: 65.9, categoria: 'Principal', disponivel: true },
    { nome: 'Lasanha à Bolonhesa', preco: 39, categoria: 'Principal', disponivel: false },
    { nome: 'Tiramisu', preco: 22.9, categoria: 'Sobremesa', disponivel: false },
    { nome: 'Pudim de Leite', preco: 12.5, categoria: 'Sobremesa', disponivel: true },
    { nome: 'Petit Gâteau', preco: 18, categoria: 'Sobremesa', disponivel: true },
    { nome: 'Mousse de Maracujá', preco: 14, categoria: 'Sobremesa', disponivel: false },
    { nome: 'Refrigerante', preco: 6, categoria: 'Bebida', disponivel: true },
    { nome: 'Suco Natural', preco: 8.5, categoria: 'Bebida', disponivel: true },
    { nome: 'Água com Gás', preco: 4.5, categoria: 'Bebida', disponivel: true },
    { nome: 'Vinho da Casa', preco: 32, categoria: 'Bebida', disponivel: false },
    { nome: 'Cerveja Artesanal', preco: 15, categoria: 'Bebida', disponivel: true }
  ];

}