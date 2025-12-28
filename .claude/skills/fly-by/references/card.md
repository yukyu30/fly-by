# Card

コンテンツをグループ化して表示するコンテナ。

## 構造

```html
<div class="fb-card -{modifiers}">
  <div class="_header"><!-- optional --></div>
  <div class="_body">メインコンテンツ</div>
  <div class="_footer"><!-- optional --></div>
</div>
```

## Modifiers

### Elevation（影の深さ）

| Class | レベル | 用途 |
|-------|--------|------|
| `-elevation-0` | なし | フラット |
| `-elevation-1` | 浅い | 通常カード（デフォルト） |
| `-elevation-2` | やや深い | ホバー時 |
| `-elevation-3` | 深い | 重要な要素 |
| `-elevation-4` | より深い | FAB等 |
| `-elevation-5` | かなり深い | メニュー |
| `-elevation-6` | 最も深い | ダイアログ、ドロワー |

## 使用例

### 基本カード
```html
<div class="fb-card -elevation-1">
  <div class="_body">
    <p>カードのコンテンツがここに入ります。</p>
  </div>
</div>
```

### ヘッダー付きカード
```html
<div class="fb-card -elevation-1">
  <div class="_header">
    <h3 class="fb-text -level-l -density-dense">タイトル</h3>
  </div>
  <div class="_body">
    <p class="fb-text -level-m -density-normal">
      説明文がここに入ります。
    </p>
  </div>
</div>
```

### フッターにアクション
```html
<div class="fb-card -elevation-1">
  <div class="_body">
    <h3 class="fb-text -level-l -density-dense">商品名</h3>
    <p class="fb-text -level-m -density-normal">商品の説明文</p>
  </div>
  <div class="_footer">
    <button class="fb-button -appearance-solid -color-informative -size-s">
      <span class="_body">購入する</span>
    </button>
  </div>
</div>
```

### 画像付きカード
```html
<div class="fb-card -elevation-1">
  <div class="_media">
    <img src="image.jpg" alt="説明">
  </div>
  <div class="_body">
    <h3 class="fb-text -level-l -density-dense">タイトル</h3>
    <p class="fb-text -level-s -density-normal">説明</p>
  </div>
</div>
```

### インタラクティブカード
```html
<a href="/detail" class="fb-card -elevation-1 -interactive">
  <div class="_body">クリックで詳細へ</div>
</a>
```

### カードグリッド
```html
<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px;">
  <div class="fb-card -elevation-1">
    <div class="_body">カード1</div>
  </div>
  <div class="fb-card -elevation-1">
    <div class="_body">カード2</div>
  </div>
  <div class="fb-card -elevation-1">
    <div class="_body">カード3</div>
  </div>
</div>
```

## Elevation使い分け

| レベル | コンポーネント例 |
|--------|------------------|
| 0 | 背景と同一面 |
| 1 | カード、ボタン（通常） |
| 2 | タブ、ヘッダー |
| 3 | ツールチップ、ドラッグ中 |
| 4 | FAB |
| 5 | メニュー |
| 6 | ダイアログ、ドロワー |

## box-shadow値

| Level | CSS値 |
|-------|-------|
| 1 | `0 -0.1px 1px 0 rgba(0,0,0,0.12), 0 1px 2px 0 rgba(0,0,0,0.12)` |
| 2 | `0 0 4px 0 rgba(0,0,0,0.12), 0 4px 6px -2px rgba(0,0,0,0.12)` |
| 3 | `0 0 6px 0 rgba(0,0,0,0.08), 0 6px 7px -8px rgba(0,0,0,0.12), 0 6px 16px 2px rgba(0,0,0,0.12)` |
