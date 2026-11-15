'use client';

import { useState } from 'react';

type Unit = 'cm' | 'in';
interface Row { l: string; w: string; h: string; qty: string; kg: string }
const empty: Row = { l: '', w: '', h: '', qty: '1', kg: '' };
const num = (s: string) => { const n = parseFloat(s.replace(',', '.')); return Number.isFinite(n) && n > 0 ? n : 0; };

/** Air freight chargeable weight: the higher of actual weight and volume weight (cm³ ÷ 6,000, the IATA standard). */
export function ChargeableWeightCalculator() {
  const [unit, setUnit] = useState<Unit>('cm');
  const [weightUnit, setWeightUnit] = useState<'kg' | 'lb'>('kg');
  const [rows, setRows] = useState<Row[]>([{ ...empty }]);
  const toCm = unit === 'in' ? 2.54 : 1;          // 1 inch = 2.54 cm exactly
  const toKg = weightUnit === 'lb' ? 0.45359237 : 1; // 1 lb = 0.45359237 kg exactly

  const lines = rows.map((r) => {
    const qty = Math.round(num(r.qty));
    const cm3 = num(r.l) * toCm * num(r.w) * toCm * num(r.h) * toCm;
    return { volKg: (cm3 / 6000) * qty, actKg: num(r.kg) * toKg * qty };
  });
  const vol = lines.reduce((a, x) => a + x.volKg, 0);
  const act = lines.reduce((a, x) => a + x.actKg, 0);
  const chargeable = Math.max(vol, act);
  const basis = !chargeable ? '' : vol > act ? 'volume weight' : 'actual weight';

  const set = (i: number, k: keyof Row, v: string) => setRows(rows.map((r, j) => (j === i ? { ...r, [k]: v } : r)));
  const input = 'w-full rounded-md border border-border bg-background px-2 py-2 text-sm';
  const pill = (on: boolean) => `px-3 py-1.5 rounded-full text-sm border ${on ? 'bg-copper text-white border-copper' : 'border-border text-foreground'}`;
  const fmt = (n: number) => n.toLocaleString('en-US', { maximumFractionDigits: 1 });

  return (
    <div className="rounded-2xl border border-border bg-card p-5 md:p-6">
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="text-sm font-medium text-foreground mr-1">Size in</span>
        <button type="button" className={pill(unit === 'cm')} onClick={() => setUnit('cm')}>cm</button>
        <button type="button" className={pill(unit === 'in')} onClick={() => setUnit('in')}>inches</button>
        <span className="text-sm font-medium text-foreground ml-3 mr-1">Weight in</span>
        <button type="button" className={pill(weightUnit === 'kg')} onClick={() => setWeightUnit('kg')}>kg</button>
        <button type="button" className={pill(weightUnit === 'lb')} onClick={() => setWeightUnit('lb')}>lb</button>
      </div>
      <div className="space-y-3">
        {rows.map((r, i) => (
          <div key={i} className="grid grid-cols-2 sm:grid-cols-6 gap-2 items-end">
            {([['l', 'Length'], ['w', 'Width'], ['h', 'Height'], ['qty', 'Pieces'], ['kg', `Weight per piece (${weightUnit})`]] as [keyof Row, string][]).map(([k, label]) => (
              <label key={k} className="text-xs text-muted-foreground">
                {label}
                <input inputMode="decimal" className={input} value={r[k]} onChange={(e) => set(i, k, e.target.value)} aria-label={`${label}, line ${i + 1}`} />
              </label>
            ))}
            <div className="text-sm text-foreground sm:text-right pb-2">
              {fmt(lines[i].volKg)} kg vol.
              {rows.length > 1 && (
                <button type="button" onClick={() => setRows(rows.filter((_, j) => j !== i))} className="ml-3 text-xs text-muted-foreground underline">remove</button>
              )}
            </div>
          </div>
        ))}
      </div>
      <button type="button" onClick={() => setRows([...rows, { ...empty }])} className="mt-3 text-sm text-copper underline">Add another piece size</button>
      <div className="mt-6 grid sm:grid-cols-3 gap-3">
        <div className="rounded-lg bg-secondary p-4"><p className="text-xs text-muted-foreground">Actual weight</p><p className="text-2xl font-bold text-foreground">{fmt(act)} kg</p></div>
        <div className="rounded-lg bg-secondary p-4"><p className="text-xs text-muted-foreground">Volume weight</p><p className="text-2xl font-bold text-foreground">{fmt(vol)} kg</p></div>
        <div className="rounded-lg bg-copper/10 p-4"><p className="text-xs text-muted-foreground">Chargeable weight</p><p className="text-2xl font-bold text-foreground">{fmt(chargeable)} kg</p>{basis && <p className="text-xs text-muted-foreground">charged on {basis}</p>}</div>
      </div>
      <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
        Volume weight is length × width × height in centimetres ÷ 6,000, the IATA standard. You pay on whichever is higher, actual or volume weight{' '}
        (<a className="underline" href="https://www.maersk.com/logistics-explained/transportation-and-freight/2025/03/10/air-cargo-chargeable-weight" rel="noopener" target="_blank">Maersk</a>).
      </p>
    </div>
  );
}
