<p align="center">
  <img src="public/fly-by-logo.png" alt="fly-by Design System" width="400" />
</p>

<h1 align="center">fly-by Design System</h1>

<p align="center">
  <strong>Yukyu Flavor</strong>（鮮やかな青 #002CED）を基調とする shadcn/ui 互換のコンポーネントライブラリ。
</p>

<p align="center">
  <a href="#usage--使い方">使い方</a> •
  <a href="#component-list--コンポーネント一覧">コンポーネント一覧</a> •
  <a href="#design-principles--デザイン原則">デザイン原則</a>
</p>

---

## Usage / 使い方

### 1. shadcn CLI のインストール

```bash
npx shadcn@latest init
```

### 2. コンポーネントの追加

```bash
npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-button.json"
```

または複数コンポーネントを一括追加：

```bash
npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-button.json" "https://fly-by.design.yukyu.net/r/fb-card.json" "https://fly-by.design.yukyu.net/r/fb-input.json"
```

### 3. コンポーネントの使用

```tsx
import { FbButton } from "@/components/ui/fb-button"

export default function MyComponent() {
  return (
    <FbButton variant="default" size="default">
      Click me
    </FbButton>
  )
}
```

---

## Component List / コンポーネント一覧

### Phase 1: 基礎コンポーネント

| コンポーネント | 説明 | インストールコマンド |
|--------------|------|---------------------|
| fb-button | ボタン | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-button.json"` |
| fb-card | カード | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-card.json"` |
| fb-input | テキスト入力 | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-input.json"` |
| fb-label | ラベル | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-label.json"` |
| fb-textarea | テキストエリア | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-textarea.json"` |
| fb-text | テキスト | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-text.json"` |
| fb-separator | 区切り線 | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-separator.json"` |
| fb-badge | バッジ | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-badge.json"` |
| fb-spinner | スピナー | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-spinner.json"` |
| fb-skeleton | スケルトン | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-skeleton.json"` |
| fb-kbd | キーボード | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-kbd.json"` |
| fb-avatar | アバター | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-avatar.json"` |
| fb-aspect-ratio | アスペクト比 | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-aspect-ratio.json"` |
| fb-progress | プログレスバー | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-progress.json"` |
| fb-toggle | トグル | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-toggle.json"` |
| fb-checkbox | チェックボックス | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-checkbox.json"` |
| fb-switch | スイッチ | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-switch.json"` |
| fb-radio-group | ラジオグループ | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-radio-group.json"` |

### Phase 2: オーバーレイ・ポップアップ系

| コンポーネント | 説明 | インストールコマンド |
|--------------|------|---------------------|
| fb-tooltip | ツールチップ | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-tooltip.json"` |
| fb-popover | ポップオーバー | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-popover.json"` |
| fb-dialog | ダイアログ | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-dialog.json"` |
| fb-alert-dialog | アラートダイアログ | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-alert-dialog.json"` |
| fb-sheet | シート | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-sheet.json"` |
| fb-drawer | ドロワー | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-drawer.json"` |
| fb-dropdown-menu | ドロップダウンメニュー | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-dropdown-menu.json"` |
| fb-context-menu | コンテキストメニュー | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-context-menu.json"` |
| fb-hover-card | ホバーカード | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-hover-card.json"` |
| fb-toast | トースト | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-toast.json"` |
| fb-sonner | Sonner | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-sonner.json"` |

### Phase 3: ナビゲーション・構造系

| コンポーネント | 説明 | インストールコマンド |
|--------------|------|---------------------|
| fb-accordion | アコーディオン | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-accordion.json"` |
| fb-collapsible | 折りたたみ | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-collapsible.json"` |
| fb-tabs | タブ | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-tabs.json"` |
| fb-toggle-group | トグルグループ | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-toggle-group.json"` |
| fb-breadcrumb | パンくずリスト | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-breadcrumb.json"` |
| fb-pagination | ページネーション | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-pagination.json"` |
| fb-navigation-menu | ナビゲーションメニュー | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-navigation-menu.json"` |
| fb-menubar | メニューバー | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-menubar.json"` |
| fb-scroll-area | スクロールエリア | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-scroll-area.json"` |
| fb-resizable | リサイズ可能 | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-resizable.json"` |

### Phase 4: フォーム・入力系

| コンポーネント | 説明 | インストールコマンド |
|--------------|------|---------------------|
| fb-alert | アラート | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-alert.json"` |
| fb-select | セレクト | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-select.json"` |
| fb-native-select | ネイティブセレクト | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-native-select.json"` |
| fb-command | コマンド | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-command.json"` |
| fb-combobox | コンボボックス | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-combobox.json"` |
| fb-slider | スライダー | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-slider.json"` |
| fb-input-otp | OTP入力 | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-input-otp.json"` |
| fb-form | フォーム | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-form.json"` |
| fb-field | フィールド | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-field.json"` |
| fb-input-group | インプットグループ | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-input-group.json"` |
| fb-button-group | ボタングループ | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-button-group.json"` |
| fb-item | アイテム | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-item.json"` |

### Phase 5: データ表示・高度なコンポーネント

| コンポーネント | 説明 | インストールコマンド |
|--------------|------|---------------------|
| fb-table | テーブル | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-table.json"` |
| fb-data-table | データテーブル | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-data-table.json"` |
| fb-calendar | カレンダー | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-calendar.json"` |
| fb-date-picker | 日付選択 | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-date-picker.json"` |
| fb-carousel | カルーセル | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-carousel.json"` |
| fb-chart | チャート | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-chart.json"` |
| fb-empty | 空状態 | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-empty.json"` |
| fb-sidebar | サイドバー | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/fb-sidebar.json"` |

### Blocks / ブロック

| ブロック | 説明 | インストールコマンド |
|---------|------|---------------------|
| hello-world | Hello World サンプル | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/hello-world.json"` |
| example-form | フォームサンプル | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/example-form.json"` |
| example-login | ログインフォーム | `npx shadcn@latest add "https://fly-by.design.yukyu.net/r/example-login.json"` |

---

## Design Principles / デザイン原則

- **プレフィックス**: `fb-` （例: `fb-button`, `fb-card`）
- **4pxグリッド**: すべてのサイズは4pxの倍数
- **Class-based**: `fb-{component} -{modifier}-{value}` 形式
- **Yukyu Flavor**: 鮮やかな青（#002CED）をベースカラーに
- **data-slot属性**: コンポーネント識別用に `data-slot="fb-{component}"` を使用

## Color Palette / カラーパレット

| 名前 | 用途 | HEX |
|------|------|-----|
| Primary 50 | 背景（薄い） | #e6ebfd |
| Primary 100 | ホバー背景 | #ccd7fb |
| Primary 500 | 基準色・ボタン | #002CED |
| Primary 600 | ホバー | #0025c4 |
| Primary 700 | アクティブ | #001e9b |

---

## Development / 開発

### ビルド

```bash
pnpm build
```

### レジストリのビルド

```bash
npx shadcn@latest build
```

### 開発サーバー

```bash
pnpm dev
```

## Documentation

Visit the [shadcn documentation](https://ui.shadcn.com/docs/registry) to view the full documentation.

## License

MIT
