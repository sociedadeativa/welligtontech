import React from 'react';
import { 
  Laptop, 
  Monitor, 
  Cpu, 
  Grid, 
  Tv, 
  HardDrive, 
  Database, 
  MonitorCheck, 
  Gamepad2, 
  Mouse, 
  Smartphone, 
  Headphones, 
  Wrench 
} from 'lucide-react';
import { CategoryItem } from '../types';

interface CategoryBarProps {
  categories: CategoryItem[];
  selectedCategory: string | null;
  onSelectCategory: (categoryId: string) => void;
}

export const CategoryBar: React.FC<CategoryBarProps> = ({
  categories,
  selectedCategory,
  onSelectCategory
}) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'notebooks': return Laptop;
      case 'pcs': return Monitor;
      case 'processadores': return Cpu;
      case 'placas-mae': return Grid;
      case 'placas-video': return Tv;
      case 'memoria-ram': return HardDrive;
      case 'ssd': return Database;
      case 'monitores': return MonitorCheck;
      case 'gaming': return Gamepad2;
      case 'perifericos': return Mouse;
      case 'smartphones': return Smartphone;
      case 'acessorios': return Headphones;
      case 'monte-seu-pc': return Wrench;
      default: return Cpu;
    }
  };

  return (
    <div className="bg-white border-b border-slate-200 py-3 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 overflow-x-auto no-scrollbar">
          {categories.map((cat) => {
            const Icon = getIcon(cat.id);
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex flex-col items-center gap-1.5 min-w-[72px] sm:min-w-[80px] py-1 transition-all group cursor-pointer ${
                  isSelected ? 'scale-105' : 'hover:-translate-y-0.5'
                }`}
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all ${
                  isSelected
                    ? 'bg-orange-500 text-white shadow-md shadow-orange-500/30'
                    : 'bg-slate-100 text-slate-700 group-hover:bg-orange-50 group-hover:text-orange-600 border border-slate-200/80'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className={`text-[11px] font-bold text-center leading-tight whitespace-nowrap ${
                  isSelected ? 'text-orange-600' : 'text-slate-700 group-hover:text-orange-600'
                }`}>
                  {cat.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
