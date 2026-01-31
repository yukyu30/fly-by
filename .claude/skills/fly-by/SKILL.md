---
name: fly-by
description: fly-byデザインシステム。HTMLやReactコンポーネント作成時に使用。shadcn/ui互換形式。Button、Card、Typography、Spacingなどをclass-basedで実装。鮮やかな青(#002CED)をベースカラーとしたYukyu Flavorを採用。「UIを作って」「ボタン追加」「fly-by準拠で」などのリクエスト時に適用。
---

# fly-by Design System

独自デザインシステム。Yukyu Flavor（鮮やかな青 #002CED）を基調とする。

## 基本原則

- **命名規則**: shadcn/ui互換形式（例: `button`, `card`）
- **4pxグリッド**: すべてのサイズは4pxの倍数
- **Class-based**: `{component} -{modifier}-{value}` 形式
- **Yukyu Flavor**: 鮮やかな青（#002CED）をベースカラーに

## Yukyu Flavor カラーパレット

| 名前 | 用途 | HEX |
|------|------|-----|
| Primary 50 | 背景（薄い） | #e6ebfd |
| Primary 100 | ホバー背景 | #ccd7fb |
| Primary 500 | 基準色・ボタン | #002CED |
| Primary 600 | ホバー | #0025c4 |
| Primary 700 | アクティブ | #001e9b |

## コンポーネント詳細

- **Button**: [references/button.md](references/button.md)
- **Card**: [references/card.md](references/card.md)
- **Typography & Spacing**: [references/typography-spacing.md](references/typography-spacing.md)
- **Color**: [references/color.md](references/color.md)

## クイックリファレンス

### Button

```html
<button class="button -appearance-solid -color-informative -size-m">
  <span class="_body">保存する</span>
</button>
```

| Appearance | 用途 |
|------------|------|
| flat | デフォルト、軽いアクション |
| outlined | セカンダリアクション |
| solid | プライマリアクション（目立たせたい） |
| transparent | テキストリンク的な使用 |

| Color | 意味 | Yukyu Flavor |
|-------|------|--------------|
| neutral | 汎用 | Gray |
| informative | 情報・アクション | #002CED |
| positive | 成功・完了 | Green |
| negative | 削除・警告 | Red |

| Size | 値 |
|------|-----|
| xs, s, m, l, xl | 小→大 |

### Card

```html
<div class="card -elevation-1">
  <div class="_body">コンテンツ</div>
</div>
```

### Typography

```html
<p class="text -level-m -density-normal">本文テキスト</p>
```

| Level | サイズ |
|-------|--------|
| xxs | 11px |
| xs | 12px |
| s | 14px |
| m | 16px（デフォルト） |
| l | 18px |
| xl | 21px |
| xxl | 26px |
| xxxl | 32px |

### Spacing（4px基準）

| 名前 | 値 |
|------|-----|
| xxs | 4px |
| xs | 8px |
| s | 12px |
| m | 16px |
| l | 24px |
| xl | 32px |
| xxl | 48px |

## 実装パターン

### プライマリボタン
```html
<button class="button -appearance-solid -color-informative -size-m">
  <span class="_body">送信する</span>
</button>
```

### 削除ボタン
```html
<button class="button -appearance-outlined -color-negative -size-s">
  <span class="_body">削除</span>
</button>
```

### アイコン付きボタン
```html
<button class="button -appearance-flat -color-favorite">
  <span class="_leading">
    <span class="icon" data-icon="heart"></span>
  </span>
  <span class="_body">お気に入り</span>
</button>
```

### カード内レイアウト
```html
<div class="card -elevation-1">
  <div class="_header">
    <h3 class="text -level-l -density-dense">タイトル</h3>
  </div>
  <div class="_body">
    <p class="text -level-m -density-normal">説明文がここに入ります。</p>
  </div>
  <div class="_footer">
    <button class="button -appearance-solid -color-informative -size-s">
      <span class="_body">詳細を見る</span>
    </button>
  </div>
</div>
```

### フォーム
```html
<form>
  <div class="form-field">
    <label class="text -level-s -density-dense">メールアドレス</label>
    <div class="textfield -appearance-outlined -size-m">
      <input class="_input" type="email" placeholder="example@example.com" />
    </div>
  </div>
  <button class="button -appearance-solid -color-informative -size-m -width-full">
    <span class="_body">登録する</span>
  </button>
</form>
```
