# Button

ユーザーアクションを促すインタラクティブ要素。

## 構造

```html
<button class="fb-button -{modifiers}">
  <span class="_leading"><!-- optional: icon --></span>
  <span class="_body">ラベル</span>
  <span class="_trailing"><!-- optional: icon --></span>
</button>
```

## Modifiers

### Appearance（見た目）

| Class | 説明 | 使用場面 |
|-------|------|----------|
| `-appearance-flat` | 背景薄め（デフォルト） | 軽いアクション |
| `-appearance-outlined` | 枠線のみ | セカンダリ |
| `-appearance-solid` | 塗りつぶし | プライマリ、CTA |
| `-appearance-transparent` | 透明背景 | テキストリンク風 |
| `-appearance-white` | 白背景 | 暗い背景上 |
| `-appearance-hollow` | 透明＋枠線 | 暗い背景上 |

### Color（色・意味）

| Class | 意味 | Yukyu Flavor |
|-------|------|--------------|
| `-color-neutral` | 汎用 | Gray |
| `-color-informative` | 情報・主要アクション | Deep Blue |
| `-color-positive` | 成功・完了 | Green |
| `-color-negative` | 削除・エラー | Red |
| `-color-notice` | 注意 | Yellow |
| `-color-attention` | 警告 | Orange |
| `-color-interactive` | インタラクティブ | Deep Blue |
| `-color-favorite` | お気に入り | Red |

### Size

| Class | 用途 |
|-------|------|
| `-size-xs` | 極小（インライン） |
| `-size-s` | 小（テーブル内等） |
| `-size-m` | 標準（デフォルト） |
| `-size-l` | 大 |
| `-size-xl` | 特大（ヒーロー） |

### Width

| Class | 説明 |
|-------|------|
| `-width-auto` | コンテンツに合わせる（デフォルト） |
| `-width-full` | 親要素いっぱい |
| `-width-half` | 親要素の半分 |
| `-width-third` | 親要素の1/3 |

### Shape

| Class | 説明 |
|-------|------|
| `-shape-square` | 角丸四角 |
| `-shape-circle` | 円形（アイコンのみ時） |

### Brightness（透明系Appearanceのみ）

| Class | 用途 |
|-------|------|
| `-brightness-light` | 明るい背景上 |
| `-brightness-dark` | 暗い背景上 |

## 使用例

### プライマリボタン
```html
<button class="fb-button -appearance-solid -color-informative -size-m">
  <span class="_body">保存する</span>
</button>
```

### セカンダリボタン
```html
<button class="fb-button -appearance-outlined -color-neutral -size-m">
  <span class="_body">キャンセル</span>
</button>
```

### 削除ボタン
```html
<button class="fb-button -appearance-solid -color-negative -size-s">
  <span class="_body">削除</span>
</button>
```

### アイコン付き
```html
<button class="fb-button -appearance-flat -color-favorite">
  <span class="_leading">
    <span class="fb-icon" data-icon="heart"></span>
  </span>
  <span class="_body">お気に入り</span>
</button>
```

### アイコンのみ
```html
<button class="fb-button -appearance-transparent -color-neutral -shape-circle">
  <span class="_leading">
    <span class="fb-icon" data-icon="more_vert"></span>
  </span>
</button>
```

### 全幅ボタン（フォーム送信）
```html
<button class="fb-button -appearance-solid -color-informative -size-l -width-full">
  <span class="_body">送信する</span>
</button>
```

## ボタンペア

```html
<div class="fb-button-group" style="display: flex; gap: 8px;">
  <button class="fb-button -appearance-outlined -color-neutral -size-m">
    <span class="_body">キャンセル</span>
  </button>
  <button class="fb-button -appearance-solid -color-informative -size-m">
    <span class="_body">保存</span>
  </button>
</div>
```

## 禁止事項

- ラベルにインセンティブ/ベネフィットを入れない（ボタン外で提示）
- 1画面に同じ色のsolidボタンを複数配置しない
- negativeは本当に破壊的な操作のみに使用
