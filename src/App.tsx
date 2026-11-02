import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FavoritesModal } from './components/FavoritesModal';
import { HomePage } from './pages/HomePage';
import { OffersPage } from './pages/OffersPage';
import { CategoryPage } from './pages/CategoryPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { BrandsPage } from './pages/BrandsPage';
import { BuyingGuidesPage } from './pages/BuyingGuidesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { AffiliateDisclosurePage } from './pages/AffiliateDisclosurePage';
import { Product, CategoryItem, BrandItem, BuyingGuide, PageRoute } from './types';

export const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<CategoryItem[]>([]);
  const [brands, setBrands] = useState<BrandItem[]>([]);
  const [guides, setGuides] = useState<BuyingGuide[]>([]);
  const [loading, setLoading] = useState(true);

  // Routing state
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [routeParam, setRouteParam] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Search state
  const [searchQuery, setSearchQuery] = useState('');

  // Favorites state
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('welligtontech_favs');
      return saved ? JSON.parse(saved) : ['wt-01', 'wt-02'];
    } catch {
      return ['wt-01', 'wt-02'];
    }
  });
  const [favoritesModalOpen, setFavoritesModalOpen] = useState(false);

  // Load products data from public/data/products.json
  useEffect(() => {
    fetch('/data/products.json')
      .then((res) => {
        if (!res.ok) throw new Error('Falha ao carregar public/data/products.json');
        return res.json();
      })
      .then((data) => {
        setProducts(data.products || []);
        setCategories(data.categories || []);
        setBrands(data.brands || []);
        setGuides(data.guides || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Erro ao buscar dados:', err);
        setLoading(false);
      });
  }, []);

  // Save favorites to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('welligtontech_favs', JSON.stringify(favorites));
    } catch (e) {
      console.warn('LocalStorage indisponível');
    }
  }, [favorites]);

  // Dynamic SEO meta tags and titles
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    let title = "WelligtonTech - Tecnologia boa, pelo preço certo.";
    let desc = "Portal de ofertas, tecnologia, hardware e recomendações de produtos de informática com comparador e assistente de setups.";

    if (currentRoute === 'ofertas') {
      title = "Ofertas de Hardware e Tecnologia | WelligtonTech";
      desc = "Confira as melhores ofertas de placas de vídeo, processadores, SSDs e monitores com desconto no PIX.";
    } else if (currentRoute === 'categoria' && routeParam) {
      const cat = categories.find((c) => c.id === routeParam);
      if (cat) {
        title = `${cat.name} em Promoção | WelligtonTech`;
        desc = `Ofertas recomendadas e menores preços de ${cat.name} com links oficiais verificados.`;
      }
    } else if (currentRoute === 'produto' && selectedProduct) {
      title = `${selectedProduct.name} | WelligtonTech`;
      desc = selectedProduct.description;
    } else if (currentRoute === 'marcas') {
      title = "Marcas Recomendadas de Hardware | WelligtonTech";
      desc = "Fabricantes consagradas com garantia nacional e assistência técnica oficial no Brasil.";
    } else if (currentRoute === 'guias') {
      title = "Guias de Compra & Comparativos de Hardware | WelligtonTech";
      desc = "Artigos técnicos e análises de custo por frame para você acertar no seu upgrade.";
    } else if (currentRoute === 'sobre') {
      title = "Sobre o WelligtonTech | Tecnologia boa, pelo preço certo.";
      desc = "Nossa história, independência editorial e metodologia de curadoria de ofertas.";
    } else if (currentRoute === 'contato') {
      title = "Contato & Parcerias | WelligtonTech";
      desc = "Fale com nossa equipe técnica para dúvidas sobre hardware ou parcerias comerciais.";
    } else if (currentRoute === 'afiliados') {
      title = "Transparência & Divulgação de Afiliados | WelligtonTech";
      desc = "Conheça como mantemos o portal gratuito através de links patrocinados com rel=sponsored.";
    } else if (currentRoute === 'privacidade') {
      title = "Política de Privacidade LGPD | WelligtonTech";
      desc = "Nossa conformidade integral com a Lei Geral de Proteção de Dados Pessoais.";
    }

    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', desc);
    }
  }, [currentRoute, routeParam, selectedProduct, categories]);

  const navigateTo = (route: PageRoute, param?: string) => {
    setCurrentRoute(route);
    if (param) setRouteParam(param);
  };

  const handleToggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSelectProduct = (p: Product) => {
    setSelectedProduct(p);
    setCurrentRoute('produto');
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setCurrentRoute('ofertas');
    }
  };

  const favoriteProducts = products.filter((p) => favorites.includes(p.id));

  if (loading) {
    return (
      <div className="min-h-screen bg-[#070d1e] text-white flex flex-col items-center justify-center space-y-4">
        <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-sm font-bold text-slate-300">Carregando portal WelligtonTech...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070d1e] text-slate-100 flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      {/* Header */}
      <Header
        currentRoute={currentRoute}
        onNavigate={navigateTo}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearchSubmit={handleSearchSubmit}
        favoritesCount={favorites.length}
        onOpenFavorites={() => setFavoritesModalOpen(true)}
      />

      {/* Main Pages */}
      <main className="flex-1 w-full">
        {currentRoute === 'home' && (
          <HomePage
            categories={categories}
            brands={brands}
            products={products}
            guides={guides}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onSelectProduct={handleSelectProduct}
            onSelectCategory={(catId) => navigateTo('categoria', catId)}
            onSelectBrand={(brandName) => {
              setSearchQuery(brandName);
              navigateTo('ofertas');
            }}
            onSelectGuide={(g) => navigateTo('guias')}
            onNavigate={navigateTo}
          />
        )}

        {currentRoute === 'ofertas' && (
          <OffersPage
            products={products}
            categories={categories}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onSelectProduct={handleSelectProduct}
            initialSearch={searchQuery}
            initialCategory="todos"
          />
        )}

        {currentRoute === 'categoria' && (
          <CategoryPage
            categoryId={routeParam || 'todos'}
            categories={categories}
            products={products}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onSelectProduct={handleSelectProduct}
            onNavigate={navigateTo}
          />
        )}

        {currentRoute === 'produto' && selectedProduct && (
          <ProductDetailPage
            product={selectedProduct}
            isFavorite={favorites.includes(selectedProduct.id)}
            onToggleFavorite={handleToggleFavorite}
            onBack={() => navigateTo('ofertas')}
            onNavigate={navigateTo}
          />
        )}

        {currentRoute === 'marcas' && (
          <BrandsPage
            brands={brands}
            products={products}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onSelectProduct={handleSelectProduct}
            onNavigate={navigateTo}
          />
        )}

        {currentRoute === 'guias' && (
          <BuyingGuidesPage
            guides={guides}
            onNavigate={navigateTo}
          />
        )}

        {currentRoute === 'sobre' && <AboutPage onNavigate={navigateTo} />}

        {currentRoute === 'contato' && <ContactPage />}

        {currentRoute === 'privacidade' && <PrivacyPolicyPage />}

        {currentRoute === 'afiliados' && <AffiliateDisclosurePage />}
      </main>

      {/* Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Favorites Modal */}
      <FavoritesModal
        isOpen={favoritesModalOpen}
        onClose={() => setFavoritesModalOpen(false)}
        favorites={favoriteProducts}
        onRemoveFavorite={handleToggleFavorite}
        onSelectProduct={handleSelectProduct}
      />
    </div>
  );
};

export default App;
