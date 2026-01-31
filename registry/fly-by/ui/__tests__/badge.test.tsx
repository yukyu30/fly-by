import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Badge } from "../badge"

/**
 * テストリスト（badge）:
 * [x] コンポーネントが正常にレンダリングされる
 * [x] data-slot="badge"が設定される
 * [x] badgeクラスが付与される
 * [x] colorバリアント（informative/positive/negative/neutral/favorite）
 * [x] appearanceバリアント（solid/outlined/flat）
 * [x] sizeバリアント（s/m/l）
 */

describe('Badge', () => {
  describe('レンダリング', () => {
    it('コンポーネントが正常にレンダリングされる', () => {
      render(<Badge>Badge</Badge>)
      expect(screen.getByText('Badge')).toBeInTheDocument()
    })

    it('data-slot="badge"が設定される', () => {
      render(<Badge data-testid="badge">Badge</Badge>)
      expect(screen.getByTestId('badge')).toHaveAttribute('data-slot', 'badge')
    })

    it('badgeクラスが付与される', () => {
      render(<Badge data-testid="badge">Badge</Badge>)
      expect(screen.getByTestId('badge')).toHaveClass('badge')
    })
  })

  describe('color バリアント', () => {
    it('デフォルトでneutralが適用される', () => {
      render(<Badge data-testid="badge">Badge</Badge>)
      expect(screen.getByTestId('badge')).toHaveClass('-color-neutral')
    })

    it('color="informative"が適用される', () => {
      render(<Badge data-testid="badge" color="informative">Badge</Badge>)
      expect(screen.getByTestId('badge')).toHaveClass('-color-informative')
    })

    it('color="positive"が適用される', () => {
      render(<Badge data-testid="badge" color="positive">Badge</Badge>)
      expect(screen.getByTestId('badge')).toHaveClass('-color-positive')
    })

    it('color="negative"が適用される', () => {
      render(<Badge data-testid="badge" color="negative">Badge</Badge>)
      expect(screen.getByTestId('badge')).toHaveClass('-color-negative')
    })

    it('color="favorite"が適用される', () => {
      render(<Badge data-testid="badge" color="favorite">Badge</Badge>)
      expect(screen.getByTestId('badge')).toHaveClass('-color-favorite')
    })
  })

  describe('appearance バリアント', () => {
    it('デフォルトでflatが適用される', () => {
      render(<Badge data-testid="badge">Badge</Badge>)
      expect(screen.getByTestId('badge')).toHaveClass('-appearance-flat')
    })

    it('appearance="solid"が適用される', () => {
      render(<Badge data-testid="badge" appearance="solid">Badge</Badge>)
      expect(screen.getByTestId('badge')).toHaveClass('-appearance-solid')
    })

    it('appearance="outlined"が適用される', () => {
      render(<Badge data-testid="badge" appearance="outlined">Badge</Badge>)
      expect(screen.getByTestId('badge')).toHaveClass('-appearance-outlined')
    })
  })

  describe('size バリアント', () => {
    it('デフォルトでmが適用される', () => {
      render(<Badge data-testid="badge">Badge</Badge>)
      expect(screen.getByTestId('badge')).toHaveClass('-size-m')
    })

    it('size="s"が適用される', () => {
      render(<Badge data-testid="badge" size="s">Badge</Badge>)
      expect(screen.getByTestId('badge')).toHaveClass('-size-s')
    })

    it('size="l"が適用される', () => {
      render(<Badge data-testid="badge" size="l">Badge</Badge>)
      expect(screen.getByTestId('badge')).toHaveClass('-size-l')
    })
  })
})
