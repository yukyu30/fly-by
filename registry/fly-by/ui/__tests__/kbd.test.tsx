import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Kbd } from "../kbd"

describe('Kbd', () => {
  describe('レンダリング', () => {
    it('コンポーネントが正常にレンダリングされる', () => {
      render(<Kbd>⌘</Kbd>)
      expect(screen.getByText('⌘')).toBeInTheDocument()
    })

    it('data-slot="kbd"が設定される', () => {
      render(<Kbd data-testid="kbd">K</Kbd>)
      expect(screen.getByTestId('kbd')).toHaveAttribute('data-slot', 'kbd')
    })

    it('kbdクラスが付与される', () => {
      render(<Kbd data-testid="kbd">K</Kbd>)
      expect(screen.getByTestId('kbd')).toHaveClass('kbd')
    })

    it('kbd要素としてレンダリングされる', () => {
      render(<Kbd data-testid="kbd">K</Kbd>)
      expect(screen.getByTestId('kbd').tagName).toBe('KBD')
    })
  })

  describe('size バリアント', () => {
    it('デフォルトでmが適用される', () => {
      render(<Kbd data-testid="kbd">K</Kbd>)
      expect(screen.getByTestId('kbd')).toHaveClass('-size-m')
    })

    it('size="s"が適用される', () => {
      render(<Kbd data-testid="kbd" size="s">K</Kbd>)
      expect(screen.getByTestId('kbd')).toHaveClass('-size-s')
    })

    it('size="l"が適用される', () => {
      render(<Kbd data-testid="kbd" size="l">K</Kbd>)
      expect(screen.getByTestId('kbd')).toHaveClass('-size-l')
    })
  })
})
