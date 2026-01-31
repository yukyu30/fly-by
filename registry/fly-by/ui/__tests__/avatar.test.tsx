import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Avatar, AvatarImage, AvatarFallback } from "../avatar"

describe('Avatar', () => {
  describe('レンダリング', () => {
    it('コンポーネントが正常にレンダリングされる', () => {
      render(
        <Avatar data-testid="avatar">
          <AvatarFallback>UN</AvatarFallback>
        </Avatar>
      )
      expect(screen.getByTestId('avatar')).toBeInTheDocument()
    })

    it('data-slot="avatar"が設定される', () => {
      render(
        <Avatar data-testid="avatar">
          <AvatarFallback>UN</AvatarFallback>
        </Avatar>
      )
      expect(screen.getByTestId('avatar')).toHaveAttribute('data-slot', 'avatar')
    })

    it('avatarクラスが付与される', () => {
      render(
        <Avatar data-testid="avatar">
          <AvatarFallback>UN</AvatarFallback>
        </Avatar>
      )
      expect(screen.getByTestId('avatar')).toHaveClass('avatar')
    })
  })

  describe('size バリアント', () => {
    it('デフォルトでmが適用される', () => {
      render(
        <Avatar data-testid="avatar">
          <AvatarFallback>UN</AvatarFallback>
        </Avatar>
      )
      expect(screen.getByTestId('avatar')).toHaveClass('-size-m')
    })

    it('size="l"が適用される', () => {
      render(
        <Avatar data-testid="avatar" size="l">
          <AvatarFallback>UN</AvatarFallback>
        </Avatar>
      )
      expect(screen.getByTestId('avatar')).toHaveClass('-size-l')
    })
  })

  describe('shape バリアント', () => {
    it('デフォルトでcircleが適用される', () => {
      render(
        <Avatar data-testid="avatar">
          <AvatarFallback>UN</AvatarFallback>
        </Avatar>
      )
      expect(screen.getByTestId('avatar')).toHaveClass('-shape-circle')
    })

    it('shape="square"が適用される', () => {
      render(
        <Avatar data-testid="avatar" shape="square">
          <AvatarFallback>UN</AvatarFallback>
        </Avatar>
      )
      expect(screen.getByTestId('avatar')).toHaveClass('-shape-square')
    })
  })
})
