import React from 'react';
import { CategoryBar } from '../components/CategoryBar';
import { HeroSection } from '../components/HeroSection';
import { EsquentaBanner } from '../components/EsquentaBanner';
import { MostSearchedSection } from '../components/MostSearchedSection';
import { BestSellersSection } from '../components/BestSellersSection';
import { RecentlyAddedSection } from '../components/RecentlyAddedSection';
import { RecommendedBrandsSection } from '../components/RecommendedBrandsSection';
import { BuyingGuidesSection } from '../components/BuyingGuidesSection';
import { WhatsAppSection } from '../components/WhatsAppSection';
import { ValuePropsRibbon } from '../components/ValuePropsRibbon';
import { Product, CategoryItem, BrandItem, BuyingGuide, PageRoute } from '../types';

interface HomePageProps {
  categories: CategoryItem[];
  brands: BrandItem[];
  products: Product[];
  guides: BuyingGuide[];
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  onSelectProduct: (p: Product) => void;
  onSelectCategory: (catId: string) => void;
  onSelectBrand: (brandName: string) => void;
  onSelectGuide: (g: BuyingGuide) => void;
  onNavigate: (route: PageRoute, param?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  categories,
  brands,
  products,
  guides,
  favorites,
  onToggleFavorite,
  onSelectProduct,
  onSelectCategory,
  onSelectBrand,
  onSelectGuide,
  onNavigate
}) => {
  return (
    <div className="space-y-0">
      {/* 1. White Horizontal Category Navigation Bar */}
      <CategoryBar
        categories={categories}
        selectedCategory={null}
        onSelectCategory={(catId) => onNavigate('categoria', catId)}
      />

      {/* 2. Hero Section: Left Slider + Right Stacked Cards */}
      <HeroSection onNavigate={onNavigate} />

      {/* 3. Orange ESQUENTA DE OFERTAS Container */}
      <EsquentaBanner
        products={products}
        favorites={favorites}
        onToggleFavorite={onToggleFavorite}
        onSelectProduct={onSelectProduct}
        onNavigate={onNavigate}
      />

      {/* 4. Mais Procurados Section with Category Pills */}
      <MostSearchedSection
        products={products}
        favorites={favorites}
        onToggleFavorite={onToggleFavorite}
        onSelectProduct={onSelectProduct}
      />

      {/* 5. Mais Vendidos Section */}
      <BestSellersSection
        products={products}
        favorites={favorites}
        onToggleFavorite={onToggleFavorite}
        onSelectProduct={onSelectProduct}
      />

      {/* 6. Acabaram de Chegar Section */}
      <RecentlyAddedSection
        products={products}
        favorites={favorites}
        onToggleFavorite={onToggleFavorite}
        onSelectProduct={onSelectProduct}
      />

      {/* 7. Marcas Recomendadas Section (12 Brands) */}
      <RecommendedBrandsSection
        brands={brands}
        onSelectBrand={onSelectBrand}
        onNavigate={onNavigate}
      />

      {/* 8. Guias de Compra & Comparativos Section (4 Cards) */}
      <BuyingGuidesSection
        guides={guides}
        onSelectGuide={onSelectGuide}
        onNavigate={onNavigate}
      />

      {/* 9. WhatsApp / Telegram VIP Community Section */}
      <WhatsAppSection />

      {/* 10. Value Proposition Ribbon (4 Badges) */}
      <ValuePropsRibbon />
    </div>
  );
};
