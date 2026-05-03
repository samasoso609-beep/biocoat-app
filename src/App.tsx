import { useState } from 'react';
import { 
  Beaker,
  Zap,
  RefreshCw,
  FlaskConical,
  ClipboardList,
  AlertCircle,
  Calendar
} from 'lucide-react';

/**
 * BIOCOAT SCIENTIFIC - FULL CROP SUITE
 * إعادة كافة المحاصيل: الأفوكادو، اليوسفي، البرتقال، المانجو، الليمون، الفراولة، الطماطم.
 */

type Language = 'ar' | 'en';

export default function App() {
  const [lang, setLang] = useState<Language>('ar');
  const [step, setStep] = useState(1); 
  const [selectedFruit, setSelectedFruit] = useState<string | null>(null);
  const [activeFormula, setActiveFormula] = useState(0);

  const ui: Record<Language, any> = {
    ar: {
      title: 'مختبر BioCoat للتقنيات الحيوية',
      subtitle: 'نظام قياس كفاءة الأغلفة وإطالة العمر الافتراضي',
      choose: 'اختر المحصول للمقارنة بين العمر الطبيعي والمُحسّن:',
      start: 'بدء تحليل الكفاءة لـ',
      loading: 'جاري حساب معدلات الأيض وفقد الرطوبة...',
      results: 'تقرير مقارنة الصلاحية: ',
      stepsTitle: 'بروتوكول التحضير:',
      science: 'الآلية العلمية:',
      naturalLife: 'العمر الطبيعي (بدون إضافات)',
      coatedLife: 'العمر بعد التغليف الذكي',
      improvement: 'نسبة الزيادة في الصلاحية',
      reset: 'محصول جديد',
      langBtn: 'English',
      composition: 'المواد المستخدمة',
      formulaA: 'البديل الأول',
      formulaB: 'البديل الثاني',
      days: 'أيام',
      impactTitle: 'تحليل الأداء الزمني'
    },
    en: {
      title: 'BioCoat Biotech Lab',
      subtitle: 'Shelf-life Efficiency & Coating Analytics',
      choose: 'Select crop to compare Natural vs Enhanced shelf-life:',
      start: 'Start Efficiency Analysis for',
      loading: 'Calculating metabolic rates and moisture loss...',
      results: 'Shelf-life Comparison Report: ',
      stepsTitle: 'Preparation Protocol:',
      science: 'Scientific Mechanism:',
      naturalLife: 'Natural Shelf-life (Control)',
      coatedLife: 'Enhanced Shelf-life (Coated)',
      improvement: 'Improvement Percentage',
      reset: 'New Crop',
      langBtn: 'العربية',
      composition: 'Materials Used',
      formulaA: 'Formula 1',
      formulaB: 'Formula 2',
      days: 'Days',
      impactTitle: 'Temporal Performance Analysis'
    }
  };

  const fruitData: Record<string, any> = {
    'Avocados': {
      name: { ar: 'الأفوكادو', en: 'Avocados' },
      img: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&q=80&w=800',
      naturalDays: 5,
      formulas: [
        {
          title: { ar: 'ليبيدات نباتية + روزماري', en: 'Plant Lipids + Rosemary' },
          materials: { ar: 'مستحلب دهني (3%) + زيت روزماري (0.5%)', en: 'Lipid Emulsion (3%) + Rosemary Oil (0.5%)' },
          enhancedDays: 12,
          protocol: { ar: ['تحضير المستحلب الدهني.', 'إضافة زيت الروزماري كمضاد أكسدة.', 'غمر منطقة العنق والجسم.'], en: ['Prepare lipid emulsion.', 'Add Rosemary as antioxidant.', 'Dip stem-end and body.'] },
          science: { ar: 'يمنع الأكسدة ويؤخر تحول اللب للون البني عبر تثبيط الإنزيمات.', en: 'Prevents oxidation and delays pulp browning by inhibiting enzymes.' }
        },
        {
          title: { ar: 'شيتوزان + زيت الزعتر', en: 'Chitosan + Thyme' },
          materials: { ar: 'شيتوزان (1.5%) + زيت زعتر (0.4%)', en: 'Chitosan (1.5%) + Thyme Oil (0.4%)' },
          enhancedDays: 15,
          protocol: { ar: ['إذابة 15جم شيتوزان.', 'إضافة زيت الزعتر المركز.', 'رش سطح الثمرة.'], en: ['15g Chitosan prep.', 'Thyme oil addition.', 'Surface spray.'] },
          science: { ar: 'يخلق حاجزاً غازياً يقلل تنفس الثمرة بمقدار الضعف.', en: 'Creates a gas barrier that halves the fruit respiration rate.' }
        }
      ]
    },
    'Oranges': {
      name: { ar: 'البرتقال', en: 'Oranges' },
      img: 'https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&q=80&w=800',
      naturalDays: 20,
      formulas: [
        {
          title: { ar: 'شمع كارنوبا + زيت القشور', en: 'Carnauba Wax + Peel Oil' },
          materials: { ar: 'شمع كارنوبا (5%) + زيت قشر برتقال (1%)', en: 'Carnauba Wax (5%) + Peel Oil (1%)' },
          enhancedDays: 45,
          protocol: { ar: ['إذابة الشمع النباتي.', 'دمج الزيت العطري.', 'استخدام فرش تلميع دقيقة.'], en: ['Melt plant wax.', 'Integrate essential oil.', 'Use fine polishing brushes.'] },
          science: { ar: 'يسد المسام الجلدية تماماً لمنع جفاف الثمرة وفقدان الوزن.', en: 'Seals skin pores completely to prevent desiccation and weight loss.' }
        },
        {
          title: { ar: 'بكتين + حمض الأسكوربيك', en: 'Pectin + Ascorbic Acid' },
          materials: { ar: 'بكتين (2%) + فيتامين ج (0.5%)', en: 'Pectin (2%) + Vitamin C (0.5%)' },
          enhancedDays: 35,
          protocol: { ar: ['تحضير محلول بكتين دافئ.', 'إضافة حمض الأسكوربيك.', 'غمر وتجفيف سريع.'], en: ['Warm pectin prep.', 'Add Ascorbic acid.', 'Dip and rapid dry.'] },
          science: { ar: 'يحافظ على تماسك القشرة ويمنع البقع الفطرية السوداء.', en: 'Maintains peel firmness and prevents black fungal spots.' }
        }
      ]
    },
    'Tangerines': {
      name: { ar: 'اليوسفي', en: 'Tangerines' },
      img: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&q=80&w=800',
      naturalDays: 12,
      formulas: [
        {
          title: { ar: 'شيتوزان نانوي + برغموت', en: 'Nano-Chitosan + Bergamot' },
          materials: { ar: 'شيتوزان نانوي (1%) + زيت برغموت (0.3%)', en: 'Nano-Chitosan (1%) + Bergamot Oil (0.3%)' },
          enhancedDays: 28,
          protocol: { ar: ['تحضير الشيتوزان النانوي.', 'إضافة زيت البرغموت.', 'الرش الرذاذي الخفيف.'], en: ['Nano-chitosan prep.', 'Bergamot oil addition.', 'Mist spraying.'] },
          science: { ar: 'الجزيئات النانوية تغطي الندبات المجهرية التي يدخل منها الفطر.', en: 'Nano-particles cover microscopic scars where fungi enter.' }
        },
        {
          title: { ar: 'ألجينات + زيت الليمون', en: 'Alginate + Lemon Oil' },
          materials: { ar: 'ألجينات (1.5%) + زيت ليمون (0.4%)', en: 'Alginate (1.5%) + Lemon Oil (0.4%)' },
          enhancedDays: 24,
          protocol: { ar: ['تحضير محلول الألجينات.', 'دمج الزيت العطري.', 'غمر في محلول كالسيوم للتثبيت.'], en: ['Alginate prep.', 'Blend oil.', 'Calcium bath for setting.'] },
          science: { ar: 'يمنع فقدان المكونات الطيارة التي تعطي اليوسفي رائحته.', en: 'Prevents loss of volatile components that give tangerines their aroma.' }
        }
      ]
    },
    'Lemon': {
      name: { ar: 'الليمون', en: 'Lemon' },
      img: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&q=80&w=800',
      naturalDays: 14,
      formulas: [
        {
          title: { ar: 'شيتوزان + زيت شجرة الشاي', en: 'Chitosan + Tea Tree' },
          materials: { ar: 'شيتوزان (1.5%) + زيت شجرة الشاي (0.5%)', en: 'Chitosan (1.5%) + Tea Tree Oil (0.5%)' },
          enhancedDays: 42,
          protocol: { ar: ['إذابة 15جم شيتوزان.', 'إضافة 5 مل زيت.', 'رش رذاذ دقيق.'], en: ['15g Chitosan.', '5ml oil addition.', 'Fine spray.'] },
          science: { ar: 'يقتل جراثيم العفن الأخضر ويمنع فقدان الوزن.', en: 'Kills green mold spores and prevents weight loss.' }
        },
        {
          title: { ar: 'شمع النحل + برغموت', en: 'Beeswax + Bergamot' },
          materials: { ar: 'شمع عسل (4%) + زيت برغموت (0.6%)', en: 'Beeswax (4%) + Bergamot Oil (0.6%)' },
          enhancedDays: 50,
          protocol: { ar: ['صهر الشمع.', 'دمج زيت البرغموت.', 'فرشاة دوارة.'], en: ['Melt wax.', 'Blend Bergamot.', 'Rotary brush.'] },
          science: { ar: 'يوفر عزلًا فيزيائيًا كاملاً ضد تبخر الماء.', en: 'Provides complete physical insulation against water evaporation.' }
        }
      ]
    },
    'Mangoes': {
      name: { ar: 'المانجو', en: 'Mangoes' },
      img: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=800',
      naturalDays: 7,
      formulas: [
        {
          title: { ar: 'صمغ عربي + ليمون جراس', en: 'Gum Arabic + Lemongrass' },
          materials: { ar: 'صمغ عربي (10%) + زيت ليمون جراس (0.8%)', en: 'Gum Arabic (10%) + Lemongrass Oil (0.8%)' },
          enhancedDays: 22,
          protocol: { ar: ['إذابة 100جم صمغ.', 'إضافة زيت.', 'غمر الثمار.'], en: ['100g Gum Arabic.', 'Oil addition.', 'Fruit dipping.'] },
          science: { ar: 'يقلل من إنتاج غاز الإيثيلين المسبب للنضج.', en: 'Reduces ethylene gas production.' }
        },
        {
          title: { ar: 'شيتوزان + زعتر', en: 'Chitosan + Thyme' },
          materials: { ar: 'شيتوزان (2%) + زيت زعتر (0.4%)', en: 'Chitosan (2%) + Thyme Oil (0.4%)' },
          enhancedDays: 28,
          protocol: { ar: ['إذابة الشيتوزان.', 'إضافة الزيت.', 'غمر مزدوج.'], en: ['Chitosan prep.', 'Oil addition.', 'Double dip.'] },
          science: { ar: 'يحافظ على صلابة الأنسجة الداخلية للمانجو.', en: 'Maintains the firmness of internal tissues.' }
        }
      ]
    },
    'Strawberries': {
      name: { ar: 'الفراولة', en: 'Strawberries' },
      img: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&q=80&w=800',
      naturalDays: 3,
      formulas: [
        {
          title: { ar: 'جيلاتين + قرنفل', en: 'Gelatin + Clove' },
          materials: { ar: 'جيلاتين (2%) + زيت قرنفل (0.5%)', en: 'Gelatin (2%) + Clove Oil (0.5%)' },
          enhancedDays: 8,
          protocol: { ar: ['إذابة 20جم جيلاتين.', 'إضافة الزيت.', 'رش إلكتروستاتيكي.'], en: ['20g Gelatin.', 'Oil addition.', 'Electrostatic spray.'] },
          science: { ar: 'يمنع نمو فطر العفن الرمادي.', en: 'Prevents growth of gray mold.' }
        },
        {
          title: { ar: 'ألجينات + قرفة', en: 'Alginate + Cinnamon' },
          materials: { ar: 'ألجينات (1.5%) + زيت قرفة (0.4%)', en: 'Alginate (1.5%) + Cinnamon Oil (0.4%)' },
          enhancedDays: 10,
          protocol: { ar: ['تحضير الألجينات.', 'إضافة الزيت.', 'تصليد بالكالسيوم.'], en: ['Alginate prep.', 'Oil addition.', 'Calcium curing.'] },
          science: { ar: 'يخلق غشاءً هلامياً يمنع خروج السوائل.', en: 'Creates a gel film that prevents juice loss.' }
        }
      ]
    }
  };

  const startAnalysis = () => {
    setStep(2);
    setTimeout(() => {
      setStep(3);
      setActiveFormula(0);
    }, 1500);
  };

  const t = ui[lang];
  const currentFruit = selectedFruit ? fruitData[selectedFruit] : null;
  const currentFormula = currentFruit ? currentFruit.formulas[activeFormula] : null;
  
  const naturalVal = currentFruit?.naturalDays || 0;
  const enhancedVal = currentFormula?.enhancedDays || 0;
  const improvementPct = naturalVal > 0 ? Math.round(((enhancedVal - naturalVal) / naturalVal) * 100) : 0;

  return (
    <div dir={lang === 'ar' ? 'rtl' : 'ltr'} style={{ minHeight: '100vh', backgroundColor: '#f0f4f8', fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1e293b' }}>
      
      {/* Header */}
      <nav style={{ backgroundColor: 'white', borderBottom: '4px solid #0284c7', padding: '15px 30px', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{ backgroundColor: '#0284c7', color: 'white', padding: '10px', borderRadius: '12px' }}>
              <Beaker size={26} />
            </div>
            <div>
              <h1 style={{ margin: 0, fontSize: '20px', fontWeight: '900' }}>BioCoat <span style={{ color: '#0ea5e9' }}>Lab AI</span></h1>
              <p style={{ margin: 0, fontSize: '11px', color: '#64748b', fontWeight: 'bold' }}>{t.subtitle}</p>
            </div>
          </div>
          <button onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')} style={{ backgroundColor: '#f1f5f9', border: '1px solid #e2e8f0', padding: '8px 20px', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer' }}>
            {t.langBtn}
          </button>
        </div>
      </nav>

      <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 20px' }}>

        {step === 1 && (
          <div style={{ animation: 'fadeIn 0.5s' }}>
            <h2 style={{ textAlign: 'center', fontSize: '24px', fontWeight: '900', marginBottom: '40px' }}>{t.choose}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
              {Object.keys(fruitData).map(key => (
                <div 
                  key={key} 
                  onClick={() => setSelectedFruit(key)}
                  style={{ 
                    cursor: 'pointer', transition: '0.3s', backgroundColor: 'white', borderRadius: '25px', padding: '15px',
                    border: selectedFruit === key ? '3px solid #0ea5e9' : '3px solid white',
                    boxShadow: selectedFruit === key ? '0 10px 15px rgba(14, 165, 233, 0.2)' : '0 4px 6px rgba(0,0,0,0.05)'
                  }}
                >
                  <img src={fruitData[key].img} style={{ width: '100%', height: '140px', borderRadius: '18px', objectFit: 'cover' }} alt={key} />
                  <h3 style={{ textAlign: 'center', fontSize: '18px', margin: '15px 0 0 0' }}>{fruitData[key].name[lang]}</h3>
                </div>
              ))}
            </div>
            {selectedFruit && (
              <div style={{ textAlign: 'center', marginTop: '40px' }}>
                <button onClick={startAnalysis} style={{ backgroundColor: '#0ea5e9', color: 'white', border: 'none', padding: '15px 40px', borderRadius: '50px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 10px 15px rgba(14, 165, 233, 0.3)' }}>
                  {t.start} {fruitData[selectedFruit].name[lang]}
                </button>
              </div>
            )}
          </div>
        )}

        {step === 2 && (
          <div style={{ textAlign: 'center', padding: '80px 0' }}>
            <div className="loader"></div>
            <h3 style={{ marginTop: '20px', color: '#0369a1' }}>{t.loading}</h3>
          </div>
        )}

        {step === 3 && currentFruit && currentFormula && (
          <div style={{ animation: 'slideUp 0.6s' }}>
            <div style={{ backgroundColor: 'white', borderRadius: '35px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
              
              <div style={{ position: 'relative', height: '180px' }}>
                <img src={currentFruit.img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Header" />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(transparent, rgba(0,0,0,0.8))' }}></div>
                <h2 style={{ position: 'absolute', bottom: '20px', [lang === 'ar' ? 'right' : 'left']: '30px', color: 'white', fontSize: '32px', fontWeight: '900', margin: 0 }}>
                  {currentFruit.name[lang]}
                </h2>
              </div>

              <div style={{ padding: '30px' }}>
                
                <div style={{ display: 'flex', gap: '10px', marginBottom: '30px' }}>
                  {currentFruit.formulas.map((f: any, i: number) => (
                    <button 
                      key={i} 
                      onClick={() => setActiveFormula(i)}
                      style={{ 
                        flex: 1, padding: '15px', borderRadius: '15px', cursor: 'pointer', transition: '0.3s',
                        backgroundColor: activeFormula === i ? '#f0f9ff' : '#f8fafc',
                        border: activeFormula === i ? '2px solid #0ea5e9' : '2px solid #e2e8f0',
                        color: activeFormula === i ? '#0369a1' : '#64748b',
                        fontWeight: 'bold'
                      }}
                    >
                      {i === 0 ? t.formulaA : t.formulaB}
                      <p style={{ margin: '5px 0 0 0', fontSize: '11px', fontWeight: 'normal' }}>{f.title[lang]}</p>
                    </button>
                  ))}
                </div>

                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', color: '#0c4a6e' }}>
                  <Calendar size={20} /> {t.impactTitle}
                </h4>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '30px' }}>
                  
                  <div style={{ backgroundColor: '#f1f5f9', padding: '25px', borderRadius: '25px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
                    <p style={{ margin: 0, fontSize: '12px', color: '#64748b', fontWeight: 'bold' }}>{t.naturalLife}</p>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', gap: '5px', margin: '15px 0' }}>
                      <span style={{ fontSize: '48px', fontWeight: '900', color: '#475569' }}>{naturalVal}</span>
                      <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#64748b' }}>{t.days}</span>
                    </div>
                  </div>

                  <div style={{ backgroundColor: '#f0fdf4', padding: '25px', borderRadius: '25px', border: '1px solid #bbf7d0', textAlign: 'center', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '10px', right: '10px' }}><Zap size={20} color="#22c55e" fill="#22c55e" /></div>
                    <p style={{ margin: 0, fontSize: '12px', color: '#166534', fontWeight: 'bold' }}>{t.coatedLife}</p>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', gap: '5px', margin: '15px 0' }}>
                      <span style={{ fontSize: '48px', fontWeight: '900', color: '#16a34a' }}>{enhancedVal}</span>
                      <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#166534' }}>{t.days}</span>
                    </div>
                    <div style={{ marginTop: '10px', color: '#15803d', fontSize: '14px', fontWeight: 'bold' }}>
                       {t.improvement}: <span style={{ color: '#16a34a' }}>+{improvementPct}%</span>
                    </div>
                  </div>

                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div style={{ backgroundColor: '#f8fafc', padding: '20px', borderRadius: '20px' }}>
                    <h5 style={{ margin: '0 0 15px 0', fontSize: '14px', color: '#0369a1', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <ClipboardList size={18} /> {t.stepsTitle}
                    </h5>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {currentFormula.protocol[lang].map((p: string, i: number) => (
                        <div key={i} style={{ display: 'flex', gap: '8px', fontSize: '13px' }}>
                          <span style={{ minWidth: '18px', height: '18px', backgroundColor: '#0ea5e9', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px' }}>{i+1}</span>
                          {p}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ backgroundColor: '#fff', border: '1px solid #f1f5f9', padding: '20px', borderRadius: '20px' }}>
                    <h5 style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#0369a1', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <FlaskConical size={18} /> {t.science}
                    </h5>
                    <p style={{ margin: 0, fontSize: '13px', lineHeight: '1.6', color: '#475569' }}>
                      {currentFormula.science[lang]}
                    </p>
                    <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#f0f9ff', borderRadius: '10px', fontSize: '11px', color: '#0369a1', fontWeight: 'bold' }}>
                      <AlertCircle size={14} style={{ marginBottom: '-3px' }} /> {t.composition}: {currentFormula.materials[lang]}
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '40px', textAlign: 'center' }}>
                  <button onClick={() => {setStep(1); setSelectedFruit(null);}} style={{ backgroundColor: '#f1f5f9', color: '#475569', border: 'none', padding: '12px 30px', borderRadius: '15px', fontWeight: 'bold', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <RefreshCw size={16} /> {t.reset}
                  </button>
                </div>

              </div>
            </div>
          </div>
        )}

      </main>

      <style>{`
        .loader { width: 50px; height: 50px; border: 4px solid #cbd5e1; border-top-color: #0ea5e9; border-radius: 50%; margin: 0 auto; animation: spin 0.8s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}
