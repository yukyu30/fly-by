# Typography & Spacing

## Typography

### Font Family

| 用途 | フォント |
|------|----------|
| 欧文 | Open Sans |
| 和文 | Noto Sans JP |
| 等幅 | Roboto Mono |

```css
html {
  font-family: 'Open Sans', 'Noto Sans JP', sans-serif;
}
code {
  font-family: 'Roboto Mono', monospace;
}
```

### Font Size

```html
<p class="fb-text -level-{size}">テキスト</p>
```

| Level | サイズ | 用途 |
|-------|--------|------|
| xxxl | 32px | ページタイトル |
| xxl | 26px | セクション見出し |
| xl | 21px | サブ見出し |
| l | 18px | 強調テキスト |
| m | 16px | 本文（デフォルト） |
| s | 14px | 補足テキスト |
| xs | 12px | キャプション |
| xxs | 11px | 極小ラベル |

### Line Height（Density）

```html
<p class="fb-text -level-m -density-{density}">テキスト</p>
```

| Density | 説明 | 用途 |
|---------|------|------|
| comfort | ゆったり | 長文 |
| normal | 標準（デフォルト） | 一般 |
| dense | 詰まった | 見出し、UI |

### Level × Density 早見表

| Level | comfort | normal | dense |
|-------|---------|--------|-------|
| xxxl | 56px | 40px | 40px |
| xxl | 48px | 40px | 36px |
| xl | 40px | 32px | 28px |
| l | 32px | 28px | 24px |
| m | 28px | 24px | 20px |
| s | 28px | 24px | 20px |
| xs | 24px | 20px | 16px |
| xxs | 20px | 20px | 16px |

## Spacing

4pxグリッドベース。

### 基本値

| 名前 | 値 | 用途 |
|------|-----|------|
| xxs | 4px | 最小間隔 |
| xs | 8px | アイコンとテキスト間 |
| s | 12px | 関連要素間 |
| m | 16px | 標準間隔 |
| l | 24px | グループ間 |
| xl | 32px | セクション間 |
| xxl | 48px | 大きなセクション間 |
| xxxl | 64px | ページセクション間 |

### コンポーネント間のSpacing目安

| 関係 | 推奨値 |
|------|--------|
| 同一グループ内要素 | xs (8px) |
| 関連するグループ間 | m (16px) |
| 独立したセクション間 | xl (32px) |
| ページ主要セクション間 | xxl (48px) |

## 組み合わせパターン

### 見出し + 本文
```html
<h2 class="fb-text -level-xl -density-dense">セクション見出し</h2>
<p class="fb-text -level-m -density-normal" style="margin-top: 8px;">
  本文テキストがここに入ります。
</p>
```

### ラベル + 値
```html
<div style="display: flex; gap: 4px; align-items: baseline;">
  <span class="fb-text -level-xs -density-dense">価格:</span>
  <span class="fb-text -level-l -density-dense">¥1,980</span>
</div>
```

### リスト項目
```html
<ul style="display: flex; flex-direction: column; gap: 8px;">
  <li class="fb-text -level-m -density-normal">項目1</li>
  <li class="fb-text -level-m -density-normal">項目2</li>
  <li class="fb-text -level-m -density-normal">項目3</li>
</ul>
```
