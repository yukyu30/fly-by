---
name: fly-by
description: Inhouseデザインシステムをベースにしたfly-byデザインシステム。HTMLやReactコンポーネント作成時に使用。プレフィックスは「fb-」。Button、Card、Typography、Spacingなどをclass-basedで実装。濃いめの青をベースカラーとしたYukyu Flavorを採用。「UIを作って」「ボタン追加」「fb-準拠で」などのリクエスト時に適用。
---

# fly-by Design System

Inhouseをリスペクトした独自デザインシステム。Yukyu Flavor（濃いめの青）を基調とする。

## 基本原則

- **プレフィックス**: `fb-` （例: `fb-button`, `fb-card`）
- **4pxグリッド**: すべてのサイズは4pxの倍数
- **Class-based**: `fb-{component} -{modifier}-{value}` 形式
- **Yukyu Flavor**: 濃いめの青（Deep Blue）をベースカラーに

## Yukyu Flavor カラーパレット

| 名前 | 用途 | HEX |
|------|------|-----|
| Deep Blue 500 | 基準色 | #1a365d |
| Deep Blue 600 | ボタン・アクション | #153e75 |
| Deep Blue 700 | ホバー | #1e4a8a |
| Deep Blue 50 | 背景（薄い） | #e8f0fe |

## コンポーネント詳細

- **Button**: [references/button.md](references/button.md)
- **Card**: [references/card.md](references/card.md)
- **Typography & Spacing**: [references/typography-spacing.md](references/typography-spacing.md)
- **Color**: [references/color.md](references/color.md)

## クイックリファレンス

### Button

```html
<button class="fb-button -appearance-solid -color-informative -size-m">
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
| informative | 情報・アクション | Deep Blue |
| positive | 成功・完了 | Green |
| negative | 削除・警告 | Red |

| Size | 値 |
|------|-----|
| xs, s, m, l, xl | 小→大 |

### Card

```html
<div class="fb-card -elevation-1">
  <div class="_body">コンテンツ</div>
</div>
```

### Typography

```html
<p class="fb-text -level-m -density-normal">本文テキスト</p>
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
<button class="fb-button -appearance-solid -color-informative -size-m">
  <span class="_body">送信する</span>
</button>
```

### 削除ボタン
```html
<button class="fb-button -appearance-outlined -color-negative -size-s">
  <span class="_body">削除</span>
</button>
```

### アイコン付きボタン
```html
<button class="fb-button -appearance-flat -color-favorite">
  <span class="_leading">
    <span class="fb-icon" data-icon="heart"></span>
  </span>
  <span class="_body">お気に入り</span>
</button>
```

### カード内レイアウト
```html
<div class="fb-card -elevation-1">
  <div class="_header">
    <h3 class="fb-text -level-l -density-dense">タイトル</h3>
  </div>
  <div class="_body">
    <p class="fb-text -level-m -density-normal">説明文がここに入ります。</p>
  </div>
  <div class="_footer">
    <button class="fb-button -appearance-solid -color-informative -size-s">
      <span class="_body">詳細を見る</span>
    </button>
  </div>
</div>
```

### フォーム
```html
<form>
  <div class="fb-form-field">
    <label class="fb-text -level-s -density-dense">メールアドレス</label>
    <div class="fb-textfield -appearance-outlined -size-m">
      <input class="_input" type="email" placeholder="example@example.com" />
    </div>
  </div>
  <button class="fb-button -appearance-solid -color-informative -size-m -width-full">
    <span class="_body">登録する</span>
  </button>
</form>
```
