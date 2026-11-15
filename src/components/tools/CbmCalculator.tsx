'use client';

import { useState } from 'react';

type Unit = 'cm' | 'm' | 'in';
const TO_M: Record<Unit, number> = { cm: 0.01, m: 1, in: 0.0254 }; // 1 inch = 2.54 cm exactly

interface Row { l: string; w: string; h: string; qty: string; kg: string }
const empty: Row = { l: '', w: '', h: '', qty: '1', kg: '' };

function num(s: string) {
  const n = parseFloat(s.replace(',', '.'));
  return Number.isFinite(n) && n > 0 ? n : 0;
}

/** Works out shipment volume in cubic metres (CBM), and the air volume weight (cm³ ÷ 6,000, the IATA standard). */
export function CbmCalculator() {
  const [unit, setUnit] = useState<Unit>('cm');
  const [rows, setRows] = useState<Row[]>([{ ...empty }]);
  const f = TO_M[unit];

  const lines = rows.map((r) => {
    const each = num(r.l) * f * num(r.w) * f * num(r.h) * f;
    const qty = Math.round(num(r.qty));
    return { cbm: each * qty, kg: num(r.kg) * qty };
  });
  const totalCbm = lines.reduce((a, x) => a + x.cbm, 0);
  const totalKg = lines.reduce((a, x) => a + x.kg, 0);
  const airVolumeKg = (totalCbm * 1_000_000) / 6000;

  const set = (i: number, k: keyof Row, v: string) => setRows(rows.map((r, j) => (j === i ? { ...r, [k]: v } : r)));
  const input = 'w-full rounded-md border border-border bg-background px-2 py-2 text-sm';

  return (
    <div className="rounded-2xl border border-border bg-card p-5 md:p-6">
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span className="text-sm font-medium text-foreground">Measurements in</span>
        {(['cm', 'm', 'in'] as Unit[]).map((u) => (
          <button key={u} type="button" onClick={() => setUnit(u)}
            className={`px-3 py-1.5 rounded-full text-sm border ${unit === u ? 'bg-copper text-white border-copper' : 'border-border text-foreground'}`}>
            {u === 'in' ? 'inches' : u}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {rows.map((r, i) => (
          <div key={i} className="grid grid-cols-2 sm:grid-cols-6 gap-2 items-end">
            {([['l', 'Length'], ['w', 'Width'], ['h', 'Height'], ['qty', 'Boxes'], ['kg', 'Kg per box']] as [keyof Row, string][]).map(([k, label]) => (
              <label key={k} className="text-xs text-muted-foreground">
                {label}
                <input inputMode="decimal" className={input} value={r[k]} onChange={(e) => set(i, k, e.target.value)} aria-label={`${label}, line ${i + 1}`} />
              </label>
            ))}
            <div className="text-sm text-foreground sm:text-right pb-2">
              {lines[i].cbm.toFixed(3)} CBM
              {rows.length > 1 && (
                <button type="button" onClick={() => setRows(rows.filter((_, j) => j !== i))} className="ml-3 text-xs text-muted-foreground underline">remove</button>
              )}
            </div>
          </div>
        ))}
      </div>
      <button type="button" onClick={() => setRows([...rows, { ...empty }])} className="mt-3 text-sm text-copper underline">
        Add another box size
      </button>

      <div className="mt-6 grid sm:grid-cols-3 gap-3">
        <div className="rounded-lg bg-secondary p-4">
          <p className="text-xs text-muted-foreground">Total volume</p>
          <p className="text-2xl font-bold text-foreground">{totalCbm.toFixed(3)} CBM</p>
        </div>
        <div className="rounded-lg bg-secondary p-4">
          <p className="text-xs text-muted-foreground">Total actual weight</p>
          <p className="text-2xl font-bold text-foreground">{totalKg ? `${totalKg.toLocaleString('en-US', { maximumFractionDigits: 1 })} kg` : '-'}</p>
        </div>
        <div className="rounded-lg bg-secondary p-4">
          <p className="text-xs text-muted-foreground">Air freight volume weight</p>
          <p className="text-2xl font-bold text-foreground">{airVolumeKg.toLocaleString('en-US', { maximumFractionDigits: 1 })} kg</p>
        </div>
      </div>
      <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
        CBM is length × width × height in metres, times the number of boxes. Air volume weight uses cubic centimetres ÷ 6,000, the IATA standard{' '}
        (<a className="underline" href="https://www.maersk.com/logistics-explained/transportation-and-freight/2025/03/10/air-cargo-chargeable-weight" rel="noopener" target="_blank">Maersk</a>).
      </p>
    </div>
  );
}
