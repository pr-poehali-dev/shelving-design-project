import { useState } from 'react';
import Icon from '@/components/ui/icon';

const SCALE = 130; // px на 1 метр
const ROOM_W = 2.4; // ширина, м
const ROOM_L = 4.0; // длина, м

type Item = {
  id: string;
  name: string;
  short: string;
  x: number; // м, от левого верхнего угла
  y: number;
  w: number; // м
  h: number;
  icon: string;
  fill: string;
  stroke: string;
  size: string;
  desc: string;
  photo: string;
};

const PH = {
  veg: 'https://cdn.poehali.dev/projects/24824893-ae83-469f-ba4a-0c4313d600eb/bucket/41af36cc-35c7-4431-a97d-393daabbd905.jpg',
  dry: 'https://cdn.poehali.dev/projects/24824893-ae83-469f-ba4a-0c4313d600eb/bucket/52084d41-ace7-4e60-933a-4923b0e2f60a.jpg',
  island: 'https://cdn.poehali.dev/projects/24824893-ae83-469f-ba4a-0c4313d600eb/bucket/482df9b7-36a6-4949-8cff-34ae8ae9164b.jpg',
  cash: 'https://cdn.poehali.dev/projects/24824893-ae83-469f-ba4a-0c4313d600eb/bucket/cfc8d7b0-b6eb-4b9c-9de8-36969bcab668.jpeg',
};

const items: Item[] = [
  {
    id: 'cash',
    name: 'Кассовый стол',
    short: 'КАССА',
    x: 0,
    y: 0,
    w: 1.0,
    h: 0.6,
    icon: 'Calculator',
    fill: '#1e293b',
    stroke: '#0f172a',
    size: '1000 × 600 мм, h 900 мм',
    desc: 'Расположен у входа справа от двери — продавец контролирует вход и торговый зал. Рабочее место с местом под весы и терминал.',
    photo: PH.cash,
  },
  {
    id: 'veg',
    name: 'Стеллаж овощи и фрукты',
    short: 'ОВОЩИ / ФРУКТЫ',
    x: 0,
    y: 0.9,
    w: 0.5,
    h: 2.0,
    icon: 'Apple',
    fill: '#15803d',
    stroke: '#14532d',
    size: '2000 × 500 мм, h 1600 мм',
    desc: 'Наклонные лотки в 4 яруса под углом 15° для удобного обзора товара. Бортики 80 мм. Влагостойкое покрытие.',
    photo: PH.veg,
  },
  {
    id: 'dry',
    name: 'Стеллаж сухофрукты',
    short: 'СУХОФРУКТЫ',
    x: 1.9,
    y: 0.9,
    w: 0.5,
    h: 2.0,
    icon: 'Wheat',
    fill: '#b45309',
    stroke: '#78350f',
    size: '2000 × 500 мм, h 1800 мм',
    desc: 'Секции-засыпки с мешковиной и мерными совками. Орехи и сухофрукты на развес, фасовка в крафт-пакеты.',
    photo: PH.dry,
  },
  {
    id: 'island',
    name: 'Торговый остров',
    short: 'ОСТРОВ',
    x: 0.7,
    y: 1.45,
    w: 1.0,
    h: 0.9,
    icon: 'LayoutGrid',
    fill: '#0369a1',
    stroke: '#075985',
    size: '1000 × 900 мм, h 1100 мм',
    desc: 'Двухъярусный остров с круговым доступом. Нижняя реечная полка + верхние секции-лотки. Покупатель обходит со всех сторон.',
    photo: PH.island,
  },
];

export default function Index() {
  const [active, setActive] = useState<string>('cash');
  const activeItem = items.find((i) => i.id === active)!;

  return (
    <div className="min-h-screen bg-[#f4f4f0] text-[#0f172a] font-sans">
      {/* Header */}
      <header className="border-b-2 border-[#0f172a] bg-[#f4f4f0] sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] tracking-[0.3em] text-[#64748b] uppercase mb-1">
              Технический проект · ТТ-01
            </p>
            <h1 className="font-display font-600 text-2xl md:text-4xl uppercase leading-none tracking-tight">
              Планировка торгового зала
            </h1>
          </div>
          <div className="hidden md:block text-right font-mono text-xs text-[#475569] leading-relaxed">
            <p>S = 9,6 м²</p>
            <p>2400 × 4000 мм</p>
            <p>М 1:25</p>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8 grid lg:grid-cols-[auto_1fr] gap-10 items-start">
        {/* PLAN */}
        <section className="flex flex-col items-center">
          <div className="font-mono text-[11px] tracking-[0.25em] text-[#64748b] uppercase mb-4 self-start">
            ↑ Вид сверху · план в масштабе
          </div>

          <div
            className="relative"
            style={{
              width: ROOM_W * SCALE + 80,
              height: ROOM_L * SCALE + 80,
            }}
          >
            {/* Top dimension line */}
            <div
              className="absolute flex items-center"
              style={{ left: 80, top: 24, width: ROOM_W * SCALE }}
            >
              <div className="flex-1 border-t border-[#0f172a] relative">
                <span className="absolute -top-[9px] left-0 text-[#0f172a]">▏</span>
                <span className="absolute -top-[9px] right-0 text-[#0f172a]">▕</span>
              </div>
              <span className="absolute left-1/2 -translate-x-1/2 -top-5 font-mono text-xs bg-[#f4f4f0] px-1">
                2400
              </span>
            </div>

            {/* Left dimension line */}
            <div
              className="absolute flex flex-col items-center"
              style={{ left: 24, top: 80, height: ROOM_L * SCALE }}
            >
              <div className="flex-1 border-l border-[#0f172a]" />
              <span
                className="absolute top-1/2 -translate-y-1/2 -left-1 font-mono text-xs bg-[#f4f4f0] px-1"
                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
              >
                4000
              </span>
            </div>

            {/* Room */}
            <div
              className="absolute border-2 border-[#0f172a] bg-white overflow-hidden shadow-[6px_6px_0_0_rgba(15,23,42,0.12)]"
              style={{
                left: 80,
                top: 80,
                width: ROOM_W * SCALE,
                height: ROOM_L * SCALE,
                backgroundImage:
                  'linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)',
                backgroundSize: `${SCALE / 5}px ${SCALE / 5}px`,
              }}
            >
              {/* Door */}
              <div
                className="absolute"
                style={{ left: ROOM_W * SCALE - 0.9 * SCALE, top: -2, width: 0.8 * SCALE, height: 4 }}
              >
                <div className="w-full h-full bg-[#f4f4f0]" />
                <div
                  className="absolute left-0 top-0 border-l border-b border-dashed border-[#94a3b8]"
                  style={{ width: 0.8 * SCALE, height: 0.8 * SCALE, borderBottomLeftRadius: '100%' }}
                />
                <span className="absolute -top-[3px] left-1 font-mono text-[8px] text-[#94a3b8] uppercase">вход</span>
              </div>

              {/* Items */}
              {items.map((it) => {
                const isActive = it.id === active;
                return (
                  <button
                    key={it.id}
                    onClick={() => setActive(it.id)}
                    className="absolute flex flex-col items-center justify-center text-center transition-all duration-200 group"
                    style={{
                      left: it.x * SCALE,
                      top: it.y * SCALE,
                      width: it.w * SCALE,
                      height: it.h * SCALE,
                      background: it.fill,
                      border: `2px solid ${it.stroke}`,
                      outline: isActive ? '3px solid #f97316' : 'none',
                      outlineOffset: 2,
                      zIndex: isActive ? 10 : 1,
                      boxShadow: isActive ? '0 6px 18px rgba(0,0,0,0.25)' : 'none',
                    }}
                  >
                    <Icon name={it.icon} size={it.w * SCALE > 70 ? 22 : 16} className="text-white/90 mb-0.5" />
                    <span className="font-mono text-white text-[8px] leading-tight tracking-wider px-1 uppercase">
                      {it.short}
                    </span>
                  </button>
                );
              })}

              {/* Customer flow arrows */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
                <defs>
                  <marker id="arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                    <path d="M0,0 L8,4 L0,8 Z" fill="#f97316" />
                  </marker>
                </defs>
                <path
                  d={`M ${1.9 * SCALE} ${0.55 * SCALE} L ${0.35 * SCALE} ${0.65 * SCALE} L ${0.35 * SCALE} ${3.6 * SCALE} L ${2.05 * SCALE} ${3.6 * SCALE} L ${2.05 * SCALE} ${0.7 * SCALE}`}
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                  markerEnd="url(#arrow)"
                  opacity="0.7"
                />
              </svg>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 justify-center font-mono text-[11px] text-[#475569]">
            <span className="flex items-center gap-1.5">
              <span className="inline-block w-4 border-t-2 border-dashed border-[#f97316]" /> поток покупателей
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-block w-3 h-3 border border-[#94a3b8] bg-[#e2e8f0]" /> сетка 200 мм
            </span>
          </div>
        </section>

        {/* SPEC + DETAILS */}
        <section className="space-y-6">
          {/* Active card */}
          <div className="border-2 border-[#0f172a] bg-white shadow-[5px_5px_0_0_rgba(15,23,42,0.1)] overflow-hidden">
            <div className="relative h-52 sm:h-64 bg-[#0f172a] overflow-hidden">
              <img
                key={activeItem.photo}
                src={activeItem.photo}
                alt={activeItem.name}
                className="w-full h-full object-cover animate-fade-in"
              />
              <span className="absolute top-3 left-3 font-mono text-[10px] tracking-[0.2em] uppercase bg-[#0f172a]/85 text-white px-2 py-1">
                Реальное фото · фабрика
              </span>
              <span
                className="absolute bottom-3 left-3 font-mono text-[10px] tracking-[0.2em] uppercase text-white px-2 py-1"
                style={{ background: activeItem.fill }}
              >
                {activeItem.short}
              </span>
            </div>
            <div className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-11 h-11 flex items-center justify-center shrink-0"
                style={{ background: activeItem.fill }}
              >
                <Icon name={activeItem.icon} size={22} className="text-white" />
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-[0.2em] text-[#64748b] uppercase">
                  Поз. {items.findIndex((i) => i.id === active) + 1} · спецификация
                </p>
                <h2 className="font-display font-600 text-xl uppercase leading-none">{activeItem.name}</h2>
              </div>
            </div>
            <div className="font-mono text-sm bg-[#f1f5f9] border border-[#cbd5e1] px-3 py-2 inline-block mb-3">
              {activeItem.size}
            </div>
            <p className="text-[15px] text-[#334155] leading-relaxed">{activeItem.desc}</p>
            </div>
          </div>

          {/* Spec table */}
          <div className="border-2 border-[#0f172a] bg-white">
            <div className="bg-[#0f172a] text-white px-4 py-2 font-mono text-[11px] tracking-[0.2em] uppercase flex justify-between">
              <span>Экспликация оборудования</span>
              <span className="text-white/50">шт</span>
            </div>
            {items.map((it, idx) => (
              <button
                key={it.id}
                onClick={() => setActive(it.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 border-b border-[#e2e8f0] text-left transition-colors ${
                  it.id === active ? 'bg-[#fff7ed]' : 'hover:bg-[#f8fafc]'
                }`}
              >
                <span className="font-mono text-sm text-[#94a3b8] w-5">{idx + 1}</span>
                <span className="w-3 h-3 shrink-0" style={{ background: it.fill }} />
                <span className="font-sans font-500 text-sm flex-1">{it.name}</span>
                <span className="font-mono text-xs text-[#64748b] hidden sm:block">{it.size.split(',')[0]}</span>
                <span className="font-mono text-sm text-[#0f172a] w-6 text-right">1</span>
              </button>
            ))}
          </div>

          {/* Ergonomics */}
          <div className="border-2 border-[#0f172a] bg-white p-6">
            <h3 className="font-display font-600 text-lg uppercase mb-4 flex items-center gap-2">
              <Icon name="Footprints" size={18} /> Эргономика и проходы
            </h3>
            <ul className="space-y-3">
              {[
                ['Проход покупателей', '900 мм', 'Центральный проход вокруг острова — свободное движение, разъезд с корзиной.'],
                ['Рабочая зона продавца', '600 мм', 'За кассой у входа, обзор всего зала и контроль товара.'],
                ['Доступ к острову', '360°', 'Круговой обход — товар доступен со всех сторон.'],
                ['Дистанция стеллажей', '1400 мм', 'Между стеллажами овощей и сухофруктов — два человека расходятся.'],
              ].map(([t, v, d]) => (
                <li key={t} className="flex gap-3">
                  <span className="font-mono text-sm bg-[#0f172a] text-white px-2 py-0.5 h-fit whitespace-nowrap">
                    {v}
                  </span>
                  <span>
                    <span className="font-500 text-sm">{t}. </span>
                    <span className="text-sm text-[#475569]">{d}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      {/* 3D RENDER — как будет выглядеть в помещении */}
      <section className="border-t-2 border-[#0f172a] bg-[#f4f4f0]">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="mb-6">
            <p className="font-mono text-[11px] tracking-[0.3em] text-[#f97316] uppercase mb-1">
              3D-визуализация · ИИ-рендер по вашим фото
            </p>
            <h2 className="font-display font-600 text-2xl md:text-3xl uppercase text-[#0f172a] leading-none">
              Ваши стеллажи в помещении 2,4 × 4 м
            </h2>
          </div>

          {/* Главный рендер — широкий */}
          <div className="border-2 border-[#0f172a] overflow-hidden group mb-4">
            <div className="relative overflow-hidden">
              <img
                src="https://cdn.poehali.dev/projects/24824893-ae83-469f-ba4a-0c4313d600eb/files/aee3d119-ffff-4598-a3fb-1860e6018b6a.jpg"
                alt="Вид от входа — полная расстановка"
                className="w-full aspect-[16/9] object-cover group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 to-transparent" />
              <span className="absolute bottom-4 left-4 font-mono text-[10px] tracking-[0.2em] uppercase bg-[#f97316] text-white px-3 py-1.5">
                Вид от входа · полная расстановка
              </span>
            </div>
          </div>

          {/* Два рендера рядом */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border-2 border-[#0f172a] overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/24824893-ae83-469f-ba4a-0c4313d600eb/files/d89fb59d-3859-42e6-9d76-990c6df19216.jpg"
                  alt="Диагональный вид"
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute bottom-3 left-3 font-mono text-[10px] tracking-[0.2em] uppercase bg-[#0f172a]/85 text-white px-2 py-1">
                  Вид по диагонали · все зоны
                </span>
              </div>
            </div>
            <div className="border-2 border-[#0f172a] overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/24824893-ae83-469f-ba4a-0c4313d600eb/files/8a4a331e-f2ec-4eb8-9cc7-0d609f0a0d9e.jpg"
                  alt="Аксонометрия сверху"
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute bottom-3 left-3 font-mono text-[10px] tracking-[0.2em] uppercase bg-[#0f172a]/85 text-white px-2 py-1">
                  Аксонометрия · вид сверху
                </span>
              </div>
            </div>
          </div>

          <p className="font-mono text-[10px] text-[#94a3b8] mt-3 tracking-wider">
            * Рендер сгенерирован ИИ по схеме расстановки и вашим фото деревянных стеллажей. Финальный вид зависит от выбранного финиша.
          </p>
        </div>
      </section>

      {/* GALLERY — дизайнерская визуализация */}
      <section className="border-t-2 border-[#0f172a] bg-[#0f172a]">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="flex items-end justify-between gap-4 mb-6">
            <div>
              <p className="font-mono text-[11px] tracking-[0.3em] text-[#f97316] uppercase mb-1">
                Визуализация проекта
              </p>
              <h2 className="font-display font-600 text-2xl md:text-3xl uppercase text-white leading-none">
                Стеллажи в материале
              </h2>
            </div>
            <span className="hidden md:block font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase">
              4 элемента · массив сосны
            </span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {items.map((it, idx) => (
              <button
                key={it.id}
                onClick={() => {
                  setActive(it.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group relative overflow-hidden border-2 border-white/10 hover:border-[#f97316] transition-colors text-left"
              >
                <div className="aspect-[3/4] overflow-hidden bg-black">
                  <img
                    src={it.photo}
                    alt={it.name}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/90 to-transparent pt-10">
                  <p className="font-mono text-[9px] tracking-[0.2em] text-[#f97316] uppercase">
                    Поз. {idx + 1}
                  </p>
                  <p className="font-display font-500 text-white text-sm uppercase leading-tight">
                    {it.name}
                  </p>
                  <p className="font-mono text-[10px] text-white/60 mt-0.5">{it.size.split(',')[0]}</p>
                </div>
                <span className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center bg-[#f97316] opacity-0 group-hover:opacity-100 transition-opacity">
                  <Icon name="ArrowUpRight" size={15} className="text-white" />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t-2 border-[#0f172a] mt-6">
        <div className="max-w-6xl mx-auto px-6 py-4 font-mono text-[10px] tracking-[0.2em] text-[#64748b] uppercase flex flex-wrap justify-between gap-2">
          <span>Магазин · овощи · фрукты · сухофрукты</span>
          <span>Лист 1 / 1 · {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
}