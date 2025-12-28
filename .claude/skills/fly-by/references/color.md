# Color - Yukyu Flavor

fly-byは鮮やかな青「#002CED」をベースカラーとするYukyu Flavorを採用。

## Yukyu Flavor カラーパレット

### Primary（ベースカラー #002CED）

| Level | HEX | 用途 |
|-------|-----|------|
| 50 | #e6ebfd | 背景（最も明るい） |
| 100 | #ccd7fb | ホバー背景 |
| 200 | #99b0f7 | ボーダー（薄い） |
| 300 | #6688f3 | ボーダー |
| 400 | #3361ef | - |
| 500 | #002CED | 基準色・ボタン |
| 600 | #0025c4 | ホバー時 |
| 700 | #001e9b | アクティブ時 |
| 800 | #001772 | 見出し |
| 900 | #001049 | 最も濃い |

### Gray

| Level | HEX | 用途 |
|-------|-----|------|
| 50 | #f8f9fa | 背景 |
| 100 | #f1f3f5 | ホバー背景 |
| 200 | #e9ecef | ボーダー（薄い） |
| 300 | #dee2e6 | ボーダー |
| 400 | #ced4da | プレースホルダー |
| 500 | #adb5bd | セカンダリテキスト |
| 600 | #868e96 | アイコン |
| 700 | #495057 | テキスト |
| 800 | #343a40 | 見出し |
| 900 | #212529 | 最も濃い |

### Semantic Color

| Intention | 意味 | Yukyu Flavor | HEX |
|-----------|------|--------------|-----|
| neutral | 汎用、中立 | Gray | #868e96 |
| informative | 情報、主要アクション | Primary | #002CED |
| positive | 成功、完了 | Green | #2f9e44 |
| notice | 注意喚起 | Yellow | #f59f00 |
| negative | エラー、削除 | Red | #e03131 |
| attention | 警告 | Orange | #fd7e14 |

### Implication Color

| Name | 用途 | HEX |
|------|------|-----|
| interactive | リンク、クリック可能 | #002CED (Primary) |
| favorite | お気に入り、ハート | #e03131 (Red) |
| rate | 評価、星 | #f59f00 (Yellow) |

## CSS変数での定義例

```css
:root {
  /* Primary (Yukyu Flavor) */
  --fb-primary-50: #e6ebfd;
  --fb-primary-100: #ccd7fb;
  --fb-primary-500: #002CED;
  --fb-primary-600: #0025c4;
  --fb-primary-700: #001e9b;

  /* Gray */
  --fb-gray-50: #f8f9fa;
  --fb-gray-100: #f1f3f5;
  --fb-gray-500: #adb5bd;
  --fb-gray-700: #495057;
  --fb-gray-800: #343a40;

  /* Semantic */
  --fb-color-informative: var(--fb-primary-500);
  --fb-color-positive: #2f9e44;
  --fb-color-negative: #e03131;
  --fb-color-notice: #f59f00;
  --fb-color-attention: #fd7e14;
  --fb-color-neutral: var(--fb-gray-600);
}
```

## Overlay Color

### 明るい背景上（brightness: light）

| State | 色 |
|-------|-----|
| enabled | transparent |
| hover | rgba(0,0,0,0.04) |
| focused | rgba(0,0,0,0.12) |
| selected | rgba(0,44,237,0.08) |
| activated | rgba(0,44,237,0.12) |

### 暗い背景上（brightness: dark）

| State | 色 |
|-------|-----|
| enabled | transparent |
| hover | rgba(255,255,255,0.08) |
| focused | rgba(255,255,255,0.24) |
| selected | rgba(255,255,255,0.16) |

## アクセシビリティ

- 色だけで情報を伝えない（アイコン、テキストを併用）
- Primary 500はWCAG AA準拠のコントラスト比（白背景上）
- negativeは本当に重要な警告のみに使用
