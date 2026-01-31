import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Progress } from "../progress"

describe('Progress', () => {
  describe('レンダリング', () => {
    it('コンポーネントが正常にレンダリングされる', () => {
      render(<Progress data-testid="progress" value={50} />)
      expect(screen.getByTestId('progress')).toBeInTheDocument()
    })

    it('data-slot="progress"が設定される', () => {
      render(<Progress data-testid="progress" value={50} />)
      expect(screen.getByTestId('progress')).toHaveAttribute('data-slot', 'progress')
    })

    it('progressクラスが付与される', () => {
      render(<Progress data-testid="progress" value={50} />)
      expect(screen.getByTestId('progress')).toHaveClass('progress')
    })
  })

  describe('size バリアント', () => {
    it('デフォルトでmが適用される', () => {
      render(<Progress data-testid="progress" value={50} />)
      expect(screen.getByTestId('progress')).toHaveClass('-size-m')
    })

    it('size="l"が適用される', () => {
      render(<Progress data-testid="progress" value={50} size="l" />)
      expect(screen.getByTestId('progress')).toHaveClass('-size-l')
    })
  })
})
