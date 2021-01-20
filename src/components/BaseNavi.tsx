import Link from 'next/link'

export default function BaseNavi() {
  return (
    <header className="g-nav">
      <div className="header--nav">
        <ul className="nav--list">
          <li className="nav__item">
            <Link href="/" as="/"><a>index</a></Link>
          </li>
          <li className="nav__item">
            <Link href="/about" as="/about"><a>about</a></Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

