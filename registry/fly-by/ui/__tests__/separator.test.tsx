import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Separator } from "../separator"

/**
 * テストリスト（separator）:
 * [x] コンポーネントが正常にレンダリングされる
 * [x] data-slot="separator"が設定される
 * [x] separatorクラスが付与される
 * [x] orientation="horizontal"（デフォルト）のスタイルが適用される
 * [x] orientation="vertical"のスタイルが適用される
 * [x] decorative属性がサポートされる
 */

describe('Separator', () => {
  // レンダリングテスト
  describe('レンダリング', () => {
    it('コンポーネントが正常にレンダリングされる', () => {
      render(<Separator data-testid="separator" />)
      const separator = screen.getByTestId('separator')
      expect(separator).toBeInTheDocument()
    })

    it('data-slot="separator"が設定される', () => {
      render(<Separator data-testid="separator" />)
      const separator = screen.getByTestId('separator')
      expect(separator).toHaveAttribute('data-slot', 'separator')
    })

    it('separatorクラスが付与される', () => {
      render(<Separator data-testid="separator" />)
      const separator = screen.getByTestId('separator')
      expect(separator).toHaveClass('separator')
    })
  })

  // バリアントテスト
  describe('orientation', () => {
    it('デフォルトでhorizontalスタイルが適用される', () => {
      render(<Separator data-testid="separator" />)
      const separator = screen.getByTestId('separator')
      expect(separator).toHaveClass('-orientation-horizontal')
    })

    it('orientation="vertical"のスタイルが適用される', () => {
      render(<Separator data-testid="separator" orientation="vertical" />)
      const separator = screen.getByTestId('separator')
      expect(separator).toHaveClass('-orientation-vertical')
    })
  })

  // アクセシビリティテスト
  describe('アクセシビリティ', () => {
    it('decorative=trueでrole="none"が設定される', () => {
      render(<Separator data-testid="separator" decorative />)
      const separator = screen.getByTestId('separator')
      expect(separator).toHaveAttribute('role', 'none')
    })

    it('decorative=falseでrole="separator"が設定される', () => {
      render(<Separator data-testid="separator" decorative={false} />)
      const separator = screen.getByTestId('separator')
      expect(separator).toHaveAttribute('role', 'separator')
    })
  })
})
