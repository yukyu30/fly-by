# Color - Yukyu Flavor

fly-byは濃いめの青「Deep Blue」をベースカラーとするYukyu Flavorを採用。

## Yukyu Flavor カラーパレット

### Deep Blue（ベースカラー）

| Level | HEX | 用途 |
|-------|-----|------|
| 50 | #e8f0fe | 背景（最も明るい） |
| 100 | #d1e1fc | ホバー背景 |
| 200 | #a3c3f9 | ボーダー（薄い） |
| 300 | #7ba5f5 | ボーダー |
| 400 | #4d87f2 | - |
| 500 | #1a365d | 基準色 |
| 600 | #153e75 | テキスト、ボタン |
| 700 | #1e4a8a | ホバー時 |
| 800 | #0f2d5a | 見出し |
| 900 | #0a1f3d | 最も濃い |

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

| Intention | 意味 | Yukyu Flavor | HEX (600) |
|-----------|------|--------------|-----------|
| neutral | 汎用、中立 | Gray | #868e96 |
| informative | 情報、主要アクション | Deep Blue | #153e75 |
| positive | 成功、完了 | Green | #2f9e44 |
| notice | 注意喚起 | Yellow | #f59f00 |
| negative | エラー、削除 | Red | #e03131 |
| attention | 警告 | Orange | #fd7e14 |

### Implication Color

| Name | 用途 | HEX |
|------|------|-----|
| interactive | リンク、クリック可能 | #153e75 (Deep Blue) |
| favorite | お気に入り、ハート | #e03131 (Red) |
| rate | 評価、星 | #f59f00 (Yellow) |

## CSS変数での定義例

```css
:root {
  /* Deep Blue */
  --fb-deep-blue-50: #e8f0fe;
  --fb-deep-blue-100: #d1e1fc;
  --fb-deep-blue-500: #1a365d;
  --fb-deep-blue-600: #153e75;
  --fb-deep-blue-700: #1e4a8a;
  
  /* Gray */
  --fb-gray-50: #f8f9fa;
  --fb-gray-100: #f1f3f5;
  --fb-gray-500: #adb5bd;
  --fb-gray-700: #495057;
  --fb-gray-800: #343a40;
  
  /* Semantic */
  --fb-color-informative: var(--fb-deep-blue-600);
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
| selected | rgba(21,62,117,0.08) |
| activated | rgba(21,62,117,0.12) |

### 暗い背景上（brightness: dark）

| State | 色 |
|-------|-----|
| enabled | transparent |
| hover | rgba(255,255,255,0.08) |
| focused | rgba(255,255,255,0.24) |
| selected | rgba(255,255,255,0.16) |

## アクセシビリティ

- 色だけで情報を伝えない（アイコン、テキストを併用）
- Deep Blue 600はWCAG AA準拠のコントラスト比
- negativeは本当に重要な警告のみに使用
