import "./example-login.css"

export function ExampleLogin() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">ログイン</h1>
        <p className="login-subtitle">
          アカウントにログインしてください
        </p>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="field-email">メールアドレス</label>
            <input
              id="field-email"
              type="email"
              placeholder="example@example.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="field-password">パスワード</label>
            <input
              id="field-password"
              type="password"
              placeholder="パスワードを入力"
              required
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="login-button">
              ログイン
            </button>
          </div>
          <div className="form-footer">
            <a href="#" className="forgot-password">
              パスワードをお忘れですか？
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}
