import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Switch } from "../switch"

describe('Switch', () => {
  describe('レンダリング', () => {
    it('コンポーネントが正常にレンダリングされる', () => {
      render(<Switch data-testid="switch" />)
      expect(screen.getByTestId('switch')).toBeInTheDocument()
    })

    it('data-slot="switch"が設定される', () => {
      render(<Switch data-testid="switch" />)
      expect(screen.getByTestId('switch')).toHaveAttribute('data-slot', 'switch')
    })

    it('switchクラスが付与される', () => {
      render(<Switch data-testid="switch" />)
      expect(screen.getByTestId('switch')).toHaveClass('switch')
    })
  })

  describe('size バリアント', () => {
    it('デフォルトでmが適用される', () => {
      render(<Switch data-testid="switch" />)
      expect(screen.getByTestId('switch')).toHaveClass('-size-m')
    })

    it('size="l"が適用される', () => {
      render(<Switch data-testid="switch" size="l" />)
      expect(screen.getByTestId('switch')).toHaveClass('-size-l')
    })
  })

  describe('color バリアント', () => {
    it('デフォルトでinformativeが適用される', () => {
      render(<Switch data-testid="switch" />)
      expect(screen.getByTestId('switch')).toHaveClass('-color-informative')
    })

    it('color="positive"が適用される', () => {
      render(<Switch data-testid="switch" color="positive" />)
      expect(screen.getByTestId('switch')).toHaveClass('-color-positive')
    })
  })
})
