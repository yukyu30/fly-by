import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Checkbox } from "../checkbox"

describe('Checkbox', () => {
  describe('レンダリング', () => {
    it('コンポーネントが正常にレンダリングされる', () => {
      render(<Checkbox data-testid="checkbox" />)
      expect(screen.getByTestId('checkbox')).toBeInTheDocument()
    })

    it('data-slot="checkbox"が設定される', () => {
      render(<Checkbox data-testid="checkbox" />)
      expect(screen.getByTestId('checkbox')).toHaveAttribute('data-slot', 'checkbox')
    })

    it('checkboxクラスが付与される', () => {
      render(<Checkbox data-testid="checkbox" />)
      expect(screen.getByTestId('checkbox')).toHaveClass('checkbox')
    })
  })

  describe('size バリアント', () => {
    it('デフォルトでmが適用される', () => {
      render(<Checkbox data-testid="checkbox" />)
      expect(screen.getByTestId('checkbox')).toHaveClass('-size-m')
    })

    it('size="s"が適用される', () => {
      render(<Checkbox data-testid="checkbox" size="s" />)
      expect(screen.getByTestId('checkbox')).toHaveClass('-size-s')
    })
  })

  describe('color バリアント', () => {
    it('デフォルトでinformativeが適用される', () => {
      render(<Checkbox data-testid="checkbox" />)
      expect(screen.getByTestId('checkbox')).toHaveClass('-color-informative')
    })

    it('color="positive"が適用される', () => {
      render(<Checkbox data-testid="checkbox" color="positive" />)
      expect(screen.getByTestId('checkbox')).toHaveClass('-color-positive')
    })
  })
})
