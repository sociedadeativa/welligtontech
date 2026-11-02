export type PageRoute = 
  | 'home'
  | 'ofertas'
  | 'categoria'
  | 'produto'
  | 'marcas'
  | 'guias'
  | 'sobre'
  | 'contato'
  | 'privacidade'
  | 'afiliados'
  | 'servicos'
  | 'servico-office';

export interface CategoryItem {
  id: string;
  name: string;
  icon: string;
}

export interface BrandItem {
  id: string;
  name: string;
  categoryLabel: string;
  offersCount: number;
}

export interface BuyingGuide {
  id: string;
  tag: string;
  readTime: string;
  title: string;
  summary: string;
  category: string;
  date: string;
  image: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: 'office' | 'windows' | 'troubleshoot' | 'optimization';
  includedItems: string[];
  requirements: string[];
  whatsappMessage: string;
  isSpecialHighlight?: boolean;
  dedicatedRoute?: PageRoute;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  categoryLabel: string;
  brand: string;
  store: string;
  storeDotColor?: string;
  currentPrice: number;
  previousPrice: number;
  discountPercentage: number;
  installments: {
    count: number;
    value: number;
  };
  image: string;
  affiliateUrl: string;
  rating: number;
  reviewCount: number;
  badge: string;
  badgeColor?: string;
  remainingUnits?: number;
  specs: Record<string, string>;
  description: string;
  isEsquenta?: boolean;
  isMostSearched?: boolean;
  isBestSeller?: boolean;
  isRecentlyAdded?: boolean;
}
