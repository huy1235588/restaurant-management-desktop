import { ReactNode } from 'react'

function BasePage(props: IProps) {
    return (
        <main className={'flex w-full relative'}>
            <div className={'  w-full'}>
                <div></div>
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
