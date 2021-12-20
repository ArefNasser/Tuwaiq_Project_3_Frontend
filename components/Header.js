import Link from 'next/Link'

const Header = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link href='/login'>
                            <a>login</a>
                            
                        </Link>
                    </li>
                    <li>
                        <Link href='/signup'>
                            <a>signup</a>
                        </Link>
                    </li>
                </ul>
            </nav>
            
        </div>
    )
}

export default Header


