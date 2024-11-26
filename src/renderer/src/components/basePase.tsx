import { ReactNode } from "react"

function BasePage(props: IProps) {
    return (
        <main className={'flex w-full relative'}>
            <div className={'  w-full'}>
                <aside>
                    <ul>
                        <li>
                            <a href="/">
                                Home
                            </a>
                        </li>

                        <li>
                            <a href="/employee">
                                Employee
                            </a>
                        </li>

                        <li>
                            <a href="/tables">
                                Tables
                            </a>
                        </li>
                    </ul>
                </aside>
                <div className={'grid gap-8'}>{props.children}</div>
                <div></div>
            </div>
        </main>
    )
}

export default BasePage

interface IProps {
    children: ReactNode;
}
